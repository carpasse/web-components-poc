import type {StoryObj} from '@storybook/web-components';
import '../theme.css';

export type Story = StoryObj<{}>;

export type WebComponentLibArgs = Partial<{
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  // Signposting
  badgeFontSize: number;
  badgeFontWeight: number;
  badgeFontFamily: string;
  badgeBorderRadius: number;
  badgeColor: string;
  badgeBgColor: string;
  // ArticlePreview
  headlineColor: string;
  headlineHoverColor: string;
}>;

export const getArgs = (): WebComponentLibArgs => ({
  badgeBgColor: '#f03649',
  badgeBorderRadius: 0.25,
  badgeColor: '#fff',
  fontFamily: 'Arial',
  fontSize: 25,
  fontWeight: 400,
  headlineColor: '#000',
  headlineHoverColor: '#C00'
});

export const getArgTypes = () => ({
  badgeBgColor: {
    control: 'color',
    description: '--m-badge-background-color: The background color of the badge. defaults to `#f03649`.'
  },
  badgeBorderRadius: {
    control: {
      max: 1,
      min: 0,
      step: 0.1,
      type: 'range'
    },
    description: '--m-badge-border-radius: OPTIONAL overwrite of the border radius of the badge.'
  },
  badgeColor: {
    control: 'color',
    description: '--m-badge-color: The color of the badge text.'
  },
  badgeFontFamily: {
    control: {
      type: 'radio'
    },
    description: '--m-badge-font-family: OPTIONAL overwrite of the font family of the badge text.',
    options: ['Arial', 'Helvetica', 'Times New Roman', 'verdana']
  },
  badgeFontSize: {
    control: {
      max: 90,
      min: 10,
      step: 2,
      type: 'range'
    },
    description: '--m-badge-font-size: OPTIONAL overwrite of the font size of the badge text.'
  },
  badgeFontWeight: {
    control: {
      max: 900,
      min: 100,
      step: 100,
      type: 'range'
    },
    description: '--m-badge-font-weight: OPTIONAL overwrite of the font weight of the badge text.'
  },
  fontFamily: {
    control: {
      type: 'radio'
    },
    description: 'font-family: The default font family of the text.',
    options: ['Arial', 'Helvetica', 'sans-serif', 'Times New Roman', 'Times', 'verdana']
  },
  fontSize: {
    control: {
      max: 90,
      min: 10,
      step: 2,
      type: 'range'
    },
    description: 'font-size: The default font size of the text.'
  },
  fontWeight: {
    control: {
      max: 900,
      min: 100,
      step: 100,
      type: 'range'
    },
    description: 'font-weight: The default font weight of the text.'
  },
  headlineColor: {
    control: 'color',
    description: '--m-headline-color: The color of the headline text.'
  },
  headlineHoverColor: {
    control: 'color',
    description: '--m-headline-hover-color: The color of the headline text on hover.'
  }
});

export const createWebComponentStory = (html: string) => {
  const story: Story = (args: WebComponentLibArgs) => {
    const {
      badgeBgColor,
      badgeBorderRadius,
      badgeColor,
      badgeFontFamily,
      badgeFontSize,
      badgeFontWeight,
      fontFamily,
      fontSize,
      fontWeight,
      headlineColor,
      headlineHoverColor
    } = args;

    const styles = `
      ${fontSize ? `font-size: ${fontSize}px` : ''};
      ${fontWeight ? `font-weight: ${fontWeight}` : ''};
      ${fontFamily ? `font-family: ${fontFamily}` : ''};
      ${badgeBgColor ? `--m-badge-background-color: ${badgeBgColor}` : ''};
      ${badgeBorderRadius ? `--m-badge-border-radius: ${badgeBorderRadius}rem` : ''};
      ${badgeColor ? `--m-badge-color: ${badgeColor}` : ''};
      ${badgeFontSize ? `--m-badge-font-size: ${badgeFontSize}px` : ''};
      ${badgeFontWeight ? `--m-badge-font-weight: ${badgeFontWeight}` : ''};
      ${badgeFontFamily ? `--m-badge-font-family: ${badgeFontFamily}` : ''};
      ${headlineColor ? `--m-headline-color: ${headlineColor}` : ''};
      ${headlineHoverColor ? `--m-headline-hover-color: ${headlineHoverColor}` : ''};
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
