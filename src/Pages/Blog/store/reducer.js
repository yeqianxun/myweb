import {fromJS} from "immutable";
import * as Types from "./Types";
import png1 from "@img/1.png";
import png2 from "@img/2.png";
import png3 from "@img/3.png";
const defaultState = fromJS({
    "focused":false,
    "airticleLists":[],
    "airticleDetail":[]
});


const BlogReducer = (state=defaultState,action)=>{
    switch(action.type){
        case Types["SEARCH_INPUT_FOCUSED"]:
            return state.set("focused",true);
        case Types["SEARCH_INPUT_BLUR"]:
            return state.set("focused",false);
        case Types["GET_ARTICLE_LIST"]:
			return state.set("airticleLists",action.data);
		case Types["GET_BLOG_DETAIL"]:
			return state.set("airticleDetail",action.data);
        default:
            return state;
    }
};
export default BlogReducer;