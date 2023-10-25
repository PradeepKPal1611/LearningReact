import React,{Component} from "react";
import ChildClassComponent from "./childClassComponent";

class ParentClassComponent extends React.Component{
    render(){
        return(
        <>
        <h1>Parent Class Component</h1>
        < ChildClassComponent />

        </>

        ) 
    }
}
export default ParentClassComponent;