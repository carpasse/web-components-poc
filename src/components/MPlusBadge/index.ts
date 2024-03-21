import styles from './styles.css';

class MPlusBadge extends HTMLSpanElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add(styles.mPlus);
    this.innerHTML = ``;
  }
}

window.customElements.define('m-plus-badge', MPlusBadge, {
  extends: 'span'
});
