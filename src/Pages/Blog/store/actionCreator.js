import * as  Types from "./Types";
import Axios from "axios";

// blog header的action
export const handleInputFocused = ()=>({
    type:Types["SEARCH_INPUT_FOCUSED"]
});
export const handleInputBlur = (isBlur) =>({
    type:Types["SEARCH_INPUT_BLUR"]
});
//blog List的action
export const getArticleList = (data)=>({
    type:Types["GET_ARTICLE_LIST"],
    data
});
export const getAirticleDetail=(data)=>({
    type:Types["GET_BLOG_DETAIL"],
    data
})
export const fetchBlogList = ()=>{
    return (dispatch)=>{
        Axios.get("http://47.103.140.10:3003/blog").then((res)=>{
            dispatch(getArticleList(res.data))
        })
    }
};
export const fetchBlogDetail = (detailId)=>{
    return (dispatch)=>{
        console.log("yangxinglong======fetchBlogDetail",detailId)
        Axios.get(`http://47.103.140.10:3003/blog/detail/${detailId}`).then((res)=>{
            dispatch(getAirticleDetail(res.data));
        })
    }
}