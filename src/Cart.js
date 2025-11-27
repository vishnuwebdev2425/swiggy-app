import { useSelector } from "react-redux";
import FinalComponents from "./FinalComponents";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.things);
  console.log(cartitems);

  return (
    <div className="m-3 p-5 text-center font-bold">
        <h1 className="p-3 font-medium text-2xl text-blue-500"> Cart Details</h1>
      <div>
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
