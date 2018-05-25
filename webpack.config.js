const path = require('path');
const env = process.env.NODE_ENV || 'development';

const config = {
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(s*)css$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    },
    mode: env,
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './public',
        compress: true,
        port: 5000,
        historyApiFallback: true,
        stats: "errors-only"
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
};

module.exports = config;
