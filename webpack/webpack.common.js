const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '..', './build'),
    assetModuleFilename: 'assets/[hash][ext]',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', './public'), to: 'public' },
      ],
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      failOnError: true
    }),
  ]
}
