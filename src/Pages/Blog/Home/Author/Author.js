import React, { Component,Fragment } from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import style from "./author.scss";
import me from "@img/me.png";

class articleItem extends Component{

    render(){
        return (
            <Fragment>
                <div className={`${style.item_wrapper} clearfix`}>
                <img src={me}  />
                        <div className={style.item_mypic}>
                            <h4>个人介绍:</h4>
                            <p>技术宅，运动系，动漫迷，野生山炮程序员。</p>
                            <p>始于前端，陷于软件；忠于开发，痴于技术。</p>
                        </div>
                        <div className={style.author_article}>
                            <ul>
                                <li><Link to="/article?keyword=backend"><span className={`iconfont icon-emial`}></span>后端开发</Link></li>
                                <li><Link to="/article?keyword=hardwork"><span className={`iconfont icon-emial`}></span>征程路上</Link></li>
                                <li><Link to="/article?keyword=linux"><span className={`iconfont icon-emial`}></span>Linux笔录</Link></li>
                                <li><Link to="/article?keyword=problem"><span className={`iconfont icon-emial`}></span>开发问题</Link></li>
                                <li><Link to="/article?keyword=scan"><span className={`iconfont icon-emial`}></span>技术探索</Link></li>
                                <li><Link to="/article?keyword=mobile"><span className={`iconfont icon-emial`}></span>移动开发</Link></li>
                                <li><Link to="/article?keyword=web"><span className={`iconfont icon-emial`}></span>前端开发</Link></li>  
                            </ul>
                        </div>
                </div>
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
export default connect(mapState2Props,mapDispatch2Props)(articleItem);
