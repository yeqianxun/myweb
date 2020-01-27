const path = require("path");
const router = require("koa-router")({"prefix":"/blog"});
const {
    getBlogList,
    saveBlogDetail,
    getBlogDetail
} = require("../controller/blog");



router.get("/",getBlogList);
router.get("/detail/:id",getBlogDetail)

module.exports = router;
