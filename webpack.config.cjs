const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCssNested = require('postcss-nested');
const DEV = process.env.NODE_ENV === 'development';
const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'm-wc-lib.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: 'm-wc-liv.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]___[hash:base64:5]',
                mode: 'local'
              },
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer(), postCssNested()]
              },
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    open: true
  }
};

module.exports = config;
