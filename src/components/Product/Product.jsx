import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, price,ratings,seller} = props.product;
     const handelAddToCart = props.handelAddToCart;
     
    

    return (
        <div className='product'>
           <img src={img} alt="" srcset="" />
           <div className='product-info'>
           <h6 className='product-name'>{name}</h6>
           <p className='product-price'>Price: ${price}</p>
           <p className='product-men'>Manufacture: {seller}</p>
           <p className='product-rating'>Rating: {ratings}</p>
           </div>
           
           <button className='btn-cart' onClick={() => handelAddToCart(props.product)}>
            Add to Cart  
            <FontAwesomeIcon icon={ faCartArrowDown} />
           </button>
           
           
        </div>
    );
};

export default Product;