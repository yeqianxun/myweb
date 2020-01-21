import {combineReducers} from "redux-immutable";
import HomeReducer from "../Pages/Home/store/reducer";

const Reducer = combineReducers({
    "home":HomeReducer
});
export default Reducer;