import React from "react";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import UseOnlinestatus from "../utils/useOnlinestatus";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Header=()=>{
  const [btnstatus,setbtnstatus]=useState("Login")
  useEffect(()=>{
    console.log('This is Working')
  },[btnstatus])
  const {loggedInuser}=useContext(UserContext)
  console.log(console.log(loggedInuser))

 const items=useSelector((store)=>store.cart.things)
  const data=UseOnlinestatus()
  const finalfunc=()=>{
    
  }
  
    return (
      <div className="bg-orange-400 flex justify-around">
        <div>
          <Link to="/">
            <img
              className="w-50 h-[120] p-5 "
              src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
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
            <h1>Cart - {items.length}</h1>
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
          {/* <button className="cursor-pointer border border-solid " onClick={finalfunc}>
            Change Context
          </button> */}
          <h1 className="ml-2 text-white font-bold cursor-pointer hover:text-black">
            Usename:{loggedInuser}
          </h1>
        </div>
        <br></br>
      </div>
    );
}
export default Header