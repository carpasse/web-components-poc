import {MBadge} from '../MBadge/index.js';
import styles from './styles.css';
import mPlusLogo from './assets/mailplusLogo.svg';

class MPlusBadge extends MBadge {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(styles.mPlus);
    this.innerHTML = mPlusLogo;
  }
}

window.customElements.define('m-plus-badge', MPlusBadge, {
  extends: 'span'
});
