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
        const {getArticleList} = this.props;
        getArticleList();
    }
    renderAirticleLists(){
        const {airticleLists} = this.props
        const originAirticleList = airticleLists.toJS();
        return originAirticleList.map(element => {
            return <AirticleItem
             id={element.id}
             desc={element.desc}
             title={element.title}
             imgUrl={element.ImgUrl}
             key={element.id*Math.random()}
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
        getArticleList(){
            dispatch(Creator.getArticleList())
        }
    }
}
export default connect(mapState2Props,mapDispatch2Props)(BlogHome);
