import styles from './styles.css';

export class MBadges extends HTMLDivElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add(styles.mBadges);
  }
}

window.customElements.define('m-badges', MBadges, {
  extends: 'div'
});
