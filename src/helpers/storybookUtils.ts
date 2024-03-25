import type {StoryObj} from '@storybook/web-components';
import '../theme.css';

export type Story = StoryObj<{}>;

export type WebComponentLibArgs = Partial<{
  // Signposting
  '--m-badge-font-size': number;
  '--m-badge-font-weight': number;
  '--m-badge-font-family': string;
  '--m-badge-border-radius': number;
  '--m-badge-color': string;
  '--m-badge-background-color': string;
  '--m-plus-badge-border-radius': number;
  // ArticlePreview
  '--m-headline-color': string;
  '--m-headline-hover-color': string;
}>;

export const getArgs = (): WebComponentLibArgs => ({});

export const getArgTypes = () => ({
  '--m-badge-background-color': {
    control: 'color',
    description: 'The background color of the badge. Defaults to `#f03649`.'
  },
  '--m-badge-border-radius': {
    control: {
      max: 1,
      min: 0,
      step: 0.1,
      type: 'range'
    },
    description: 'border radius of the badge. Defaults to `0`'
  },
  '--m-badge-color': {
    control: 'color',
    description: 'The color of the badge text. Defaults to `#fff`.'
  },
  '--m-badge-font-family': {
    control: {
      type: 'radio'
    },
    description: 'Font family of the badge text. Defaults to `inherit`.',
    options: ['Arial', 'Helvetica', 'Times New Roman', 'verdana']
  },
  '--m-badge-font-size': {
    control: {
      max: 90,
      min: 10,
      step: 2,
      type: 'range'
    },
    description: 'Font size of the badge text. Defaults to `0.8em`.'
  },
  '--m-badge-font-weight': {
    control: {
      max: 900,
      min: 100,
      step: 100,
      type: 'range'
    },
    description: 'Font weight of the badge text. Defaults to `inherit`.'
  },
  '--m-headline-color': {
    control: 'color',
    description: 'The color of the headline text. Defaults to `#000`.'
  },
  '--m-headline-hover-color': {
    control: 'color',
    description: 'The color of the headline text on hover. Defaults to `#c00`.'
  },
  '--m-plus-badge-border-radius': {
    control: {
      max: 100,
      min: 0,
      step: 1,
      type: 'range'
    },
    description: 'border radius of the plus badge. Defaults to `33%`'
  }
});

export const createWebComponentStory = (html: string) => {
  const story: Story = (args: WebComponentLibArgs) => {
    const badgeBgColor = args['--m-badge-background-color'];
    const badgeBorderRadius = args['--m-badge-border-radius'];
    const badgeColor = args['--m-badge-color'];
    const badgeFontFamily = args['--m-badge-font-family'];
    const badgeFontSize = args['--m-badge-font-size'];
    const badgeFontWeight = args['--m-badge-font-weight'];
    const headlineColor = args['--m-headline-color'];
    const headlineHoverColor = args['--m-headline-hover-color'];
    const plusBadgeBorderRadius = args['--m-plus-badge-border-radius'];

    const styles = `
      ${badgeBgColor ? `--m-badge-background-color: ${badgeBgColor}` : ''};
      ${badgeBorderRadius ? `--m-badge-border-radius: ${badgeBorderRadius}rem` : ''};
      ${badgeColor ? `--m-badge-color: ${badgeColor}` : ''};
      ${badgeFontSize ? `--m-badge-font-size: ${badgeFontSize}px` : ''};
      ${badgeFontWeight ? `--m-badge-font-weight: ${badgeFontWeight}` : ''};
      ${badgeFontFamily ? `--m-badge-font-family: ${badgeFontFamily}` : ''};
      ${headlineColor ? `--m-headline-color: ${headlineColor}` : ''};
      ${headlineHoverColor ? `--m-headline-hover-color: ${headlineHoverColor}` : ''};
      ${plusBadgeBorderRadius ? `--m-plus-badge-border-radius: ${plusBadgeBorderRadius}%` : ''};
    `;

    return `
      <div style="${styles}"> 
        ${html}
      </div>
    `;
  };

  story.args = getArgs();
  story.argTypes = getArgTypes();

  return story;
};
