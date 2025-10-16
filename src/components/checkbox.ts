import { LitElement, html, css, CSSResult, property } from 'lit-element';

class MiniMediaPlayerCheckbox extends LitElement {
  @property({ attribute: false }) public checked!: boolean;
  @property({ attribute: false }) public disabled!: boolean;
  @property({ attribute: false }) public label!: string;

  render() {
    return html`
      <ha-switch .checked=${this.checked} ?disabled=${this.disabled}></ha-switch>
      <span ?disabled=${this.disabled}>
        <slot>${this.label}</slot>
      </span>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: flex;
        padding: 0.6em 0;
        align-items: center;
      }
      span {
        margin-left: 1em;
        font-weight: 400;
      }
      span[disabled] {
        opacity: 0.65;
      }
    `;
  }
}

const CHECKBOX_TAG = 'lmp-checkbox';
if (!customElements.get(CHECKBOX_TAG)) {
  customElements.define(CHECKBOX_TAG, MiniMediaPlayerCheckbox);
}
