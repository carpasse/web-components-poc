import type {Meta} from '@storybook/web-components';
import {createWebComponentStory} from '../../helpers/storybookUtils.js';
import '../index.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: 'm-live-badge',
  tags: ['autodocs'],
  title: 'Signposting/LiveBadge'
} satisfies Meta<{}>;

export default meta;

export const Primary = createWebComponentStory(`<span is="m-live-badge">LIVE</span>`);

export const WithCustomText = createWebComponentStory(`<span is="m-live-badge">CUSTOM TEXT</span>`);
