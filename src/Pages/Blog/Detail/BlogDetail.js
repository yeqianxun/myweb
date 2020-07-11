import React, { Component } from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import BlogHeader from "../common/BlogHeader";
import * as Creator from "../store/actionCreator";

// import { hot } from 'react-hot-loader/root';
import style from "./BlogDetail.scss";


class BlogDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    componentDidMount(){
        console.log("yangxinglong=====>compdidmount")
        const {dispatchBlogDetail} = this.props;
        const {params} = this.props.match
        dispatchBlogDetail(params.id);
    }
    getBlogDetail(){
        const {airticleDetail} = this.props;
        const {params} = this.props.match;
        console.log("yangxinglong===========ygetblogDETAIL",params,airticleDetail)
        if(airticleDetail._id){
            return (
                <div className={style.blog_detail_wrapper}>
                    <h1 className={style.blog_detail_title}> {airticleDetail.title}</h1>
                    <div dangerouslySetInnerHTML={{__html:airticleDetail.content}}></div>
                </div>
            )
        }
    }
    componentWillUnmount(){
        console.log("yangxinglong====unmount",this.getBlogDetail())
    }
    render(){
        return(
            <div>
                <BlogHeader/>
                <div className={style.blog_detail_container}>
                    {this.getBlogDetail()}
                </div>
            </div>
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
        dispatchBlogDetail(id){
            dispatch(Creator.fetchBlogDetail(id));
        }
    }
}


export default connect(mapState2Props,mapDispatch2Props)(withRouter(BlogDetail));
