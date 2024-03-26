import type {Meta, StoryObj} from '@storybook/web-components';
import {createWebComponentStory} from '../../helpers/storybookUtils.js';
import '../index.js';

const meta = {
  component: 'm-img',
  tags: ['autodocs'],
  title: 'ArticlePreview/img'
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>;

export const Primary: Story = createWebComponentStory(
  `<m-img 
    src="https://video.dailymail.co.uk/preview/mol/2024/03/26/8019739840426756895/636x382_JPG-SINGLE_8019739840426756895.jpg" 
    video="https://video.dailymail.co.uk/preview/mol/2024/03/26/8019739840426756895/636x382_MP4_8019739840426756895.mp4"
    width="636" height="382"
    alt="Inside disturbing world of Femcels: British women reveal why they've joined dark online forums where they post videos eating own flesh"
    >`
);

export const WithoutVideo: Story = createWebComponentStory(
  `<m-img 
    src="https://video.dailymail.co.uk/preview/mol/2024/03/26/8019739840426756895/636x382_JPG-SINGLE_8019739840426756895.jpg" 
    width="636" height="382"
    >`
);
