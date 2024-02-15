import styles from './styles.css';

/**
 * @class MBadge
 * @extends HTMLSpanElement
 *
 * @description
 * Custom element that extends the HTMLSpanElement class to create a badge.
 *
 * @example
 * <span is="m-badge">Badge</span>
 *
 * CSS Variables:
 * --m-badge-background-color - The background color of the badge
 * --m-badge-border-radius - The border radius of the badge
 * --m-badge-color - The text color of the badge
 * --m-badge-font-size - The font size of the badge
 * --m-badge-font-weight - The font weight of the badge
 * --m-badge-font-family - The font family of the badge
 */
export class MBadge extends HTMLSpanElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add(styles.mBadge);
  }
}

window.customElements.define('m-badge', MBadge, {
  extends: 'span'
});
