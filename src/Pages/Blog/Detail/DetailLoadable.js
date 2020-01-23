import React from "react"
import Loadable from "react-loadable";
import LoadingIcon from "./LoadingIcon"
const LoadableComponent = Loadable({
    loader:()=> import("./BlogDetail.js"),
    loading:LoadingIcon
	
});

export default ()=><LoadableComponent/>