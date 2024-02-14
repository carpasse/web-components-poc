import styles from './styles.css';

class MLiveBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <span is="m-badge" class="${styles.mLive}">
        <span class="${styles.mBulletIcon}"></span>
        <span class="${styles.mLiveBulletText}">LIVE</span>
      </span>`;
  }
}

window.customElements.define('m-live-badge', MLiveBadge);
