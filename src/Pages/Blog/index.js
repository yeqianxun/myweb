import React, { Component,Fragment}  from "react";
import {connect} from "react-redux";
import BlogHeader from "./common/BlogHeader";
import BlogHome from "./Home/BlogHome";
import BlogDetail from "./Detail/BlogDetail";
import style from "./index.scss";

class Blog extends Component{
    
    render(){
        const {params} = this.props.match;
        return (
            <Fragment>
                <BlogHeader/>
               { params.id?<BlogDetail id={params.id}/>:<BlogHome/>}
            </Fragment>
        )
    }
}

export default connect(null,null)(Blog);