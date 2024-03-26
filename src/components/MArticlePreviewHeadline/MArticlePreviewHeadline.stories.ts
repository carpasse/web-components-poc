import type {Meta, StoryObj} from '@storybook/web-components';
import {createWebComponentStory} from '../../helpers/storybookUtils.js';
import '../index.js';

const meta = {
  component: 'm-article-preview-headline',
  tags: ['autodocs'],
  title: 'ArticlePreview/Headline'
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<{}>;

export const Primary: Story = createWebComponentStory(
  `<h2 is="m-article-preview-headline" link="https://www.dailymailint.co.uk/news/article-13088871/Prince-Harry-hits-criticism-Sussex-com-Royal-rebrand-defiantly-insisting-Meghan-not-broken.html">Prince Harry and Meghan hit back after criticism of Sussex.com launch and family rebrand, defiantly insisting they 'will not be broken'</h2>`
);

export const WithSignpost: Story = createWebComponentStory(
  `<h2 is="m-article-preview-headline" link="https://www.dailymailint.co.uk/news/article-13088871/Prince-Harry-hits-criticism-Sussex-com-Royal-rebrand-defiantly-insisting-Meghan-not-broken.html">
    <div is="m-badges">
      <span is="m-plus-badge">M+</span>
      <span is="m-badge">BREAKING NEWS</span>
      <span is="m-badge">EXCLUSIVE</span>
      <span is="m-live-badge">LIVE</span>
    </div>
    Prince Harry and Meghan hit back after criticism of Sussex.com launch and family rebrand, defiantly insisting they 'will not be broken'
  </h2>`
);
