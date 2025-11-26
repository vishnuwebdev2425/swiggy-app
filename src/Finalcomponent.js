import Topper from "./Topper";
import { mainTopper } from "./Topper";

const Finalcomponent=({details})=>{
    const {
      address,
      areaName,
      cuisines,
      avgRating,
      locality,
      name,
      sla,
      cloudinaryImageId,
    } = details;
    console.log(avgRating)
    
   const Finaltopper=mainTopper(Topper)

    return (
      <div>
        <div className="text-center">
          <h1 className="m-3 p-2 text-fuchsia-400 font-extrabold font-serif">
            Welcome To Details Section
          </h1>
          <p className="text-orange-400 font-bold">Powered By Swiggy</p>
        </div>
        <div className="border-2 border-solid mt-2 w-7xl ml-25">
            {avgRating<4.4?(
                <Topper property={details}/>
            ):(
                <Finaltopper property={details}/>
            )}
            

        </div>
        
      </div>
    );
}

export default Finalcomponent