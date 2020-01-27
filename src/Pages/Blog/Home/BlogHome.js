import React, { Component,Fragment } from "react";
import {connect} from "react-redux";
import BlogHeader  from "../common/BlogHeader";
import BlogDetail from "../Detail/BlogDetail";
import Author from "./Author/Author";
import AirticleItem from "./AirticleItem/AirticleItem";
import * as  Creator from "../store/actionCreator";

import style from "./BlogHome.scss";

class BlogHome extends Component{

    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        const {fetchBlogList} = this.props;
        fetchBlogList();
    }
    renderAirticleLists(){
        const {airticleLists} = this.props;
        return airticleLists.map(element => {
            return <AirticleItem
             id={element._id}
             desc={`${element.content.substring(0,80)}...`}
             title={element.title}
             imgUrl={element.imgUrl}
             key={element._id}
             />
        });
    }
    render(){
        return (
            <div>
                <BlogHeader />
                <div className={`${style.bhome_wrapper} clearfix`}>
                    <div className={style.bhome_left}>
                            {this.renderAirticleLists()}
                    </div>
                    <div className={style.bhome_right}>
                        <Author />
                    </div>
               </div>
            </div>
        )
    }
}
const mapState2Props = (state)=>{
    return {
        airticleLists:state.getIn(["blog","airticleLists"])
    }
}
const mapDispatch2Props = (dispatch)=>{
    return {
        fetchBlogList(){
            dispatch(Creator.fetchBlogList())
        }
    }
}
export default connect(mapState2Props,mapDispatch2Props)(BlogHome);
