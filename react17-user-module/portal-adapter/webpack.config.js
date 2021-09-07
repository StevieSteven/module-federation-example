const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');

module.exports = options => {
    return {
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: "/react17", // path in portal
            uniqueName: "react17UserModule"
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
                name: "react17UserModule",
                library: {type: "var", name: "react17UserModule"},
                filename: "remoteEntry.js",
                exposes: {
                    './web-components': './src/index.tsx',
                },
                shared: ["react", "react-dom"]
            })
        ],
        devServer: {
            port: 5001,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            }
        }
    }
}
