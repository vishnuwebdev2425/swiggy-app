import React, { useEffect, useState } from "react";

const Testing=()=>{
    const[count,setcount]=useState(0)
    const[anothercount,setanothercount]=useState(0)

    useEffect(()=>{
        console.log("It is Working")
    },[anothercount])
    useEffect(() => {
      const time=setInterval(()=>{
        console.log("Set Time Interval Is Working")
      },5000)
      return ()=>{
        clearInterval(time)
      }
    }, [count]);
    return (
      <div className="github-conatiner">
        <h1>Shiva</h1>
        <button onClick={()=>{
            const value=count+1
            setcount(value)
        }}>Get Increarse</button>
        <h3>Current Value:{count}</h3>
      </div>
    );

}

export default Testing