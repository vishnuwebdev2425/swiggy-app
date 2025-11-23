import React from "react";
import { Component } from "react";
import Childclass from "./Childclass";

class Class extends Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }
    state={
      count:0,
      count2:0
    }
    componentDidMount(){
      console.log("Parent Component Did Mount")

    }
    render(){
        const {name,location}=this.props
        const{count,count2}=this.state
        console.log("Parent Render")
        return (
          <div className="restaurant-background">
            <div className="content-center">
              <h1>Welcome to the about Page</h1>
              <h1>Founder:{name}</h1>
              <h1>Location:{location}</h1>
              <h1>InitalCount:{count}</h1>
              <h1>Secondary Count:{count2}</h1>
              <button onClick={()=>{
                let value=count+1
                this.setState({count:value})
              }}>
                increaseintial
              </button>
              <button onClick={()=>{
                let value=count2+1
                this.setState({count2:value})
              }}>
                increasesecondary

              </button>
              <Childclass/>
            </div>
          </div>
        );
    }
}

export default Class