const FinalComponents=(items)=>{
  
  const { areaName, avgRating, cloudinaryImageId, name, locality } =
    items.props.property;
  const ImageId = `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`;
  
  return (
    <div className="w-6/12 ml-80 mb-3 rounded-2xl shadow-2xl">
      <div className="h-[250] bg-gray-400 flex flex-row justify-around hover:bg-black">
        <div>
          <img className=" h-[220] w-[320] m-3 p-3" src={ImageId} />
        </div>
        <div className="m-20">
          <h1 className="text-white">{name}</h1>
          <h1 className="text-white">{areaName}</h1>
          <h1 className="text-white">{avgRating}</h1>
          <button className="bg-orange-400 p-3 m-3 text-white rounded-2xl cursor-pointer hover:bg-black">
            Pay To Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinalComponents