const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  output: {
    publicPath: 'http://localhost:4200/',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'angularApp',
      filename: 'remoteEntry.js',
      exposes: {
        './AngularComponent':
          './src/app/angular-component/angular-component.component.ts',
      },
      shared: {
        '@angular/core': {
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
        '@angular/common': {
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
        '@angular/router': {
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto',
        },
      },
    }),
  ],
};
