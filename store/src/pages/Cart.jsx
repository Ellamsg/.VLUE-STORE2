import React, {useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"


function Cart(item) {
    const {cartItems} = useContext(Context)
    const [quantity ,setquantity] =React.useState(1)
    const costotal = cartItems.reduce((total, item) => total + item.price, 0);
   
    const cartItemElements = cartItems.map(item => (
     <div>
      
         <CartItem key={item.id} item={item} />
     </div>
      
    ))
    
    return (
        <main className="cart-page text-black lg:px-[90px] py-5">
           
            <div>
                <p className="lg:text-7xl font-bold text-5xl text-center">Cart</p>
            </div>
           
            {cartItemElements}
            <div className=" flex py-4  px-5 lg:justify-center justify-start ">
                <div className="py-4 w-[50%]">
                <p className="text-2xl crt">cart total</p>
                <div className="flex py-3 crt">
                <p className="total-cost">Total</p>
                <p> $ {costotal }</p>
                </div>
                <div className="flex py-3  crt">
                <p className="total-cost ">SubTotal</p>
                <p className="font-bold">$  {costotal * cartItems.length }</p>
                </div>
            
            <div className="order-button">
                <button className="bg-wind text-white px-4 py-2" >Place your Order</button>
               
           
           
            </div>
                </div>

         
            </div>
           
        
          
        </main>
    )
}

export default Cart