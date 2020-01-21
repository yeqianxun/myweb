import {fromJS} from "immutable";
import * as Types from "./Types";

const defaultState = fromJS({
    focused:false
});

const HeaderReducer = (state=defaultState,action)=>{
    switch(action.type){
        case Types["SEARCH_INPUT_FOCUSED"]:
            return state.set("focused",true);
        case Types["SEARCH_INPUT_BLUR"]:
            return state.set("focused",false);
        default:
            return state;
    }
};
export default HeaderReducer;