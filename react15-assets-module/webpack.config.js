const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = options => {
  console.log("options of webpack config: ", options);
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "http://localhost:5003/",
      uniqueName: "react15AssetsModule"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        
          // For remotes (please adjust)
          name: "react15AssetsModule",
          library: { type: "var", name: "react15AssetsModule" },
          filename: "remoteEntry.js",
          exposes: {
              './web-components': './app.js',
          },        

          shared: ["react", "react-dom"]
        })
    ],
    devServer: {
      port: 5003
    }
  }
}
