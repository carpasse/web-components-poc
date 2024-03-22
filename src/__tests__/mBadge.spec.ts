import assert from 'node:assert';
import {describe, test, expect} from '@jest/globals';
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

    if (!badge) {
      assert.fail('Badge is null');
    }

    expect(badge).toBeInstanceOf(HTMLSpanElement);
    expect(badge.getAttribute('is')).toBe('m-badge');
    expect(badge.textContent).toBe('Badge');
    expect(badge.classList.contains(style.mBadge)).toBe(true);
  });
});
