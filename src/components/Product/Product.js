import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
// FaShoppingCart
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock ,key} = props.product;
  // console.log(props.product.key);
  // console.log(props)
  return (
    
      <div className="product">
        <div>
          {/* <img src={props.product.img} alt=""  /> */}
          <img src={img} alt="" />
        </div>
        <div>
          {/* <h4>{props.product.name}</h4> */}
          {/* <h4 className="product-name">{name}</h4> */}
          <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
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

    { props.showAddToCart && <button 
      onClick={()=>props.handleAddProduct(props.product)} //parameter pass korle ()=>{} use kora labe
      className='main-button'>
        <FaShoppingCart/>  
        Add to cart
        </button>}
        </div>
      </div>
    
  );
};

export default Product;
