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
    <div className="footer text-black py-5   bg-white">
      {Items ? (
        <div className="flex flex-col justify-center lg:gap-[99px] px-3 items-center lg:flex-row">
          <div className="bg-red">
          <img className="h-[200px] lg:h-[280px] " src={Items.image} />
            </div>
            <div className=" lg:w-[50%] ">
            <p className="text-4xl font-semibold py-4">{Items.title}</p>
          <p className="text-2xl font-medium uppercase">${Items.price}</p>
          <p className="py-4">{Items.description}</p>
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
