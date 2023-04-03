import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Order.css'
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Order = () => {
    const [products , setProduts] = useState([])
    const [cart , setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then (data => setProduts(data))
    },[])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const svaedCart = []
        for(const id in storedCart){
            const addedProduct = products.find( product => product.id === id)
            
           if(addedProduct){
            const quantity = storedCart[id]
            addedProduct.quantity= quantity
            svaedCart.push(addedProduct)
           }
             
        }
        setCart(svaedCart)
    },[products])

    const handelAddToCart = (product) => {
         let newCart = []
         const exists = cart.find(pd => pd.id === product.id)
         if(!exists){
            product.quantity = 1
            newCart = [...cart, product]
         }else{
            exists.quantity = exists.quantity + 1
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart =[...remaining, exists]
         }



         setCart(newCart)
         addToDb(product.id)
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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;