import React from "react";
import { Link } from "react-router-dom";
const ProductItem = ({ item }) => {
  const { name, avgRating, locality, url,cloudinaryImageId ,id} = item;
  
  const ImageId=`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`

  return (
    <div className="border border-solid border-black p-5 bg-gray-300 rounded-2xl m-5 text-black font-bold hover:text-black cursor-pointer w-[250px] " >
      <img className="h-[220px] w-[220px] rounded-2xl" src={ImageId} alt={name} />

      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-rating">⭐ {avgRating}</p>
        <p className="card-place">{locality}</p>
        <Link to={"/restaurant/"+id}>
          <button className="order-btn">Order Now</button>
        </Link>
      </div>
    </div>
  );
};
export default ProductItem