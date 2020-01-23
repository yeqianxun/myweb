import React,{Component,Fragment} from "react";
import {hot} from "react-hot-loader/root";


class TestItem extends Component{

    render(){
        const {id,title,imgUrl,desc} = this.props;
        return (
            <Fragment>
               <h1>Hello world...................</h1>
            </Fragment>
        )
    }

}
export default hot(TestItem)