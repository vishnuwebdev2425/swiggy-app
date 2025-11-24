import React from "react";
import { Component } from "react";
import Childclass from "./Childclass";
import { Link } from "react-router-dom";

class Class extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  state = {
    count: 0,
    count2: 0,
    finaldata:{}
  };
  gettingfinaloutput = async () => {
    const data = await fetch("  https://api.github.com/users/akshaymarch7");
    const response = await data.json();
    this.setState({finaldata:response})
    
  };
  componentDidMount() {
    this.gettingfinaloutput();
  }
 
  render() {
  
    const{login,avatar_url,bio,created_at,name,url,public_repos }=this.state.finaldata
    const {location}=this.props
   
    const { count, count2 } = this.state;
    console.log("Parent Render");
    return (
      <div className="restaurant-background">
        <div className="content-center">
          <h1>Welcome to the about Page</h1>

          <h1>Location:{location}</h1>
          <h1>InitalCount:{count}</h1>
          <h1>Secondary Count:{count2}</h1>
          <button
            onClick={() => {
              let value = count + 1;
              this.setState({ count: value });
            }}
          >
            increaseintial
          </button>
          <button
            onClick={() => {
              let value = count2 + 1;
              this.setState({ count2: value });
            }}
          >
            increasesecondary
          </button>
          <Childclass />
        </div>
        <div className="github-conatiner">
          <h1>Welcome to Github Profile Portion</h1>
          <h2>Username:{login}</h2>
          <h2>Original Name:{name}</h2>
          <h2>Github repos:{public_repos}</h2>
          <h2>Info:{bio}</h2>
          <h2>Created at:{created_at}</h2>
          <a href={url} target="_blank">
            <button>see the Original git</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Class