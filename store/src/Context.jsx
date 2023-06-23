
import React, {useState,useEffect} from "react";

const Context = React.createContext()

function ContextProvider({children,serviceId}){
  
   const [allPhotos,setAllPhotos] =useState([])
   const [cartItems, setCartItems] = useState([])

   const url =(`https://fakestoreapi.com/products?limit=6`)
  useEffect(() =>{
     fetch(url)
     .then(res => res.json())
     .then(data => setAllPhotos(data))


  },[])
    function toggleFavorite(id){
     const updatedArr =allPhotos.map(photo =>{
        if(photo.id === id){
         console.log(!photo.isFavorite)
         return{

            ...photo,
            isFavorite: !photo.isFavorite
         }
        }
        return photo

     })
     setAllPhotos(updatedArr)
    }
    function addToCart(newItem){
 
      setCartItems(prevItems => [...prevItems ,newItem])

    }
    console.log(cartItems)

    function removeFromCart(id) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }
 

 
 
 console.log(cartItems)
    return(

       < Context.Provider value={{allPhotos,toggleFavorite,removeFromCart, addToCart, cartItems}}>
       {children}
       
       </Context.Provider>
    )
}
export {ContextProvider,Context}