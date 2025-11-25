import React from "react";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import UseOnlinestatus from "../utils/useOnlinestatus";
const Header=()=>{
  const [btnstatus,setbtnstatus]=useState("Login")
  useEffect(()=>{
    console.log('This is Working')
  },[btnstatus])
  const data=UseOnlinestatus()
  
    return (
      <div className="header_container">
        <div>
          <Link to="/">
            <img
              className="logo-image"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            />
          </Link>
        </div>
        <div className="flexing-header-elements">
          
            <h1> {data ? "🟢" : "🔴"}</h1>
         
          <Link to="/contact" className="link-style">
            <h1 className="hell">Contact Us</h1>
          </Link>
          <Link to="/about" className="link-style">
            <h1 className="hell">About Us</h1>
          </Link>
          <Link to="/testing" className="link-style">
            <h1 className="hell">Testing</h1>
          </Link>
          <Link to="/grocery" className="link-style">
          <h1 className="hell">Grocery</h1>
          </Link>
          <a href="https://www.swiggy.com/" target="_blank">
            <button className="get-btns btns">Get The App</button>
          </a>
          <button
            className="btns-sign btns"
            onClick={() => {
              if (btnstatus === "Login") {
                setbtnstatus("Logout");
              } else {
                setbtnstatus("Login");
              }
            }}
          >
            {btnstatus}
          </button>
        </div>
        <br></br>
      </div>
    );
}
export default Header