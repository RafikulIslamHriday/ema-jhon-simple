import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Order.css'

const Order = () => {
    const [products , setProduts] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProduts(data))
    },[])

    const handelAddToCart = (product) => {
        console.log(product.id);
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
            </div>
        </div>
    );
};

export default Order;