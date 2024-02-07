import type {Meta, StoryObj} from '@storybook/web-components';
import '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: 'm-live-badge',
  tags: ['autodocs'],
  title: 'Badges/LiveBadge'
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = (args: {fontSize: number}) => {
  const {fontSize} = args;

  return `
    <m-live-badge style="font-size: ${fontSize}px;"></m-live-badge>
  `;
};

Primary.args = {
  fontSize: 20 // Default font size
};

Primary.argTypes = {
  fontSize: {
    control: {
      max: 90,
      min: 10,
      step: 2,
      type: 'range'
    }
  }
};
