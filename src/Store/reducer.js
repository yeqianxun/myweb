import {combineReducers} from "redux-immutable";
import HomeReducer from "../Pages/Home/store/reducer";
import HeaderReducer from "../Pages/Blog/common/store/reducer";

const Reducer = combineReducers({
    "home":HomeReducer,
    "header":HeaderReducer
});
export default Reducer;