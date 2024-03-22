import type {Meta, StoryObj} from '@storybook/web-components';
import {createWebComponentStory} from '../../helpers/storybookUtils.js';
import '../index.js';

const meta = {
  component: 'm-badges',
  tags: ['autodocs'],
  title: 'Signposting/Badges'
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>;

export const Primary: Story = createWebComponentStory(`
<div is="m-badges">
  <span is="m-plus-badge">M+</span>
  <span is="m-badge">BREAKING NEWS</span>
  <span is="m-badge">EXCLUSIVE</span>
  <span is="m-live-badge">LIVE</span>
</div>`);

export const MPlusBadge: Story = createWebComponentStory(`
<div is="m-badges">
  <span is="m-plus-badge">M+</span>
</div>`);

export const OneBadge: Story = createWebComponentStory(`
<div is="m-badges">
  <span is="m-badge">Badge</span>
</div>`);

export const TwoBadges: Story = createWebComponentStory(`
<div is="m-badges">
  <span is="m-live-badge">Badge</span>
  <span is="m-badge">Badge2</span>
</div>`);

export const ThreeBadges: Story = createWebComponentStory(`
<div is="m-badges">
  <span is="m-plus-badge">M+</span>
  <span is="m-live-badge">LIVE</span>
  <span is="m-badge">Badge2</span>
</div>`);
