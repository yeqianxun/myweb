import { hot } from 'react-hot-loader/root'
import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "../Store/index";
import HomePage from "./Home/index";
import DetailLoadable from "./Blog/Detail/DetailLoadable";
import BlogHome from "./Blog/Home/BlogHome";
import * as app from "./app.scss";

 class App extends React.Component{
    render(){
        return (
            <Provider  store={Store} >
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/blog/detail/:id" component={DetailLoadable}/>
                        <Route path="/blog" component={BlogHome} />
                     </Switch>
                </Router>
            </Provider>
        )
    }
}
export default hot(App);