import type {StoryObj} from '@storybook/web-components';

export type Story = StoryObj<{}>;

export type WebComponentLibArgs = Partial<{
  fontSize: number;
  borderRadius: number;
  color: string;
  backgroundColor: string;
  fontWeight: number;
  fontFamily: string;
}>;

export const getArgs = (): WebComponentLibArgs => ({
  backgroundColor: '#f03649',
  borderRadius: 0.25,
  color: '#fff',
  fontFamily: 'Arial',
  fontSize: 20,
  fontWeight: 400
});

export const getArgTypes = () => ({
  backgroundColor: {
    control: 'color'
  },
  borderRadius: {
    control: {
      max: 1,
      min: 0,
      step: 0.1,
      type: 'range'
    }
  },
  color: {
    control: 'color'
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
    const {fontSize, borderRadius, color, backgroundColor, fontWeight, fontFamily} = args;

    const styles = `
      ${backgroundColor ? `--m-badge-background-color: ${backgroundColor}` : ''};
      ${borderRadius ? `--m-badge-border-radius: ${borderRadius}rem` : ''};
      ${color ? `--m-badge-color: ${color}` : ''};
      ${fontSize ? `--m-badge-font-size: ${fontSize}px` : ''};
      ${fontWeight ? `--m-badge-font-weight: ${fontWeight}` : ''};
      ${fontFamily ? `--m-badge-font-family: ${fontFamily}` : ''};
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
