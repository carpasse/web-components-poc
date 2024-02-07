class LiveBadge extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <span class="m-live m-badge">
        <span class="m-bullet-icon"></span>
        <span class="m-live-bullet-text">LIVE</span>
      </span>`;
  }
}

window.customElements.define('m-live-badge', LiveBadge);

// Add CSS styles for the is-live class
const style = document.createElement('style');

style.textContent = `
.m-badge {
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  gap: 0.3em;
  flex-direction: row;
  align-items: center;
  width: auto;
  margin-right: 0.3em;
  padding: 0.1em 0.25em;
  line-height: 1;
  font-size: 0.8em;
  background: #f03649;
  color: #fff;
  font-weight: 600;
  white-space: nowrap;
  font-family: 'inter', 'graphik', arial, sans-serif;
  vertical-align: middle;
}

.m-live .m-live-bullet-text {
  padding-left: 0.9em;
}

.m-live .m-bullet-icon {
  background: radial-gradient(circle, transparent 53%, rgba(187, 25, 25, 0.5) 53.5%, #fff 60%);
  position: absolute;
  left: 0.3em;
  border-radius: 50%;
  height: 0.65em;
  width: 0.65em;
  margin-top: -0.05em;
}

.m-live .m-bullet-icon::before {
  background: radial-gradient(circle, #fff 37%, rgba(187, 25, 25, 0.5) 37.5%, transparent 38%);
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: m-live 1.7s ease infinite;
  left: 0;
}

@keyframes m-live {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

`;

document.head.appendChild(style);
