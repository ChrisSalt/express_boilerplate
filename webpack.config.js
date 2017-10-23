const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './client/index.js',
        style: './client/scss/main.scss'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            // SASS/SCSS Files: Process into CSS
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',       // translates CSS into CommonJS modules
                        'postcss-loader',   // Post css processing
                        'sass-loader'       // compiles SASS to CSS
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'), // Extract the CSS files
        // See http://getbootstrap.com/docs/4.0/getting-started/webpack/
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ]
};

