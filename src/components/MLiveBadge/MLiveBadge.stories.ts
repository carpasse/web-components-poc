import type {Meta} from '@storybook/web-components';
import {createWebComponentStory} from '../../helpers/storybookUtils';
import '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: 'm-live-badge',
  tags: ['autodocs'],
  title: 'Components/LiveBadge'
} satisfies Meta<{}>;

export default meta;

export const Primary = createWebComponentStory(`<m-live-badge></m-live-badge>`);
