import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
// FaShoppingCart
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  console.log(props);
  return (
    
      <div className="product">
        <div>
          {/* <img src={props.product.img} alt=""  /> */}
          <img src={img} alt="" />
        </div>
        <div>
          {/* <h4>{props.product.name}</h4> */}
          <h4 className="product-name">{name}</h4>
          <br />
          <p>
            <small>by:{seller}</small>
          </p>

          <p>
            <b>${price}</b>
          </p>
          <br />
          <p>
            <small>Only:{stock} left in stock -- order soon</small>
          </p>

          <button 

          onClick={()=>props.handleAddProduct(props.product)} //parameter pass korle ()=>{} use kora labe
          className='main-button'>
            <FaShoppingCart/>  
            Add to cart
            </button>
        </div>
      </div>
    
  );
};

export default Product;
