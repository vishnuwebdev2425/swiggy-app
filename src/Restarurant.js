import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState("");
  const [finaldata, setFinaldata] = useState([]);
  const [singleitem, setSingleitem] = useState({});

  const part1 =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.6299752&lng=79.4266533&restaurantId=";
  const part2 = "&catalog_qa=undefined&query=Biryani&submitAction=ENTER";

  const API = part1 + id + part2;

  useEffect(() => {
    fetchingdetails();
    finaldatas();
  }, []);

  const fetchingdetails = async () => {
    const result = await fetch(API);
    const finaldata = result.body.locked;
    setRestaurant(finaldata);
  };

  const finaldatas = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.6299752&lng=79.4266533&str=North%20Indian&trackingId=30685db0-053a-4dd9-b587-2e2ace761123&submitAction=ENTER&queryUniqueId=c0e66ed1-cc46-b4b3-b66e-4c552783c020"
    );
    const json = await data.json();

    const finaldatata =
      json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;

    setFinaldata(finaldatata);
  };

  // Run finalresult only when finaldata updates
  useEffect(() => {
    if (finaldata.length > 0) {
      finalresult();
    }
  }, [finaldata]);

  const finalresult = () => {
    const data = finaldata.filter((each) => each.card.card.info.id === id);

    if (data.length > 0) {
      const value = data[0].card.card.info;
      setSingleitem(value);
      console.log("Final item:", value);
    }
  };

  return (
    <div className="restaurant-background">
      <div className="margim-container">
        <ul>
          <li>Chicken Biryani</li>
          <li>Mutton Biryani</li>
        </ul>
        <h1>Everything went Fine</h1>
        <p>FinalResult: {restaurant}</p>

        <a href={API} target="_blank" rel="noreferrer">
          <button>Get API Details</button>
        </a>

        <h2>Selected Restaurant Item:</h2>
        <pre>{JSON.stringify(singleitem, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Restaurant;
