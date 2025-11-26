const Topper=(props)=>{
    console.log(props.property);
    const { cloudinaryImageId, address, areaName, avgRating, cuisines, name ,sla} =
      props.property;
      console.log(sla)
    const ImageId = `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`;
    return (
      <div className="bg-gray-300 flex flex-row cursor-pointer hover:bg-orange-300 ">
        <div>
          <img className=" w-80 rounded-3xl m-5 p-3" src={ImageId} />
        </div>
        <div className="ml-80 mt-1.5 p-5">
          <h1 className="p-2 font-bold ">Name:{name}</h1>
          <h1 className="p-2 font-bold">AreaName:{areaName}</h1>
          <h1 className="p-2 font-bold">AvgRating:{avgRating}</h1>
          <h1 className="p-2 font-bold">Cusines:</h1>
          {cuisines?.map((each) => (
            <h1 className="pl-3.5 text-blue-600 hover:text-white" key={each}>
              {each}
            </h1>
          ))}
          {/* <h1 className="p-2 font-bold">
            ExpectedDelivery:{sla.deliveryTime
} Min
          </h1> */}
          <button className="h-[60] w-[120] border border-solid bg-amber-200 font-bold text-black rounded-2xl cursor-pointer hover:bg-blue-400">Order Now</button>
        </div>
      </div>
    );
}

export const mainTopper=(Topper)=>{
    return (props)=>{

       return (
         <div>
           <label className="absolute  bg-amber-200 p-3 text-black font-bold rounded-2xl">
             Highly Rated
           </label>
           <Topper {...props} />
         </div>
       );
    }


}



export default Topper