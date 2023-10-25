import React from "react";
import ChildComponent from './childComponent.js';

export default function ParentComponent(){
    const mydata = "This call is from component!";
    return(
       
        <ChildComponent data ={mydata}/>
       
    )
}
