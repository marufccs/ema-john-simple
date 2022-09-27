import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product
                         product = {product}
                         key = {'id'}
                    ></Product>)
                }
            </div>
            <div className="order-summary">
                <h4>This is order summary</h4>
            </div>
        </div>
    );
};

export default Shop;