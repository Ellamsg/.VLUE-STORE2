import React, { useContext } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";

export default function Storedetails() {
  const { addToCart } =
    useContext(Context);
  const params = useParams();
  const [Items, setItems] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [params.id]);

  function handleClick(Items) {
    addToCart(Items);
  }

  return (
    <div className="footer text-black py-6  lg:py-9 bg-boxwind">
      {Items ? (
        <div className="flex flex-col justify-center lg:gap-[99px] px-3 items-center lg:flex-row">
          <div className="">
          <img className="h-[200px] im lg:h-[280px] " src={Items.image} />
            </div>
            <div className=" lg:w-[50%] ">
            <p className="lg:text-4xl text-3xl  font-semibold py-4">{Items.title}</p>
          <p className="lg:text-2xl text-base font-medium uppercase">${Items.price}</p>
          <p className="py-4 text-sm lg:text-base">{Items.description}</p>
          <p><span className="font-semibold">category:</span> {Items.category}</p>
          <button
            onClick={() => handleClick(Items)}
            className=" cart bg-wind my-4 lg:my-6 text-xs l rounded-[2px] 
                text-white px-6 py-2 "
          >
            ADD TO CART
          </button>
              </div>
          
         
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
