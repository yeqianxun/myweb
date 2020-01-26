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
        publicPath:"/assets/",
        proxy:{
            "/api":{
                target:"http://127.0.0.1:3003",
                pathRewrite:{"^/api":""},//路径重写，也就是说会修改最终请求的API路径。
                changeOrigin:true,//这个参数可以让target参数是域名。
                secure:false//不检查安全问题。
            }
        }
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