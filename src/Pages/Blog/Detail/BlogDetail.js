import React, { Component, Fragment } from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import BlogHeader from "../common/BlogHeader";
import style from "./BlogDetail.scss";


class BlogDetail extends Component{

    getBlogDetail(){
        const {airticleDetail} = this.props;
        const {params} = this.props.match;
        let detailItem =  airticleDetail.toJS();
        return (
            <div className={style.blog_detail_wrapper}>
                <h1 className={style.blog_detail_title}> {detailItem[parseInt(params.id)-1].title}</h1>
                <div dangerouslySetInnerHTML={{__html:detailItem[parseInt(params.id)-1].content}}></div>
            </div>
        )
    }
    render(){
        return(
            <Fragment>
                <BlogHeader/>
                <div className={style.blog_detail_container}>
                    {this.getBlogDetail()}
                </div>
            </Fragment>
        )
    }
}
const mapState2Props = (state)=>{
    return{
        airticleDetail:state.getIn(["blog","airticleDetail"])
    }
}
const mapDispatch2Props =(dispatch)=>{
    return {

    }
}
export default connect(mapState2Props,mapDispatch2Props)(withRouter(BlogDetail));
