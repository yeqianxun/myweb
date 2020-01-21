const Merge = require("webpack-merge");
const BaseWebpackConfig = require("./webpack.config.base");
const {CleanWebpackPlugin}  = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const utils = require("./utils");
let  {htmlWebpackPlugins } = utils.MultiplySPA();

const ProdWebpackConfig = {
    mode:"production",
    plugins:[
        new CleanWebpackPlugin(),
    ].concat(htmlWebpackPlugins),
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css\.*(?!.*map)/g,  //注意不要写成 /\.css$/g
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: { removeAll: true },
                    // 避免 cssnano 重新计算 z-index
                    safe: true,
                    // cssnano 集成了autoprefixer的功能
                    // 会使用到autoprefixer进行无关前缀的清理
                    // 关闭autoprefixer功能
                    // 使用postcss的autoprefixer功能
                    autoprefixer: true
                },
                canPrint: true
            }),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            })
        ]
    }
};
module.exports = Merge(BaseWebpackConfig,ProdWebpackConfig)