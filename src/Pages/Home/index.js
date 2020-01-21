import React ,{Component} from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import style from "./home.scss";
class HomePage extends Component{
 
    render(){
        return (
          <div className={style.home_container}>
            <div className={style.home_section}>
                <div className={style.home_wrapper}>  
                    <div className={style.home_logo}></div>
                    <h3>个人scrum敏捷管理CMS</h3>
                    <div className={style.home_content}>
                        <p>一款为自己打造的,应用前端开发技术(Koa2+React16全家桶+MongoDB)开发的web应用，旨在记录收支情况和任务完成度，同时记录一些生活工作中的日常笔记</p>
                    </div>
                    <div className={style.home_link}>
                        <Link to="/finance">财务管理</Link>
                        <Link to="/task">任务管理</Link>
                        <Link to="/blog">博客管理</Link>
                    </div>
                </div>
                    <div className={style.home_email}>
                        <p>Power By <a href="mailto:yxl_richard@foxmail.com">yxl_richard@foxmail.com</a></p>
                    </div>
            </div> 
          </div>
        )
    }
}
const mapState2Props = (state)=>{
    return {
        logined:state.get("home","logined")
    }
};
const mapDispatch2Props = (dispatch)=>{
    return {
        
    }
}
export default connect(mapState2Props,mapDispatch2Props)(HomePage)