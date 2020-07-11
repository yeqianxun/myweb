const Koa = require("koa");
const Router = require("koa-router");
const parameter = require("koa-parameter");
const error = require("koa-json-error");
const BadyParser = require("koa-bodyparser");
const Body = require("koa-body");
const Cors = require("koa2-cors");
const mongoose = require("mongoose");
const DBConfig = require("./lib/config");
const static = require("koa-static");



// 工具类模块
const  {routerRegister,connectMongoDB} = require("./lib/utils");
const {logger,accessLogger} = require("./lib/logger");

connectMongoDB();

const app = new Koa();
// const roter = new Router();
// 访问级别的日志
app.use(accessLogger());
// 静态资源配置
app.use(static(__dirname,"/public"));

// 跨域请求的配置
app.use(Cors({
    origin:function(ctx){
        if(ctx.url==="/api"){
          return "*"
        }
        return "*";
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
// 请求校验的中间件
app.use(parameter(app));
// 文件，post请求的中间件
app.use(Body());
// get请求中间件
app.use(BadyParser());

// 批量注册路由
routerRegister(app);
// 系统应用级别的错误捕获
app.on("errror",(e)=>{
    logger.error(e)
});

app.listen(3003,()=>{
    console.log("服务器启动啦。。。");
});
