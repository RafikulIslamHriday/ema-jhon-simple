import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    console.log(cart,"cart");

    let total =0;
    let shippingTotal = 0;
    let quantity = 0
    for(const product of cart){
        total= total+ product.price * product.quantity
        shippingTotal = shippingTotal + product.shipping
        quantity = quantity+ product.quantity
    }
  const tax = total*7/100
  const grandTotal = total+ shippingTotal+ tax
    return (
        <div className='cart'>
             <h4 className='cart-titel'>Order summery</h4>
            <div className='cart-info'>
            <p>Cart Items: {quantity}</p>
            <p>Total Price: ${total}</p>
             <p>Total Charge: ${shippingTotal}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
             <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            </div>
            
                <button>Clear Caet</button>
                <button>Review Order</button>
            
        </div>
    );
};

export default Cart;