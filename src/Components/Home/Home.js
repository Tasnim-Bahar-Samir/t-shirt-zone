import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const data= useLoaderData();
    const [products,setProducts] = useState(data);
    const handleOrder = (id)=>{
        console.log(id)
    }
  return (
    <div>
       <div className="home-container">
        <div className="products-container">
            {
                products.map(product => <Product key={product.index} product ={product} handleOrder ={handleOrder}/>)
            }
        </div>
        <div className="cart-container">
            <h2>cart</h2>
        </div>
       </div>
    </div>
  )
}

export default Home