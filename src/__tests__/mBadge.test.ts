import {describe, test} from 'node:test';
import assert from 'node:assert/strict';
import style from '../components/MBadge/styles.css';
import '../index';

const html = (strings: TemplateStringsArray, ...values: unknown[]) => {
  const container = document.createElement('div');

  container.innerHTML = String.raw(strings, ...values);

  document.body.appendChild(container);

  return container.firstElementChild;
};

describe('MBadge', () => {
  test(`should add class ${style.mBadge} to m-badge span elements`, () => {
    const badge = html`<span is="m-badge">Badge</span>`;

    assert(badge instanceof HTMLSpanElement);
    assert(badge.getAttribute('is') === 'm-badge');
    assert(badge.textContent === 'Badge');
    assert(badge.classList.contains(style.mBadge));
  });
});
