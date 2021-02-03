const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

console.log("webpack.config.js")

module.exports = {
  output: {
    publicPath: "http://localhost:5002/",
    uniqueName: "angularProjectModule"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "angularProjectModule",
      library: {type: "var", name: "angularProjectModule"},
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './src/bootstrap.ts', // bootstrap --> main --> AppModule --> WebComp
      },

      // For hosts (please adjust)
      /*
      remotes: {
          'angularProjectModule': "angularProjectModule@http://localhost:5002/remoteEntry.js"
      },
      */

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
