const router = require("koa-router")({"prefix":"/user"});

router.get("/",async(ctx,next)=>{
    ctx.body = {
        code:"200",
        message:"用户列表"
    }
    await next();
});
router.get("/login")
module.exports = router;
