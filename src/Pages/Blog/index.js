import React, { Component,Fragment}  from "react";
import {connect} from "react-redux";
import BlogHeader from "./common/BlogHeader";
import style from "./index.scss";

class Blog extends Component{
    render(){
        return (
            <Fragment>
                <BlogHeader/>
            </Fragment>

        )
    }
}
export default connect(null,null)(Blog);