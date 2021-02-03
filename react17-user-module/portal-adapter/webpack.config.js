const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

module.exports = options => {
    return {
        entry: './src/index.ts',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: "http://localhost:5001/",
            uniqueName: "react17UserModule"
        },
        module: {
            rules: [
                // {
                //   test: /.js$/,
                //   exclude: /node_modules/,
                //   use: [
                //     {
                //       loader: 'babel-loader',
                //       options: {
                //         cacheDirectory: true,
                //         presets: ['@babel/react', '@babel/env']
                //       }
                //     },
                //   ],
                // },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new ModuleFederationPlugin({
                // For remotes (please adjust)
                name: "react17UserModule",
                library: {type: "var", name: "react17UserModule"},
                filename: "remoteEntry.js",
                exposes: {
                    './web-components': './src/app.tsx',
                },
                shared: ["react", "react-dom"]
            })
        ],
        devServer: {
            port: 5001
        }
    }
}
