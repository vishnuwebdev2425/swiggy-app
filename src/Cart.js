import { useSelector } from "react-redux";
import FinalComponents from "./FinalComponents";
import { Clearcart } from "../utils/cartslice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.things);
  const dispatch = useDispatch();
  console.log(cartitems);
  const finalfunction=()=>{
    
    dispatch(Clearcart())


  }

  return (
    <div className="m-3 p-5 text-center font-bold">
        <h1 className="p-3 font-medium text-2xl text-blue-500"> Cart Details</h1>
      <div>
        <div>
          <button onClick={finalfunction} className="text-center m-3 p-2 border border-solid bg-black text-white rounded-2xl cursor-pointer">Clear Cart</button>
        </div>
        {cartitems.length == 0 && (
          <div> The Card Is Empty Pls Add new Items</div>
        )}
        {
            cartitems.map((each,index)=>{
                return (
                  <FinalComponents
                    props={each}
                    key={index}
                  />
                );
            })
        }
      </div>
    </div>
  );
};

export default Cart;
