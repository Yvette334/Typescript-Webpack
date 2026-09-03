const path = require('path');

module.exports = {
  entry: './src/main.ts', // Your main TypeScript file
  output: {
    filename: 'bundle.js', // Output bundle name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to .ts files
        use: 'ts-loader', // Use ts-loader to process these files
        exclude: /node_modules/, // Exclude node_modules directory
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  mode: 'development', // Set mode to development or production
  devtool: 'inline-source-map' // Add source mapping for easier debugging
};