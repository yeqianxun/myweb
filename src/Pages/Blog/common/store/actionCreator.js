import * as  Types from "./Types";

export const handleInputFocused = ()=>({
    type:Types["SEARCH_INPUT_FOCUSED"]
});
export const handleInputBlur = (isBlur) =>({
    type:Types["SEARCH_INPUT_BLUR"]
})