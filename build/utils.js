const glob = require('glob');
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    dev:{
        publicPath:"/assets/"
    },
    build:{
        publicPath:"assets/"
    },
    MultiplySPA(){
        const entry = {};
        const htmlWebpackPlugins = [];
        const entryFiles = glob.sync(path.join(__dirname,"../src/**/index.js"));
        // Object.keys()。对象返回属性名，数组返回索引值
        Object.keys(entryFiles).map((index)=>{
            let entryFile = entryFiles[index];
            let match = entryFile.match(/src\/entry\/(.*)\/index.js/);
            let pageName = match && match[1];

            entry[pageName] = entryFile;
            htmlWebpackPlugins.push(
                new HtmlWebpackPlugin({
                    template:path.join(__dirname,`../src/entry/${pageName}/index.html`),
                    filename:`${pageName}.html`,
                    inject:true,
                    chunks:["main"],
                    minify:{
                        html5: true,
                        // collapseWhitespace: true,
                        preserveLineBreaks: false,
                        minifyCSS: true,
                        minifyJS: true,
                        removeComments: false
                    }

                })
            )
        });
        return{
            entry,
            entryFiles,
            htmlWebpackPlugins
        }
    }
}