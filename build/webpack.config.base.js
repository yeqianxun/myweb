const path = require("path");
const webpack = require("webpack");
const config = require("./utils");

const MinCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

const {entry,entryFiles,htmlWebpackPlugins} = config.MultiplySPA();
const isEnvDevelopment = process.env.NODE_ENV ==="development"?true:false;
let entryArr = isEnvDevelopment?["react-hot-loader/patch"].concat(entryFiles):entryFiles;

module.exports = {
        entry:entryArr,
        output:{
            path:path.join(__dirname,"../dist"),
            filename:"[name].bundle.js",
            chunkFilename:"[name].[chunkHash:3].js",
            publicPath:isEnvDevelopment?config.dev.publicPath:config.build.publicPath
        },
        module:{
            rules:[{
                    test:/\.(js|jsx)$/,
                    use:["thread-loader?workers=3","babel-loader?cacheDirectory=true"],
                    include:path.join(__dirname,"../src/"),
                    exclude:/node_modules/
                },
                {
                    test:/\.(scss|sass)$/,
                    use:[
                        process.env.NODE_ENV==="production"? MinCssExtractPlugin.loader:"style-loader",
                        {
                            loader:"css-loader",
                            options:{
                                url:true,
                                sourceMap:true,
                                modules:{
                                    mode:"local",
                                    localIdentName:"[local][hash:base64:5]",
                                    hashPrefix:"myHash"
                                }
                            }
                        },{
                            loader:"postcss-loader",
                            options:{
                                plugins:[
                                    require("autoprefixer")(),
                                    require("cssnano")()
                                ]
                            }
                        },
                     "sass-loader"   
                    ]
                },{
                    test:/\.(jpg|jpeg|png|gif)$/i,
                    use:[{
                        loader:"file-loader",
                        options:{
                            name:"images/[name]__[hash:5].[ext]"
                        }
                    }]
                },{
                    test:/\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                    use:[{
                        loader:"url-loader",
                        options:{
                            name:"fonts/[name]__[hash:3].[ext]"
                        }
                    }]
                }]
        },
        plugins:[
            new CleanWebpackPlugin(),
            new MinCssExtractPlugin({
                filename:"[name]-[contenthash:3].css"
            }),
            new HardSourceWebpackPlugin()
        ]
};


