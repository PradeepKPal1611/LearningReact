import React from "react";

class ChildClassComponent extends React.Component{
    render(){
        return(
            <h2>
            <ChildClassComponent />
            </h2>
        )
    }
}
export default ChildClassComponent;