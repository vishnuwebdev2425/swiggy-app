import React from "react";
import { Component } from "react";

class Childclass extends Component{
    constructor(props){
        super(props)
        console.log("Child Constructor")
    }

    componentDidMount(){
        console.log("Child Component Did Mount")
    }
    render(){
        console.log("Child render")
        return(
            <div>
                <h1>Shiva</h1>
            </div>
        )
    }

}
export default Childclass