import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    console.log(props)
    const {img,name,quantity,price,key}=props.product;
    return (
        <div className="pd">
           <h4 style={{color:'blue'}}>{name}</h4>
            <img src={img} alt="" />
            <h6><b>Quantity:{quantity}</b></h6>
            <h5 style={{color: 'red'}}><span style={{color: 'green'}}>price</span>:${price} </h5>
            <br/>
            <button className="main-button" onClick={()=>props.handleRemoveProduct(key)}><b>Remove</b></button>
        </div>
    );
};

export default ReviewItem;