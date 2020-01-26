import {fromJS} from "immutable";
import * as Types from "./Types";
import png1 from "@img/1.png";
import png2 from "@img/2.png";
import png3 from "@img/3.png";
const defaultState = fromJS({
    focused:false,
    airticleLists:[],
    "airticleDetail":[{
			"id":1,
			"title":"衡水中学，一所被外人占领的高考工厂",
			"imgUrl":"https://upload-images.jianshu.io/upload_images/2509688-861a3570c1954f49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/737/format/webp",
			"content":"<p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p><p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p><p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p>"
		},{
			"id":2,
			"title":"帝国理工和皇家理工的区别",
			"imgUrl":"https://upload-images.jianshu.io/upload_images/2509688-861a3570c1954f49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/737/format/webp",
			"content":"<p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p><p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p><p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要：</p>"
		},{
			"id":3,
			"title":"2020年 到杭州找到一家好的工作",
			"imgUrl":"https://upload-images.jianshu.io/upload_images/2509688-861a3570c1954f49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/737/format/webp",
			"content":"<p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p><p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p><p>只要在 HTML5 中使用过视频播放的同学对 video 标签一定不会陌生，不过很多同学只使用了 video 的基础功能，实际上 video 拥有强大潜能的，只要姿势正确就能让其拥有超能力。不妨从下面几个场景来逐渐了解下video 未曾被发掘的神秘空间：</p>"
		}]
});


const BlogReducer = (state=defaultState,action)=>{
    switch(action.type){
        case Types["SEARCH_INPUT_FOCUSED"]:
            return state.set("focused",true);
        case Types["SEARCH_INPUT_BLUR"]:
            return state.set("focused",false);
        case Types["GET_ARTICLE_LIST"]:
			// console.log("yangxinglong=====blogReucer",action.data)
            return state.set("airticleLists",action.data);
        default:
            return state;
    }
};
export default BlogReducer;