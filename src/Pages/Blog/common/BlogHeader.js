import React, { Component,Fragment } from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import style from "./BlogHeader.scss";


class BlogHeader extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
            <Fragment>
            <header className={style.blog_header}>
              <Link to="/" > <span className={style.blog_logo}></span> </Link>
              <div className={style.blog_header_wrapper}>
                  <div className={style.blog_nav}>
                      <Link to="/blog"  className={style.blog_index}>首页</Link>
                      <Link to="/blog/downloadApp" className={style.blog_app_download}>下载App</Link>
                      <div className={style.blog_search}>
                         <input type="text" placeholder="search..." />
                         <span ></span>
                      </div>
                  </div>
                  
              </div>
            </header>
            </Fragment>
        )
    }
}
const mapState2Props = (state)=>{
    return {
    }
}
const mapDispatch2Props = (dispatch)=>{
    return {

    }
}
export default connect(mapState2Props,mapDispatch2Props)(BlogHeader);