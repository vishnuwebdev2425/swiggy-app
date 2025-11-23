import React from "react";
import { Component } from "react";

class Class extends Component{
    constructor(props){
        super(props)
    }
    state={
      count:0,
      count2:0
    }
    render(){
        const {name,location}=this.props
        const{count,count2}=this.state
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
            </div>
          </div>
        );
    }
}

export default Class