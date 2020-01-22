import { hot } from 'react-hot-loader/root'
import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "../Store/index";
import HomePage from "./Home/index";
import Blog from "./Blog/index";
import * as app from "./app.scss";

 class App extends React.Component{
    render(){
        return (
        <div>
            <Provider  store={Store} >
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/blog/airticle/:id" component={Blog}/>
                        <Route path="/blog" component={Blog} />
                     </Switch>
                </Router>
            </Provider>
        </div>
        )
    }
}
export default hot(App);