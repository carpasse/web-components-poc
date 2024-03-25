import styles from './styles.css';

export class MArticlePreviewHeadline extends HTMLHeadingElement {
  static observedAttributes = ['link'];

  constructor() {
    super();
  }

  connectedCallback() {
    const content = this.innerHTML;

    this.classList.add(styles.mArticlePreviewHeadline);
    this.innerHTML = `
      <a href="${this.getAttribute('link')}" class="${styles.mArticlePreviewHeadlineLink}">
        ${content}
      </a>
    `;
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'link' && oldValue !== newValue) {
      const link = this.querySelector('a');

      if (link) {
        link.setAttribute('href', newValue);
      }
    }
  }
}

window.customElements.define('m-article-preview-headline', MArticlePreviewHeadline, {
  extends: 'h2'
});
