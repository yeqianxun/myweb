const path = require("path");
const fs = require("fs");
const DBConfig = require("./config");
const mongoose = require("mongoose");


class HelperUtils {
    // 批量注册路由
    routerRegister(app){
        const targetDir = path.join(__dirname,"..","router");
        fs.readdirSync(targetDir).forEach(file=>{
            const router = require(`${targetDir}/${file}`)
                app.use(router.routes()).use(router.allowedMethods());
        }); 
    }
    // 创建写入流
    createWriteStream(fileName){
        const logpath = path.join(__dirname,"..","logs",fileName);
        const writeStream = fs.createWriteStream(logpath,{
            flags:"a"
        })  
        return writeStream;
    }
    // 自定义访问日志
    accessLog(logs){
        const accesslog = this.createWriteStream("access.log");
        return accesslog.write(logs+"\n");
    }
    // 自定义错误日志
    errorLog(logs){
        const errorlog = this.createWriteStream("error.log");
        return errorlog.write(logs+"\n");
    }
    connectMongoDB(){
        const URL = `mongodb://${DBConfig.DBOwner}:${DBConfig.PWD}@${DBConfig.IpAdress}:${DBConfig.PORT}/${DBConfig.DBName}`;
        console.log("yangxingl=====>",URL);
        mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true},(err,data)=>{
            if(err){
                console.log("mongoDB error::",err)
            }else{  
               console.log("数据库连接成功.....");

            }
        })
    }
}
const Helper = new HelperUtils()
module.exports = Helper;