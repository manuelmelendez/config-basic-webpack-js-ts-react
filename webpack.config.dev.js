const path = require('path'),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    CopyPlugin = require("copy-webpack-plugin");
    // Dotenv = require("dotenv-webpack"),
    // BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;    
// {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
entry: {
    js: "./src/index.js",
    react: "./src/index_react.js",
    ts: "./src/index_ts.js",
},
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].[chunkhash].js",
},

mode: 'development',
devtool: 'source-map',

resolve: {
    alias: {
    '@images': path.resolve(__dirname, 'src/assets/images/'),
    }, 
},

module: {
    rules: [
    {
        test: /\.(js|jsx?)$/i,
        exclude: /node_modules/,
        use: {
        loader: "babel-loader",
        },
    },
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
    },
    {
        test: /\.pug$/,
        use: [ 'pug-loader' ],
    },
    {
        test: /\.html$/i,
        use: [
        {
        loader: "html-loader",
        options: {
        minimize: false,
                },
        },
            ],
    },
    {
        test: /\.(sa|sc|c)ss$/i,
        use: [
            {loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath:"./",
                }    
            },
            "css-loader",
            'postcss-loader',
            'sass-loader',
/*                     {loader: 'sass-loader',
            options: {
                sassOptions: {
                outputStyle: 'compressed',
                },},},
*/
        ],
    },
    {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: ["file-loader?name=assets/images/[name].[ext]", "image-webpack-loader"],
    },
    {
        test: /\.(woff)$/i,
        use: ["file-loader?name=assets/fonts/[name].[ext]"],
    },
    ],
},
plugins: [
    /* new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    }), */
    new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    chunks: ["js"],
    hash: true,
    minify: {
        collapseWhitespace: false,
        keepClosingSlash: false,
        removeComments: false,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: false
    },
    }),
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/app/html/pages/layout.pug'),
        filename: "./layout.html",
        chunks: ["js"],
        hash: true,
    }),

    new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./react.html",
    chunks: ["react"],
    hash: true,
    }),
    new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./ts.html",
    chunks: ["ts"],
    hash: true,
    }),

    new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
    }),

    // new CleanWebpackPlugin(),

    new CopyPlugin({
    patterns: [
        { from: path.resolve(__dirname, "src", "assets", "images", "favicon.ico"),
        to: "assets/images"
        }
    ],
    }),

    // new Dotenv(),

    // new BundleAnalyzerPlugin(),

],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        historyApiFallback: true,
        port: 3000,
    },

};