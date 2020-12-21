const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.tsx'),
  // Generate source-maps for debugging
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.[t|j]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(s?)css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader'],
      },
      // Add support for non-typed js modules
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.mjs', '.js', '.jsx' ],
    // Setup absolute paths to common folders
    alias: {
      components: path.resolve(__dirname, "src/components/")
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
  ],
};