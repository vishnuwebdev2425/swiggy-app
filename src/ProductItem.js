import React from "react";
const ProductItem = ({ item }) => {
  const { name, avgRating, locality, url,cloudinaryImageId } = item;
  
  const ImageId=`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`

  return (
    <div className="card">
      <img src={ImageId} alt={name} />

      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-rating">⭐ {avgRating}</p>
        <p className="card-place">{locality}</p>

        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};
export default ProductItem