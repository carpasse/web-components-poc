import {MBadge} from '../MBadge/index.js';
import styles from './styles.css';

class MLiveBadge extends MBadge {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(styles.mLive);
    this.innerHTML = `
        <span class="${styles.mBulletIcon}"></span>
        <span class="${styles.mLiveBulletText}">${this.innerText}</span>
    `;
  }
}

window.customElements.define('m-live-badge', MLiveBadge, {
  extends: 'span'
});
