const Merge = require("webpack-merge");
const webpack = require("webpack");
const BaseWebpackConfig = require("./webpack.config.base");


DevWebpackConfig = {
    mode:"development",
    devServer:{
        port:8888,
        hot:true,
        historyApiFallback:true,
        open:true,
        publicPath:"/assets/"
    },
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.HashedModuleIdsPlugin()
    ]
    
}

module.exports = Merge(BaseWebpackConfig,DevWebpackConfig)