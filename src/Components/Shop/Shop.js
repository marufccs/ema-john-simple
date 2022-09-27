import React, { useEffect, useState } from 'react';
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
                <h3>This is product container: {products.length}</h3>
            </div>
            <div className="order-summary">
                <h4>This is order summary</h4>
            </div>
        </div>
    );
};

export default Shop;