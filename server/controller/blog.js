const BlogDetailModel = require("../model/BlogDetailSchema");

class BlogController {
    async saveBlogDetail(ctx,next){
        // let savedBlog = new BlogDetailModel({
        //     "title":"2020年 到杭州找到一家好的工作",
        //     "imgUrl":"./assets/images/3.png",
        //     "content":"<p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p><p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p><p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要：</p>"
        // }).save();
    }
    async getBlogList(ctx,next){
        let blogs = await BlogDetailModel.find({});
        console.log("yangxinglong===>/blog",ctx.url)
        ctx.body = blogs;
        console.log("yangxinglong===getBlogList",blogs)
        await next();
    }
    async getBlogDetail(ctx,next){
        console.log(ctx.params.id)
        let blogItem = await BlogDetailModel.findById({"_id":ctx.params.id});
        console.log("yangxinglong=============>getBlogDetail",blogItem,ctx.params.id)
        ctx.body = blogItem;

        await next();
    }
}
module.exports = new BlogController();