import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import giphy from '../../images/giphy.gif';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
const Review = () => {

   const [carts,setCarts] =useState([]);
    const [orderPlaced,setOrderPlace]=useState(false); 

   const handlePlaceOrder = () => {
       setCarts([]);
       setOrderPlace(true)
       processOrder();
    //    console.log('place order')
   }

   const handleRemoveProduct= (productKey) => {
       console.log('Removing product',productKey);

       const newCart = carts.filter(pd=>pd.key!==productKey);
       setCarts(newCart);
       removeFromDatabaseCart(productKey);
   }

    useEffect(() => {
        // cart
      const saveCart= getDatabaseCart();
      const productKeys = Object.keys(saveCart);
       const cartProduct= productKeys.map( key=>{
           const product= fakeData.find(pd=>pd.key === key);
           product.quantity= saveCart[key];
           return product;
       })
     console.log(cartProduct)
        setCarts(cartProduct);
    },[])
     
         //   greetings

let thankYou;
if(orderPlaced){
    thankYou= <img src={giphy} alt=""/>
}

    return (
        <div className='twin-container'>

         <div className='product-container'>
             
           {
               carts.map(pd=> 
               <ReviewItem key={pd.key}
                product={pd} 
                handleRemoveProduct={handleRemoveProduct}>
                </ReviewItem>)
           }
                 {/* order placed */}

                {thankYou};

                {/*  greet    */} 

         </div>
         <div className='cart-container'>
             <Cart cart={carts} >
                 <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
             </Cart>
         </div>
        </div>
    );
};

export default Review;