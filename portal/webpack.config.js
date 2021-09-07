const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

module.exports = options => {
    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
            uniqueName: "portal"
        },
        module: {
            rules: [
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
                shared: []
            })
        ],
        devServer: {
            port: 5000,
            contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
            historyApiFallback: { index: "/", disableDotRule: true },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            },
            proxy: {
                '/react17': {
                    target: {
                        host: "localhost",
                        protocol: 'http:',
                        port: 5001
                    },
                    pathRewrite: {
                        '^/react17': ''
                    }
                }
            }
        }
    }
}
