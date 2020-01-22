import {combineReducers} from "redux-immutable";
import HomeReducer from "../Pages/Home/store/reducer";
import BlogReducer from "../Pages/Blog/store/reducer";

const Reducer = combineReducers({
    "home":HomeReducer,
    "blog":BlogReducer
});
export default Reducer;