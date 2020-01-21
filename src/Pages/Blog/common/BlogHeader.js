import React, { Component,Fragment } from "react";
import {connect} from "react-redux";
import {CSSTransition} from "react-transition-group";
import * as Creator from "./store/actionCreator";
import {Link} from "react-router-dom";
import style from "./BlogHeader.scss";


class BlogHeader extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        const {focused,handleBlur,handleFcous} = this.props;
        return (
            <Fragment>
            <header className={style.blog_header}>
              <Link to="/" > <span className={style.blog_logo}></span> </Link>
              <div className={style.blog_header_wrapper}>
                  <div className={style.blog_nav}>
                      <Link to="/blog"  className={style.blog_index}>首页</Link>
                      <Link to="/blog/downloadApp" className={style.blog_app_download}>下载App</Link>
                      <div className={style.blog_search}>
                            <CSSTransition 
                                in={focused}
                                timeout={300} 
                                classNames="slide">
                                <input type="text" 
                                    placeholder="搜索..." 
                                    onFocus={handleFcous}
                                    onBlur={handleBlur}
                                    className={focused?"focused":""}
                                  />
                            </CSSTransition>
                            <span className={focused?`iconfont icon-search ${style.active}`:"iconfont icon-search"}></span>
                     </div>
                  </div>  
                  <div className={style.blog_reglogin}>
                      <Link to="/sign_in" className={style.sign_in}>登录</Link>
                      <Link to="/sign_up" className={style.sign_up}>注册</Link>
                  </div>
              </div>
            </header>
            </Fragment>
        )
    }
}

const mapState2Props = (state)=>{
    return {
        focused:state.getIn(["header","focused"])
    }
}
const mapDispatch2Props = (dispatch)=>{
    return {
        handleFcous(){
            dispatch(Creator.handleInputFocused())
        },
        handleBlur(){
            dispatch(Creator.handleInputBlur())
        }
    }
}
export default connect(mapState2Props,mapDispatch2Props)(BlogHeader);