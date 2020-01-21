import * as Types from "./Types";
import {fromJS} from "immutable";

const defaultState = fromJS({
    logined:false
});
const HomeReducer = (state=defaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
};
export default HomeReducer;