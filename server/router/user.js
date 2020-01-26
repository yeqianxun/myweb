const router = require("koa-router")({"prefix":"/user"});

router.get("/",async(ctx,next)=>{
    ctx.body = {
        code:"200",
        message:"用户列表"
    }
    await next();
});
module.exports = router;
