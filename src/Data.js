import React from "react";
import items from "../utils/Products";
import ProductItem from "./ProductItem";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Data=()=>{
    //let finalItem=items
    const [finalList,SetProductItemList]=useState([])
    const [search,setsearch]=useState("")
    const [newList,setnewList]=useState([])
    const[topproduct,settopproduct]=useState([])
    

    

    let finalset = () => {
      const finaldata = topproduct.filter((each) => each.avgRating > 4.0);
      SetProductItemList(finaldata);
    };
    useEffect(()=>{
      gettingdetails()
      
    },[])
    

    const gettingdetails=async()=>{
      try{
        const result = await fetch(
          "https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.6299752&lng=79.4266533&str=North%20Indian&trackingId=30685db0-053a-4dd9-b587-2e2ace761123&submitAction=ENTER&queryUniqueId=c0e66ed1-cc46-b4b3-b66e-4c552783c020"
        );
        const data=await result.json()
        console.log(data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[0].card.card.info);
        let finaldata = [];
        for(let i=0;i<=100;i++){
          
          finaldata.push(
            data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[i].card
              .card.info
          );
        }
        SetProductItemList(finaldata)
        setnewList(finaldata)
        settopproduct(finaldata)
        
      }catch(err){
        console.log(err.message)
      }

    }
    if (finalList.length === 0) {
      return <Shimmer />;
    }
    console.log(newList)
    
    return (
      <div>
        <div className="body-container ">
          <div>
            <div className="search-container">
              <input className="input-conatiner" type="text" value={search} onChange={(e)=>{
                setsearch(e.target.value)
              }}/>
              <button className="button-container" onClick={()=>{
                const data = newList.filter((each) => {
                  return each.name
                    .toUpperCase()
                    .includes(search.toUpperCase());
                });
                SetProductItemList(data)
              }}>Search</button>
            </div>
            <button className="btn-products" onClick={finalset}>Top Products</button>
            <div className="main-wrapper">
              {finalList.map((each) => {
                return <ProductItem item={each} key={each.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Data