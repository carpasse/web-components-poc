import {parse} from 'svg-parser';

export const svgTransformer = {
  process(sourceText) {
    const parsedSVG = parse(sourceText);

    return {
      code: `module.exports = ${JSON.stringify(parsedSVG)};`
    };
  }
};

export default svgTransformer;
