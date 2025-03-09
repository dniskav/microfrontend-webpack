const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/event-bus.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:5001/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'eventBus',
      filename: 'remoteEntry.js',
      exposes: {
        './utils': './src/event-bus.js',
      },
      shared: {},
    }),
  ],
  devServer: {
    port: 5001,
    static: {
      directory: path.join(__dirname, 'public'), // ✅ Corrección
    },
    hot: true,
  },
};
