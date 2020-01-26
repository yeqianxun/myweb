const path = require("path");
const router = require("koa-router")({"prefix":"/blog"});
const {
    getBlogList,
    saveBlogDetail
} = require("../controller/blog");



router.get("/",getBlogList);

module.exports = router;
