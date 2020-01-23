import React,{Component,Fragment} from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import style from  "./AirticleItem.scss";
class ArticleItem extends Component{

    render(){
        const {id,title,imgUrl,desc} = this.props;
        return (
            <div>
                <Link to={`/blog/airticle/${id}`}>
                    <div className={`${style.article_item_container} clearfix`}>
                         <div className={style.airticle_content}>
                                <h3>{title}</h3>
                                <p dangerouslySetInnerHTML={{__html:desc}}></p>
                         </div>
                         <div className={`${style.airticle_img} clearfix`}>
                            <img src={imgUrl} />
                         </div>
                    </div>
                </Link>
            </div>
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
export default connect(mapState2Props,mapDispatch2Props)(ArticleItem)