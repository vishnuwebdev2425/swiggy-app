import React from "react";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import UseOnlinestatus from "../utils/useOnlinestatus";
import { useSelector } from "react-redux";
const Header=()=>{
  const [btnstatus,setbtnstatus]=useState("Login")
  useEffect(()=>{
    console.log('This is Working')
  },[btnstatus])

 const items=useSelector((store)=>store.cart.things)
  const data=UseOnlinestatus()
  
    return (
      <div className="bg-orange-400 flex justify-around">
        <div>
          <Link to="/">
            <img
              className="w-50 p-5 "
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            />
          </Link>
        </div>
        <div className="flex flex-row justify-end mt-8 ml-100 ">
          <h1> {data ? "🟢" : "🔴"}</h1>

          <Link
            to="/contact"
            className="mx-5 hover:text-white cursor-pointer border-solid border-amber-300"
          >
            <h1 className="hell">Contact Us</h1>
          </Link>
          <Link to="/about" className="mx-5  hover:text-white cursor-pointer">
            <h1 className="hell">About Us</h1>
          </Link>
          <Link to="/cart" className="mx-5  hover:text-white cursor-pointer">
            <h1>Cart - {items.length
              }</h1>
          </Link>

          <Link to="/grocery" className="mx-5  hover:text-white cursor-pointer">
            <h1 className="hell">Grocery</h1>
          </Link>
          <a href="https://www.swiggy.com/" target="_blank">
            <button className="get-btns btns  hover:text-white cursor-pointer">
              Get The App
            </button>
          </a>
          <button
            className="mb-10 ml-5 py-1 px-2 rounded-[5px] cursor-pointer font-bold text-white  border-solid w-20 bg-blue-500 hover:bg-black"
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