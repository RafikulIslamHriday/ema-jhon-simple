import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Order.css'

const Order = () => {
    const [products , setProduts] = useState([])
    const [cart , setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProduts(data))
    },[])

    const handelAddToCart = (product) => {
         const newCart = [...cart, product]
         setCart(newCart)
     }

    return (
        <div className='order-container'>
            <div className='products-container'>
                 {
                    products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    handelAddToCart = {handelAddToCart}
                    ></Product>)
                 }
            </div>
            <div className='card-container'>
                <h3>Order summery</h3>
                <p>Cart Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Order;