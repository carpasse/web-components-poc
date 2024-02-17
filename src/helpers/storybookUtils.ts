import type {StoryObj} from '@storybook/web-components';
import '../theme.css';

export type Story = StoryObj<{}>;

export type WebComponentLibArgs = Partial<{
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  // Badge component
  badgeFontSize: number;
  badgeFontWeight: number;
  badgeFontFamily: string;
  badgeBorderRadius: number;
  badgeColor: string;
  badgeBgColor: string;
}>;

export const getArgs = (): WebComponentLibArgs => ({
  badgeBgColor: '#f03649',
  badgeBorderRadius: 0.25,
  badgeColor: '#fff',
  fontFamily: 'Arial',
  fontSize: 65,
  fontWeight: 400
});

export const getArgTypes = () => ({
  badgeBgColor: {
    control: 'color'
  },
  badgeBorderRadius: {
    control: {
      max: 1,
      min: 0,
      step: 0.1,
      type: 'range'
    }
  },
  badgeColor: {
    control: 'color'
  },
  badgeFontFamily: {
    control: {
      type: 'radio'
    },
    options: ['Arial', 'Helvetica', 'Times New Roman', 'verdana']
  },
  badgeFontSize: {
    control: {
      max: 90,
      min: 10,
      step: 2,
      type: 'range'
    }
  },
  badgeFontWeight: {
    control: {
      max: 900,
      min: 100,
      step: 100,
      type: 'range'
    }
  },
  fontFamily: {
    control: {
      type: 'radio'
    },
    options: ['Arial', 'Helvetica', 'sans-serif', 'Times New Roman', 'Times', 'verdana']
  },
  fontSize: {
    control: {
      max: 90,
      min: 10,
      step: 2,
      type: 'range'
    }
  },
  fontWeight: {
    control: {
      max: 900,
      min: 100,
      step: 100,
      type: 'range'
    }
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
      fontWeight
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
