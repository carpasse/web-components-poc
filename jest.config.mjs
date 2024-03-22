const config = {
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\.d\\.ts$', '/__tests__/', '\\.stories\\.tsx$'],
  coverageReporters: ['json-summary', 'json', 'html', 'text', 'teamcity'],
  moduleFileExtensions: ['ts', 'ts', 'js', 'json', 'node'],
  testRegex: '__tests__/.*\\.spec\\.(jsx?|tsx?)$',
  testResultsProcessor: 'jest-teamcity-reporter',
  transform: {
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.jest.json'
      }
    ],
    '.+\\.css$': [
      'jest-css-modules-transform',
      {
        cssLoaderConfig: {
          exportLocalsStyle: 'camelCase'
        }
      }
    ],
    '^.+\\.svg$': '<rootDir>/__tests__/svgTransformer.mjs'
  },
  transformIgnorePatterns: ['/node_modules/.*', '/dist/.*.js'],
  moduleNameMapper: {
    '(.+)\\.js': '$1'
  },
  extensionsToTreatAsEsm: ['.ts']
};

export default config;
