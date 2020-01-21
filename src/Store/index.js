import {compose,createStore,applyMiddleware} from "redux";
//用于将异步事件放到action处理的中间件，将以前为对象的action转换为函数
import thunk from "redux-thunk";
import Reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// https://github.com/zalmoxisus/redux-devtools-extension
const Store = createStore(Reducer,composeEnhancer(
    applyMiddleware(thunk)
));
export default Store;

