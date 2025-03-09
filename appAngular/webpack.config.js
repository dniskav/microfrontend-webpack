const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'appAngular',
  remotes: {
    eventBus: 'eventBus@http://localhost:5001/remoteEntry.js', // 📌 Importamos eventBus
  },

  exposes: {
    './Component': './src/app/app.component.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
