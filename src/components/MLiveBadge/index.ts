import styles from './styles.css';

class LiveBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <span class="${styles.mLive} ${styles.mLive}">
        <span class="${styles.mBulletIcon}"></span>
        <span class="${styles.mLiveBulletText}">LIVE</span>
      </span>`;
  }
}

window.customElements.define('m-live-badge', LiveBadge);
