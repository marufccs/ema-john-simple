import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, price, quantity, ratings, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'> {name} </p>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>   
            <div>
                <button className='button'>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;