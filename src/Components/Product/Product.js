import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
 
    const {img, name, price, ratings, seller} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'> {name} </p>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>   
            <div>
                <button onClick={() => props.handleAddToCart(props.product)} className='button'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;