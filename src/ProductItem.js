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
          <button className="p-3 m-2 border border-solid bg-amber-600 rounded-2xl text-white font-bold cursor-pointer">Get Info</button>
        </Link>
        
      </div>
    </div>
  );
};

export const newProductItem=(ProductItem)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-b-lg">Top Rated</label>
        <ProductItem {...props}/>
      </div>
    );
    

  }
}
export default ProductItem