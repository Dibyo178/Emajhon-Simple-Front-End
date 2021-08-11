import React from 'react';


const Cart = (props) => {
    //  console.log(props)
  const cart=props.cart;
//  console.log(cart);
//   const total= cart.reduce((total,pd)=>total+pd.price,0)

let total=0;
for(let i=0;i<cart.length;i++) {
  const pd=cart[i];
  total=total+pd.price*pd.quantity;

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

// const tax=(total/10).toFixed(2);
 const tax=(total*0.1).toFixed(2);

// product price show

// let price=0;
// for(let i=0;i<cart.length;i++){
//     const cPrice=cart[i];
//     price=cPrice.price;
// }

const grandTotal=(total+shipping+Number(tax)).toFixed(2)


// const formatNumber = num => {
//     const precision = num.toFixed(2);
//     return Number(precision);
// }

    return (
        <div>
           <h2 >Order Summery</h2> 
           <p>Items Ordered:{cart.length}</p>
           {/* <p>Product Price:${formatNumber(total)}</p> */}
           <p>Product Price:${total.toFixed(2)}</p>
           <p>Tax+Vat:${tax}</p>
           <p>Shipping:${shipping}</p>
           <p>Total Price:${grandTotal}</p>
           <br/>
           {
               props.children
           }
        </div>
    );
};

export default Cart;