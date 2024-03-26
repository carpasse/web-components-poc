import styles from './styles.css';

export class MImg extends HTMLElement {
  static observedAttributes = ['src', 'video', 'alt', 'width', 'height'];

  constructor() {
    super();
  }

  connectedCallback() {
    const src = this.getAttribute('src');
    const alt = this.getAttribute('alt');
    const width = this.getAttribute('width');
    const height = this.getAttribute('height');
    const video = this.getAttribute('video');

    this.classList.add(styles.mImg);
    this.innerHTML = `
      <img loading="lazy" src="${src}" alt="${alt}" width="${width}" height="${height}" />
      ${
        video
          ? `
        <video class="${styles.mImgVideo} ${styles.mImgVideoLoaded}" autoplay loop muted playsinline  width="${width}" height="${height}">
          <source src="${video}" type="video/mp4">
        </video>      
      `
          : ''
      }
    `;

    const videoElement = this.querySelector<HTMLVideoElement>('video');

    if (videoElement) {
      videoElement.onload = () => {
        videoElement.classList.add(styles.mImgVideoLoaded);
      };
    }
  }
}

window.customElements.define('m-img', MImg);
