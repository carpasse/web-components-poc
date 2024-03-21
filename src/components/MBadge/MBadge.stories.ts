import type {Meta, StoryObj} from '@storybook/web-components';
import {createWebComponentStory} from '../../helpers/storybookUtils';
import './index.ts';

const meta = {
  component: 'm-badge',
  tags: ['autodocs'],
  title: 'Signposting/Badge'
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>;

export const Primary: Story = createWebComponentStory(`<span is="m-badge">Badge</span>`);
