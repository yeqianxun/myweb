const Merge = require("webpack-merge");
const BaseWebpackConfig = require("./webpack.config.base");
const {CleanWebpackPlugin}  = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinCssExtractPlugin = require("mini-css-extract-plugin");
const utils = require("./utils");
let  {htmlWebpackPlugins } = utils.MultiplySPA();

const ProdWebpackConfig = {
    mode:"production",
    output:{
        filename:"assets/js/[name].bundle.js",
        chunkFilename:"assets/js/[name]-[chunkHash:3].chunk.js",
    },
    module:{
        rules:[
            {
                test:/\.(jpg|jpeg|png|gif)$/i,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"assets/images/[name]_[hash:5].[ext]"
                        }
                    }
                ]
            },
            {
                test:/\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/i,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            name:"assets/fonts/[name]__[hash:5].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MinCssExtractPlugin({
            filename:"assets/style/[name]-[contenthash:3].css"
        })
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