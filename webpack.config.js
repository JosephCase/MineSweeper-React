const path = require('path');

console.log(`Running in ${process.env.NODE_ENV.toUpperCase()} mode`);

module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {   // describes transformation, e.g. for all .js use babel
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: 'worker-loader',
                test: /\.worker.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map', //sourcemaps
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};