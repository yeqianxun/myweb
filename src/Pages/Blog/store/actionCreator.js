import * as  Types from "./Types";

// blog header的action
export const handleInputFocused = ()=>({
    type:Types["SEARCH_INPUT_FOCUSED"]
});
export const handleInputBlur = (isBlur) =>({
    type:Types["SEARCH_INPUT_BLUR"]
});
//blog List的action
export const getArticleList = ()=>({
    type:Types["GET_ARTICLE_LIST"]
});