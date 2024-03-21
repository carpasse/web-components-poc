import type {Meta} from '@storybook/web-components';
import {createWebComponentStory} from '../../helpers/storybookUtils';
import '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: 'm-plus',
  tags: ['autodocs'],
  title: 'Signposting/MPlusBadge'
} satisfies Meta<{}>;

export default meta;

export const Primary = createWebComponentStory(`<span is="m-plus-badge">M+</span>`);
