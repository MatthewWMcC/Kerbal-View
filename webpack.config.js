const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/app.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            quiet: true,
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            base: path.resolve(__dirname, 'src/base'),
            components: path.resolve(__dirname, 'src/components'),
            pages: path.resolve(__dirname, 'src/pages'),
            utils: path.resolve(__dirname, 'src/utils'),
            global: path.resolve(__dirname, 'src/global'),
            constants: path.resolve(__dirname, 'src/constants'),
            services: path.resolve(__dirname, 'src/services'),
        },
    },
};
