import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const cart=props.cart;
  console.log(cart);
//   const total= cart.reduce((total,pd)=>total+pd.price,0)

let total=0;
for(let i=0;i<cart.length;i++) {
  const pd=cart[i];
  total+=pd.price;
}

// shipping

let shipping=0;

if(total>35){
    shipping=0;
}
else if(total>15){
    shipping=4.99
}
else if(total>0){
    shipping=12.99;
}

// tax

// const tax=total/10;
const tax=total*0.1;

// product price show

let price=0;
for(let i=0;i<cart.length;i++){
    const cPrice=cart[i];
    price=cPrice.price;
}

    return (
        <div>
           <h2>Order Summery</h2> 
           <p>Items Ordered:{cart.length}</p>
           <p>Product Price:${price}</p>
           <p>Tax+Vat:${tax.toFixed(2)}</p>
           <p>Shipping:${shipping}</p>
           <p>Total Price:${(total+shipping+tax).toFixed(2)}</p>
        </div>
    );
};

export default Cart;