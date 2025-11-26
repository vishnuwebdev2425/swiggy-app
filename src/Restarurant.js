import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Finalcomponent from "./Finalcomponent";

const Restarurant = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [newdata, setnewdata] = useState({});

  useEffect(() => {
    gettingresults();
  }, []);

  useEffect(() => {
    if (data.length > 0) gettinggeneralurl();
  }, [data]);

  const gettinggeneralurl = () => {
    const filtered = data
      .filter((each) => each.card?.card?.info?.id === id)
      .map((each) => each.card.card.info);

    setnewdata(filtered[0] || {});
  };

  const gettingresults = async () => {
    const URL =
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.6299752&lng=79.4266533&str=North%20Indian&trackingId=30685db0-053a-4dd9-b587-2e2ace761123&submitAction=ENTER&queryUniqueId=c0e66ed1-cc46-b4b3-b66e-4c552783c020";

    const result = await fetch(URL);
    const data = await result.json();
   

    const resultant =
      data.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
    
    setdata(resultant || []);
  };

  if (!data.length) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  const {
    address,
    areaName,
    cuisines,
    avgRating,
    locality,
    name,
    promoted,
    sla,
    cloudinaryImageId,
  } = newdata;
  const itemdetails = {
    address,
    cuisines,
    areaName,
    avgRating,
    locality,
    name,
    promoted,
    sla,
    cloudinaryImageId,
  };
  //console.log(itemdetails)

  return (
    <div>
      <Finalcomponent details={itemdetails} key={itemdetails.name}/>


    </div>
  ) 
};

export default Restarurant;
