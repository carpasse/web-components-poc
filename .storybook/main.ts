import type {StorybookConfig} from '@storybook/web-components-webpack5';
import webpackConfig from '../webpack.config.cjs';
import {RuleSetRule} from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    if (config && config.module && config.module.rules) {
      config.module.rules = (config.module?.rules as RuleSetRule[]).filter((rule) => {
        return rule && rule.test && rule.test.toString() !== '/\\.css$/' && rule.test.toString() !== '/\\.tsx?$/';
      });

      config.module.rules.push(...webpackConfig.module.rules);
    }

    return config;
  }
};

export default config;
