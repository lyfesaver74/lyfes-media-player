

import { css } from 'lit-element';

const style = css`
  :host {
    overflow: visible !important;
    display: block;
    --mmp-scale: var(--mini-media-player-scale, 1);
    --mmp-unit: calc(var(--mmp-scale) * 40px);
    --mmp-name-font-weight: var(--mini-media-player-name-font-weight, 400);
    --mmp-accent-color: var(--mini-media-player-accent-color, var(--accent-color, #f39c12));
    --mmp-base-color: var(--mini-media-player-base-color, var(--primary-text-color, #000));
    --mmp-overlay-color: var(--mini-media-player-overlay-color, rgba(0, 0, 0, 0.5));
    --mmp-overlay-color-stop: var(--mini-media-player-overlay-color-stop, 25%);
    --mmp-overlay-base-color: var(--mini-media-player-overlay-base-color, #fff);
    --mmp-overlay-accent-color: var(--mini-media-player-overlay-accent-color, --mmp-accent-color);
    --mmp-text-color: var(--mini-media-player-base-color, var(--primary-text-color, #000));
    --mmp-media-cover-info-color: var(--mini-media-player-media-cover-info-color, --mmp-text-color);
    --mmp-text-color-inverted: var(--disabled-text-color);
    --mmp-active-color: var(--mmp-accent-color);
    --mmp-button-color: var(--mini-media-player-button-color, rgba(255, 255, 255, 0.25));
    --mmp-icon-color: var(
      --mini-media-player-icon-color,
      var(--mini-media-player-base-color, var(--paper-item-icon-color, #44739e))
    );
    --mmp-icon-active-color: var(--paper-item-icon-active-color, --mmp-active-color);
    --mmp-info-opacity: 0.75;
    --mmp-bg-opacity: var(--mini-media-player-background-opacity, 1);
    --mmp-artwork-opacity: var(--mini-media-player-artwork-opacity, 1);
    --mmp-progress-height: var(--mini-media-player-progress-height, 6px);
    --mmp-border-radius: var(--ha-card-border-radius, 12px);
    --mdc-theme-primary: var(--mmp-text-color);
    --mdc-theme-on-primary: var(--mmp-text-color);
    --paper-checkbox-unchecked-color: var(--mmp-text-color);
    --paper-checkbox-label-color: var(--mmp-text-color);
    color: var(--mmp-text-color);
  }
  ha-card.--bg {
    --mmp-info-opacity: 0.75;
  }
  ha-card.--has-artwork[artwork='material'],
  ha-card.--has-artwork[artwork*='cover'] {
    --mmp-accent-color: var(
      --mini-media-player-overlay-accent-color,
      var(--mini-media-player-accent-color, var(--accent-color, #f39c12))
    );
    --mmp-text-color: var(--mmp-overlay-base-color);
    --mmp-text-color-inverted: #000;
    --mmp-active-color: rgba(255, 255, 255, 0.5);
    --mmp-icon-color: var(--mmp-text-color);
    --mmp-icon-active-color: var(--mmp-text-color);
    --mmp-info-opacity: 0.75;
    --disabled-color: var(--mini-media-player-overlay-color, rgba(255, 255, 255, 0.75)) !important;
    --mdc-theme-primary: var(--mmp-text-color);
    --mdc-theme-on-primary: var(--mmp-text-color);
    --paper-checkbox-unchecked-color: var(--mmp-text-color);
    --paper-checkbox-label-color: var(--mmp-text-color);
    --switch-checked-color: var(--mmp-accent-color);
    --switch-checked-button-color: var(--mmp-accent-color);
    --switch-checked-track-color: var(--mmp-accent-color);
    --switch-unchecked-color: var(--mmp-text-color);
    --switch-unchecked-button-color: var(--mmp-text-color);
    --switch-unchecked-track-color: var(--mmp-text-color);
    --mdc-text-field-fill-color: transparent;
    --mdc-text-field-ink-color: var(--mmp-text-color);
    --mdc-text-field-idle-line-color: var(--mmp-text-color);
    --mdc-text-field-label-ink-color: var(--mmp-text-color);
    --mdc-text-field-hover-line-color: var(--mmp-text-color);
    --mdc-ripple-color: var(--mmp-text-color);
    --text-field-padding: 0;
    color: var(--mmp-text-color);
  }
  ha-card {
    cursor: default;
    display: flex;
    background: transparent;
    overflow: visible;
    padding: 0;
    position: relative;
    color: inherit;
    font-size: calc(var(--mmp-unit) * 0.35);
    --mdc-icon-button-size: calc(var(--mmp-unit));
    --mdc-icon-size: calc(var(--mmp-unit) * 0.6);
  }
  ha-card.--group {
    box-shadow: none;
    border: none;
    --mmp-progress-height: var(--mini-media-player-progress-height, 4px);
    --mmp-border-radius: 0px
  }
  ha-card.--more-info {
    cursor: pointer;
  }
  .lmp__bg,
  .lmp-player,
  .lmp__container {
    border-radius: var(--mmp-border-radius);
  }
  .lmp__container {
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
    pointer-events: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  ha-card:before {
    content: '';
    padding-top: 0px;
    transition: padding-top 0.5s cubic-bezier(0.21, 0.61, 0.35, 1);
    will-change: padding-top;
  }
  ha-card.--initial .entity__artwork,
  ha-card.--initial .entity__icon {
    animation-duration: 0.001s;
  }
  ha-card.--initial:before,
  ha-card.--initial .lmp-player {
    transition: none;
  }
  header {
    display: none;
  }
  ha-card[artwork='full-cover'].--has-artwork:before {
    padding-top: 56%;
  }
  ha-card[artwork='full-cover'].--has-artwork[content='music']:before,
  ha-card[artwork='full-cover-fit'].--has-artwork:before {
    padding-top: 100%;
  }
  .lmp__bg {
    background: var(--ha-card-background, var(--card-background-color, var(--paper-card-background-color, white)));
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: var(--mmp-bg-opacity);
  }
  ha-card[artwork='material'].--has-artwork .lmp__bg,
  ha-card[artwork*='cover'].--has-artwork .lmp__bg {
    opacity: var(--mmp-artwork-opacity);
    background: transparent;
  }
  ha-card[artwork='material'].--has-artwork .cover {
    height: 100%;
    right: 0;
    left: unset;
    animation: fade-in 4s cubic-bezier(0.21, 0.61, 0.35, 1) !important;
  }
  ha-card[artwork='material'].--has-artwork .cover.--prev {
    animation: fade-in 1s linear reverse forwards !important;
  }
  ha-card[artwork='material'].--has-artwork .cover-gradient {
    position: absolute;
    height: 100%;
    right: 0;
    left: 0;
    opacity: 1;
  }
  ha-card.--group .lmp__bg {
    background: transparent;
  }
  ha-card.--inactive .cover {
    opacity: 0;
  }
  ha-card.--inactive .cover.--bg {
    opacity: 1;
  }
  .cover-gradient {
    transition: opacity 0.45s linear;
    opacity: 0;
  }
  .cover,
  .cover:before {
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.75s linear, width 0.05s cubic-bezier(0.21, 0.61, 0.35, 1);
    will-change: opacity;
  }
  .cover:before {
    content: '';
    background: var(--mmp-overlay-color);
  }
  .cover {
    animation: fade-in 0.5s cubic-bezier(0.21, 0.61, 0.35, 1);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: var(--mmp-border-radius, 0);
    overflow: hidden;
  }
  .cover.--prev {
    animation: fade-in 0.5s linear reverse forwards;
  }
  .cover.--bg {
    opacity: 1;
  }
  ha-card[artwork*='full-cover'].--has-artwork .lmp-player {
    background: linear-gradient(to top, var(--mmp-overlay-color) var(--mmp-overlay-color-stop), transparent 100%);
  }
  ha-card.--has-artwork .cover,
  ha-card.--has-artwork[artwork='cover'] .cover:before {
    opacity: 0.999;
  }
  ha-card[artwork='default'] .cover {
    display: none;
  }
  ha-card.--bg .cover {
    display: block;
  }
  ha-card[artwork='material'].--has-artwork .cover {
    background-size: cover;
  }
  ha-card[artwork='full-cover-fit'].--has-artwork .cover {
    background-color: black;
    background-size: contain;
  }
  .lmp-player {
    align-self: flex-end;
    box-sizing: border-box;
    position: relative;
    padding: 16px;
    transition: padding 0.25s ease-out;
    width: 100%;
    will-change: padding;
  }
  ha-card.--group .lmp-player {
    padding: 2px 0;
  }
  .flex {
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: row;
  }
  .lmp-player__core {
    position: relative;
  }
  .entity__info {
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    position: relative;
    overflow: hidden;
    user-select: none;
    box-sizing: border-box;

    /* Updated flex to match screenshot: flex: 2 1 0% */
    flex: 2 1 0%;
    min-width: 0;
  }

  ha-card.--rtl .entity__info {
    margin-left: auto;
    margin-right: calc(var(--mmp-unit) / 5);
  }
  ha-card[content='movie'] .attr__media_season,
  ha-card[content='movie'] .attr__media_episode {
    display: none;
  }
  .entity__icon {
    color: var(--mmp-icon-color);
  }
  .entity__icon[color] {
    color: var(--mmp-icon-active-color);
  }
  .entity__artwork,
  .entity__icon {
    animation: fade-in 0.25s ease-out;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    height: var(--mmp-unit);
    width: var(--mmp-unit);
    min-width: var(--mmp-unit);
    line-height: var(--mmp-unit);
    margin-right: calc(var(--mmp-unit) / 5);
    position: relative;
    text-align: center;
    will-change: border-color;
    transition: border-color 0.25s ease-out;
  }
  ha-card.--rtl .entity__artwork,
  ha-card.--rtl .entity__icon {
    margin-right: auto;
  }
  .entity__artwork[border] {
    border: 2px solid var(--primary-text-color);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .entity__artwork[border][state='playing'] {
    border-color: var(--mmp-accent-color);
  }
  .entity__info__name,
  .entity__info__media[short] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .entity__info__name {
    line-height: calc(var(--mmp-unit) / 2);
    color: var(--mmp-text-color);
    font-weight: var(--mmp-name-font-weight);
  }
  .entity__info__media {
    color: var(--secondary-text-color);
    max-height: 6em;
    word-break: break-word;
    opacity: var(--mmp-info-opacity);
    transition: color 0.5s;
    -webkit-text-size-adjust: 100%;
  }
  .entity__info__media .lmp-line-2,
  .entity__info__media .lmp-line-3 {
    line-height: calc(var(--mmp-unit) / 2);
    white-space: normal;
  }
  .entity__info__media[compact] .lmp-line-2,
  .entity__info__media[compact] .lmp-line-3 {
    line-height: calc(var(--mmp-unit) / 2.4);
  }
  .entity__info__media[compact] .lmp-line-3 {
    gap: 4px;
    margin-top: 3px;
  }
  .entity__info__media[compact] .lmp-pill {
    padding: 0px 7px;
    font-size: 0.68em;
    line-height: 1.15em;
  }
  .lmp-line-3 {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 2px;
  }
  .lmp-pill {
    display: inline-block;
    padding: 0px 8px;
    border-radius: 999px;
    font-weight: 700;
    letter-spacing: 0.3px;
    font-size: 0.7em;
    line-height: 1.25em;
    color: var(--mmp-text-color);
    background: color-mix(in srgb, var(--mmp-text-color) 10%, transparent);
    border: 1.5px solid var(--mmp-accent-color);
  }
  .lmp-pill.lmp-pill-resolution {
    background: rgba(255, 255, 255, 0.9) !important;
    color: #1a1a1a !important;
    border-color: rgba(0, 0, 0, 0.2) !important;
  }
  ha-card.--has-artwork .lmp-pill,
  ha-card.--bg .lmp-pill {
    color: var(--mmp-media-cover-info-color);
    background: color-mix(in srgb, var(--mmp-media-cover-info-color) 12%, transparent);
    border-color: var(--mmp-accent-color);
  }
    /* Resolution pill - light background tinted from palette with dark text */
  .lmp-pill.lmp-pill-resolution,
  ha-card .lmp-pill.lmp-pill-resolution {
      /* Default mode: derive tint from primary text color for palette cohesion */
      background: var(
        --mini-media-player-res-bg,
        color-mix(in srgb, var(--mmp-text-color, #d0d0d0) 35%, #ffffff)
      ) !important;
      color: var(--mini-media-player-res-fg, #151515) !important;
      border-color: var(--mini-media-player-res-border, var(--mmp-accent-color)) !important;
    }
  ha-card.--has-artwork .lmp-pill.lmp-pill-resolution,
  ha-card.--bg .lmp-pill.lmp-pill-resolution {
      /* Artwork/bg modes: tint from media cover info color like other pills */
      background: var(
        --mini-media-player-res-bg,
        color-mix(in srgb, var(--mmp-media-cover-info-color, #d0d0d0) 35%, #ffffff)
      ) !important;
      color: var(--mini-media-player-res-fg, #151515) !important;
      border-color: var(--mini-media-player-res-border, var(--mmp-accent-color)) !important;
    }
  .lmp-pill-vcodec {
    background: color-mix(in srgb, var(--mmp-accent-color) 14%, transparent);
  }
  .lmp-pill-fps {
    background: color-mix(in srgb, var(--mmp-text-color) 12%, transparent);
  }
  .lmp-pill-acodec {
    background: color-mix(in srgb, var(--mmp-text-color) 10%, transparent);
  }
  .lmp-pill-method {
    background: color-mix(in srgb, var(--mmp-text-color) 8%, transparent);
  }
  .lmp-pill-method--direct {
    border-color: color-mix(in srgb, var(--mmp-accent-color) 70%, #3fb950);
    background: color-mix(in srgb, #3fb950 18%, transparent);
  }
  .lmp-pill-method--transcoded {
    border-color: color-mix(in srgb, var(--mmp-accent-color) 70%, #d29922);
    background: color-mix(in srgb, #d29922 18%, transparent);
  }
  .entity__info__media[short] {
    max-height: calc(var(--mmp-unit) / 2);
    overflow: hidden;
  }
  .attr__app_name {
    display: none;
  }
  .attr__app_name:first-child,
  .attr__app_name:first-of-type {
    display: inline;
  }
  .lmp-player__core[inactive] .entity__info__media {
    color: var(--mmp-text-color);
    max-width: 200px;
    opacity: 0.5;
  }
  .entity__info__media[short-scroll] {
    max-height: calc(var(--mmp-unit) / 2);
    white-space: nowrap;
  }
  .entity__info__media[scroll] > span {
    visibility: hidden;
  }
  .entity__info__media[scroll] > div {
    animation: move linear infinite;
  }
  .entity__info__media[scroll] .marquee {
    animation: slide linear infinite;
  }
  .entity__info__media[scroll] .marquee,
  .entity__info__media[scroll] > div {
    animation-duration: inherit;
    visibility: visible;
  }
  .entity__info__media[scroll] {
    animation-duration: 10s;
    mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
  }
  .marquee {
    visibility: hidden;
    position: absolute;
    white-space: nowrap;
  }
  ha-card[artwork*='cover'].--has-artwork .entity__info__media,
  ha-card.--bg .entity__info__media {
    color: var(--mmp-media-cover-info-color);
  }
  .entity__info__media span:before {
    content: ' - ';
  }
  .entity__info__media span:first-of-type:before {
    content: '';
  }
  .lmp-line-3 .lmp-pill:before { content: none; }
  .entity__info__media span:empty {
    display: none;
  }
  .lmp-player__adds {
    margin-left: calc(var(--mmp-unit) * 1.2);
    position: relative;
  }
  ha-card.--rtl .lmp-player__adds {
    margin-left: auto;
    margin-right: calc(var(--mmp-unit) * 1.2);
  }
  .lmp-player__adds > *:nth-child(2) {
    margin-top: 0px;
  }
  lmp-powerstrip {
    flex: 1;
    justify-content: flex-end;
    margin-right: 0;
    margin-left: auto;
    width: auto;
    max-width: 100%;
  }
  lmp-media-controls {
    flex-wrap: wrap;
  }
  ha-card.--flow lmp-powerstrip {
    justify-content: space-between;
    margin-left: auto;
  }
  ha-card.--flow.--rtl lmp-powerstrip {
    margin-right: auto;
  }
  ha-card.--flow .entity__info {
    display: none;
  }
  ha-card.--responsive .lmp-player__adds {
    margin-left: 0;
  }
  ha-card.--responsive.--rtl .lmp-player__adds {
    margin-right: 0;
  }
  ha-card.--responsive .lmp-player__adds > lmp-media-controls {
    padding: 0;
  }
  ha-card.--progress .lmp-player {
    padding-bottom: calc(16px + calc(var(--mini-media-player-progress-height, 6px) - 6px));
  }
  ha-card.--progress.--group .lmp-player {
    padding-bottom: calc(10px + calc(var(--mini-media-player-progress-height, 6px) - 6px));
  }
  ha-card.--runtime .lmp-player {
    padding-bottom: calc(16px + 16px + var(--mini-media-player-progress-height, 0px));
  }
  ha-card.--runtime.--group .lmp-player {
    padding-bottom: calc(16px + 12px + var(--mini-media-player-progress-height, 0px));
  }
  ha-card.--inactive .lmp-player {
    padding: 16px;
  }
  ha-card.--inactive.--group .lmp-player {
    padding: 2px 0;
  }
  .lmp-player div:empty {
    display: none;
  }
  @keyframes slide {
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes move {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  ha-switch {
    padding: 16px 6px;
  }
`;

export default style;
