import React from "react";
import { useState } from "react";
const Function=(props)=>{
    const[count,setcount]=useState(0)
    const[count2,setcount2]=useState(1)
    const{name,location}=props
    const adding=()=>{
        let secondaryvalue=count2+1
        setcount2(secondaryvalue)

    }
    return (
      <div className="restaurant-background">
        <div className="content-center">
          <h1>Welcome to the about Page </h1>
          <h1>Founder:{name}</h1>
          <h1>Location:{location}</h1>
          <h1>InitalCount:{count}</h1>
          <h1>Secondary Count:{count2}</h1>
          <button onClick={()=>{
            let value=count+1
            setcount(value)

          }}>
            Increase Intial
          </button>
          <button onClick={adding}>
            Increase Another
          </button>
        </div>
      </div>
    );
}
export default Function