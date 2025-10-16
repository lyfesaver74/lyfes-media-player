import { MiniMediaPlayerConfiguration } from './config/types';
import { PROGRESS_PROPS, MEDIA_DURATION_PROP, MEDIA_INFO, PLATFORM, REPEAT_STATE } from './const';
import { HomeAssistant, MediaPlayerEntity, MediaPlayerEntityAttributes, MediaPlayerEntityState } from './types';
import arrayBufferToBase64 from './utils/misc';

export interface MediaPlayerMedia {
  media_content_type: string;
  media_content_id: string;
}

export default class MediaPlayerObject {
  hass: HomeAssistant;
  config: MiniMediaPlayerConfiguration;
  entity: MediaPlayerEntity;

  state: MediaPlayerEntityState;
  idle: boolean;

  _entityId: string;
  _attr: MediaPlayerEntityAttributes;
  _active: boolean;

  constructor(hass: HomeAssistant, config: MiniMediaPlayerConfiguration, entity: MediaPlayerEntity) {
    this.hass = hass || {};
    this.config = config || {};
    this.entity = entity || {};
    this.state = entity.state;
    this._entityId = (entity && entity.entity_id) || this.config.entity;
    this._attr = entity.attributes || {};
    this.idle = config.idle_view ? this.idleView : false;
    this._active = this.isActive;
  }

  get id(): string {
    return this.entity.entity_id;
  }

  get icon(): string | undefined {
    return this._attr.icon;
  }

  get isPaused(): boolean {
    return this.state === MediaPlayerEntityState.PAUSED;
  }

  get isPlaying(): boolean {
    return this.state === MediaPlayerEntityState.PLAYING;
  }

  get isIdle(): boolean {
    return this.state === MediaPlayerEntityState.IDLE;
  }

  get isStandby(): boolean {
    return this.state === MediaPlayerEntityState.STANDBY;
  }

  get isUnavailable(): boolean {
    return this.state === MediaPlayerEntityState.UNAVAILABLE;
  }

  get isOff(): boolean {
    return this.state === MediaPlayerEntityState.OFF;
  }

  get isActive(): boolean {
    return (!this.isOff && !this.isUnavailable && !this.idle) || false;
  }

  get assumedState(): boolean {
    return this._attr.assumed_state || false;
  }

  get shuffle(): boolean {
    return this._attr.shuffle || false;
  }

  get repeat(): string {
    return this._attr.repeat || REPEAT_STATE.OFF;
  }

  get content(): string {
    return this._attr.media_content_type || 'none';
  }

  // Display name prefers custom_name when present
  get name(): string {
    return this._attr.custom_name || this._attr.friendly_name || '';
  }

  get mediaDuration(): string | number | Date {
    return this._attr.media_duration || 0;
  }

  get updatedAt(): string | number | Date {
    return this._attr.media_position_updated_at || 0;
  }

  // Build the second info line based on content type
  get secondaryLine(): string {
    const type = (this._attr.media_content_type || '').toLowerCase();
    if (type === 'tvchannel') {
      const channelNum = this._attr.channel_number ?? '';
      const channelName = this._attr.channel_name ?? '';
      const programSeries = this._attr.program_series ?? '';
      const left = [channelNum, channelName].filter(Boolean).join(' ');
      const right = programSeries ? `: ${programSeries}` : '';
      return `${left}${right}`.trim();
    }

    if (type === 'tvshow' || type === 'tv-series' || type === 'episode') {
      const series = this._attr.media_series_title ?? '';
      const season = this._attr.media_season != null ? `S${this._attr.media_season}` : '';
      const episode = this._attr.media_episode != null ? `E${this._attr.media_episode}` : '';
      const title = this._attr.media_title ?? '';
      const se = [season, episode].filter(Boolean).join('');
      return [series, se, title].filter(Boolean).join(' - ');
    }

    if (type === 'movie' || type === 'film') {
      return this._attr.media_title ?? '';
    }

    return this._attr.media_title || this._attr.media_series_title || '';
  }

  get position(): number {
    return this._attr.media_position || 0;
  }

  // Structured parts for pill rendering on line 3
  get streamParts(): { kind: 'vcodec' | 'resolution' | 'fps' | 'acodec' | 'method'; text: string }[] {
    const out: { kind: 'vcodec' | 'resolution' | 'fps' | 'acodec' | 'method'; text: string }[] = [];

  // Resolution - parse from video_resolution (e.g., "1920x1080")
    let resolution = '';
    const videoRes = this._attr.video_resolution || '';
    if (videoRes) {
      const match = String(videoRes).match(/(\d+)x(\d+)/i);
      if (match) {
        const height = parseInt(match[2]);
        if (height >= 2160) resolution = '4K';
        else if (height >= 1440) resolution = '1440P';
        else if (height >= 1080) resolution = '1080P';
        else if (height >= 720) resolution = '720P';
        else resolution = `${height}P`;
      }
    }
    // Fallback to explicit media_resolution or video_height
    if (!resolution) {
      const explicitRes = (this._attr.media_resolution || '').toString().toUpperCase();
      if (explicitRes) {
        resolution = explicitRes;
      } else {
        const h = Number(this._attr.video_height || 0);
        if (h >= 2160) resolution = '4K';
        else if (h >= 1440) resolution = '1440P';
        else if (h >= 1080) resolution = '1080P';
        else if (h >= 720) resolution = '720P';
        else if (h > 0) resolution = `${h}P`;
      }
    }
  if (resolution) out.push({ kind: 'resolution', text: resolution });

  // Video codec (after resolution)
  const vcodec = (this._attr.video_codec || '').toString().toUpperCase();
  if (vcodec) out.push({ kind: 'vcodec', text: vcodec });

    // FPS - prefer video_framerate; round to nearest integer and append 'FPS' without space
    const fpsNum = Number(this._attr.video_framerate || this._attr.video_fps || this._attr.frame_rate || 0);
    if (fpsNum > 0) {
      const rounded = Math.round(fpsNum);
      const fpsText = `${rounded}FPS`;
      out.push({ kind: 'fps', text: fpsText });
    }

    // Audio codec
    const acodec = (this._attr.audio_codec || '').toString().toUpperCase();
    if (acodec) out.push({ kind: 'acodec', text: acodec });

    // Method
    const method = this.computeTranscodingLabel();
    if (method) out.push({ kind: 'method', text: method });

    return out;
  }

  // Build the third info line with stream details (string form)
  get streamLine(): string {
    const parts = this.streamParts.map((p) => p.text);
    return parts.join(' ');
  }

  private computeTranscodingLabel(): string {
    // Use Emby's playback_method attribute
    const playbackMethod = (this._attr.playback_method || '').toString().toLowerCase();
    
    if (playbackMethod === 'transcoding') return 'Transcoded';
    if (playbackMethod === 'direct') return 'Direct';
    
    // Fallback to other possible methods for compatibility
    const method = (this._attr.play_method || '').toString().toLowerCase();
    if (method.includes('transcode')) return 'Transcoded';
    if (method.includes('direct')) return 'Direct';
    
    // If no clear indication, omit the label
    return '';
  }

  get groupCount(): number {
    return this.group.length;
  }

  get isGrouped(): boolean {
    return this.group.length > 1;
  }

  get group(): string[] {
    if (this.platform === PLATFORM.SQUEEZEBOX) {
      return this._attr.sync_group || [];
    }
    if (this.platform === PLATFORM.MEDIAPLAYER || this.platform === PLATFORM.HEOS
      || this.platform === PLATFORM.SONOS) {
      return this._attr.group_members || [];
    }
    return (this._attr[`${this.platform}_group`] || []) as string[];
  }

  get platform(): string {
    return this.config.speaker_group.platform;
  }

  get master(): string {
    return this.supportsMaster ? this.group[0] || this._entityId : this._entityId;
  }

  get isMaster(): boolean {
    return this.master === this._entityId;
  }

  get sources(): string[] {
    return this._attr.source_list || [];
  }

  get source(): string {
    return this._attr.source || '';
  }

  get soundModes(): string[] {
    return this._attr.sound_mode_list || [];
  }

  get soundMode(): string {
    return this._attr.sound_mode || '';
  }

  get muted(): boolean {
    return this._attr.is_volume_muted || false;
  }

  get vol(): number {
    return this._attr.volume_level || 0;
  }

  get picture(): string | undefined {
      // Always prefer program_image_url if present
      if (this._attr.program_image_url) {
        return this._attr.program_image_url;
      }
      return this._attr.entity_picture_local || this._attr.entity_picture;
  }

  get hasArtwork(): boolean {
    return !!this.picture && this.config.artwork !== 'none' && this._active && !this.idle;
  }

  get mediaInfo(): {
    text: string;
    prefix: string;
    attr: string;
  }[] {
    return MEDIA_INFO.map((item) => ({
      text: this._attr[item.attr],
      prefix: '',
      ...item,
    })).filter((item) => item.text);
  }

  get hasProgress(): boolean {
    return !this.config.hide.progress && !this.idle && PROGRESS_PROPS.every((prop) => prop in this._attr) && (this._attr[MEDIA_DURATION_PROP] ?? -1) > -1;
  }

  get supportsPrev(): boolean {
    return !!this._attr.supported_features && (this._attr.supported_features | 16) === this._attr.supported_features;
  }

  get supportsNext(): boolean {
    return !!this._attr.supported_features && (this._attr.supported_features | 32) === this._attr.supported_features;
  }

  get progress(): number {
    if (this.isPlaying) {
      return this.position + (Date.now() - new Date(this.updatedAt).getTime()) / 1000.0;
    } else {
      return this.position;
    }
  }

  get idleView(): boolean {
    const idle = this.config.idle_view;
    if (
      (idle?.when_idle && this.isIdle) ||
      (idle?.when_standby && this.isStandby) ||
      (idle?.when_paused && this.isPaused)
    )
      return true;

    // TODO: remove?
    if (!this.updatedAt || !idle?.after || this.isPlaying) return false;

    return this.checkIdleAfter(idle.after);
  }

  get trackIdle(): boolean {
    return Boolean(this._active && !this.isPlaying && this.updatedAt && this.config?.idle_view?.after);
  }

  public checkIdleAfter(time: number): boolean {
    const diff = (Date.now() - new Date(this.updatedAt).getTime()) / 1000;
    this.idle = diff > time * 60;
    this._active = this.isActive;
    return this.idle;
  }

  get supportsShuffle(): boolean {
    return typeof this._attr.shuffle !== 'undefined';
  }

  get supportsRepeat(): boolean {
    return typeof this._attr.repeat !== 'undefined';
  }

  get supportsMute(): boolean {
    return typeof this._attr.is_volume_muted !== 'undefined';
  }

  get supportsVolumeSet(): boolean {
    return typeof this._attr.volume_level !== 'undefined';
  }

  get supportsMaster(): boolean {
    return this.platform !== PLATFORM.SQUEEZEBOX && this.config.speaker_group.supports_master;
  }

  async fetchArtwork(): Promise<string | false> {
    try {
      // Determine which URL to use
      let url: string;
      
      // Always prefer program_image_url for TV channels if available
      if (this._attr.program_image_url && this._attr.media_content_type === 'tvchannel') {
        url = this._attr.program_image_url;
        console.log('Using TV program image:', url);
      } else if (this._attr.entity_picture_local) {
        url = this.hass.hassUrl(this._attr.entity_picture_local);
        console.log('Using local entity picture:', url);
      } else if (this._attr.entity_picture) {
        url = this._attr.entity_picture;
        console.log('Using entity picture:', url);
      } else {
        console.log('No image URL available');
        return false;
      }

      const res = await fetch(new Request(url));
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      
      const buffer = await res.arrayBuffer();
      const image64 = arrayBufferToBase64(buffer);
      const imageType = res.headers.get('Content-Type') || 'image/jpeg';
      return `url(data:${imageType};base64,${image64})`;
    } catch (error) {
      console.error('Error fetching artwork:', error);
      return false;
    }
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  getAttribute(attribute: keyof MediaPlayerEntityAttributes): any {
    return this._attr[attribute];
  }

  toggle(e: MouseEvent): void {
    if (this.config.toggle_power) return this.callService(e, 'toggle');
    if (this.isOff) return this.callService(e, 'turn_on');
    else this.callService(e, 'turn_off');
  }

  toggleMute(e: MouseEvent): void {
    if (this.config.speaker_group.sync_volume) {
      this.group.forEach((entity) => {
        this.callService(e, 'volume_mute', {
          entity_id: entity,
          is_volume_muted: !this.muted,
        });
      });
    } else {
      this.callService(e, 'volume_mute', { is_volume_muted: !this.muted });
    }
  }

  toggleShuffle(e: MouseEvent): void {
    this.callService(e, 'shuffle_set', { shuffle: !this.shuffle });
  }

  toggleRepeat(e: MouseEvent): void {
    const states = Object.values(REPEAT_STATE);
    const { length } = states;
    const currentIndex = states.indexOf(this.repeat) - 1;
    const nextState = states[(currentIndex - (1 % length) + length) % length];
    this.callService(e, 'repeat_set', { repeat: nextState });
  }

  setSource(e: Event, source: string): void {
    this.callService(e, 'select_source', { source });
  }

  // TODO: fix opts type
  setMedia(e: MouseEvent, opts: MediaPlayerMedia): void {
    this.callService(e, 'play_media', { ...opts });
  }

  play(e: MouseEvent): void {
    this.callService(e, 'media_play');
  }

  pause(e: MouseEvent): void {
    this.callService(e, 'media_pause');
  }

  playPause(e: MouseEvent): void {
    this.callService(e, 'media_play_pause');
  }

  playStop(e: MouseEvent): void {
    if (!this.isPlaying) this.callService(e, 'media_play');
    else this.callService(e, 'media_stop');
  }

  setSoundMode(e: Event, name: string): void {
    this.callService(e, 'select_sound_mode', { sound_mode: name });
  }

  next(e: MouseEvent): void {
    this.callService(e, 'media_next_track');
  }

  prev(e: MouseEvent): void {
    this.callService(e, 'media_previous_track');
  }

  stop(e: MouseEvent): void {
    this.callService(e, 'media_stop');
  }

  volumeUp(e: MouseEvent): void {
    if (this.supportsVolumeSet && this.config.volume_step && this.config.volume_step > 0) {
      this.callService(e, 'volume_set', {
        entity_id: this._entityId,
        volume_level: Math.min(this.vol + this.config.volume_step / 100, 1),
      });
    } else this.callService(e, 'volume_up');
  }

  volumeDown(e: MouseEvent): void {
    if (this.supportsVolumeSet && this.config.volume_step && this.config.volume_step > 0) {
      this.callService(e, 'volume_set', {
        entity_id: this._entityId,
        volume_level: Math.max(this.vol - this.config.volume_step / 100, 0),
      });
    } else this.callService(e, 'volume_down');
  }

  seek(e: MouseEvent, pos: number): void {
    this.callService(e, 'media_seek', { seek_position: pos });
  }

  jump(e: MouseEvent, amount: number): void {
    const newPosition = this.progress + amount;
    const clampedNewPosition = Math.min(Math.max(newPosition, 0), Number(this.mediaDuration) || newPosition);
    this.callService(e, 'media_seek', { seek_position: clampedNewPosition });
  }

  setVolume(e: MouseEvent, volume: number): void {
    if (this.config.speaker_group.sync_volume && this.config.speaker_group.entities) {
      this.group.forEach((entity) => {
        const conf = this.config.speaker_group.entities?.find((entry) => entry.entity_id === entity);

        if (typeof conf === 'undefined') return;

        let offsetVolume = volume;
        if (conf.volume_offset) {
          offsetVolume += conf.volume_offset / 100;
          if (offsetVolume > 1) offsetVolume = 1;
          if (offsetVolume < 0) offsetVolume = 0;
        }
        this.callService(e, 'volume_set', {
          entity_id: entity,
          volume_level: offsetVolume,
        });
      });
    } else {
      this.callService(e, 'volume_set', {
        entity_id: this._entityId,
        volume_level: volume,
      });
    }
  }

  handleGroupChange(e: Event, entity: string | string[], checked: boolean): void {
    const { platform } = this;
    const options: { entity_id: string | string[]; master?: string } = { entity_id: entity };
    if (checked) {
      options.master = this._entityId;
      switch (platform) {
        case PLATFORM.SOUNDTOUCH:
          return this.handleSoundtouch(e, this.isGrouped ? 'ADD_ZONE_SLAVE' : 'CREATE_ZONE', entity);
        case PLATFORM.SQUEEZEBOX:
          return this.callService(
            e,
            'sync',
            {
              entity_id: this._entityId,
              other_player: entity,
            },
            PLATFORM.SQUEEZEBOX,
          );
        case PLATFORM.MEDIAPLAYER:
        case PLATFORM.SONOS:
          return this.callService(
            e,
            'join',
            {
              entity_id: this._entityId,
              group_members: entity,
            },
            PLATFORM.MEDIAPLAYER,
          );
        case PLATFORM.HEOS:
          return this.callService(
            e,
            'join',
            {
              entity_id: this._entityId,
              group_members: this.group.concat(typeof entity === 'string' ? [entity] : entity),
            },
            PLATFORM.MEDIAPLAYER,
          );
        default:
          return this.callService(e, 'join', options, platform);
      }
    } else {
      switch (platform) {
        case PLATFORM.SOUNDTOUCH:
          return this.handleSoundtouch(e, 'REMOVE_ZONE_SLAVE', entity);
        case PLATFORM.SQUEEZEBOX:
          return this.callService(e, 'unsync', options, PLATFORM.SQUEEZEBOX);
        case PLATFORM.MEDIAPLAYER:
        case PLATFORM.SONOS:
          return this.callService(
            e,
            'unjoin',
            {
              entity_id: entity,
            },
            PLATFORM.MEDIAPLAYER,
          );
        case PLATFORM.HEOS:
          return this.callService(
            e,
            'unjoin',
            {
              entity_id: typeof entity === 'string' ? entity : entity[0],
            },
            PLATFORM.MEDIAPLAYER,
          );
        default:
          return this.callService(e, 'unjoin', options, platform);
      }
    }
  }

  handleSoundtouch(e: Event, service: string, entity: string | string[]): void {
    return this.callService(
      e,
      service,
      {
        master: this.master,
        slaves: entity,
      },
      PLATFORM.SOUNDTOUCH,
      true,
    );
  }

  toggleScript(e: MouseEvent, id: string, data: Record<string, string> = {}): void {
    const [, name] = id.split('.');
    this.callService(
      e,
      name,
      {
        ...data,
      },
      'script',
    );
  }

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  toggleService(e: MouseEvent, id: string, data: Record<string, any> = {}): void {
    e.stopPropagation();
    const [domain, service] = id.split('.');
    this.hass.callService(domain, service, {
      ...data,
    });
  }

  // TODO: type available services
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  callService(e: Event, service: string, inOptions?: Record<string, any>, domain = 'media_player', omit = false): void {
    e.stopPropagation();
    this.hass.callService(domain, service, {
      ...(!omit && { entity_id: this._entityId }),
      ...inOptions,
    });
  }
}
