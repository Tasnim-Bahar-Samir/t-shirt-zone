import React from 'react';
import './Product.css'

const Product = ({product,handleOrder}) => {
    const {picture,name,price} = product;
  return (
    <div className='product'>
        <img src={picture} alt="" />
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <button onClick={()=>handleOrder(product)}>Order</button>
    </div>
  )
}

export default Product