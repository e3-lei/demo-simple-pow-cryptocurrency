const nodeExternals = require('webpack-node-externals');
const path = require('path');
module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    mode: 'development',
    entry: ["@babel/polyfill", "./src/js/app.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
