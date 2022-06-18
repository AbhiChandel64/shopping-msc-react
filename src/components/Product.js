import React from 'react';

import './Product.css';

const Product = ({ product, addProductToCart, count }) => {
    const { id, title, description, brand, category, price, thumbnail } = product;

    return (
        <div key={id} className="productContainer">
            <img src={thumbnail} alt="" ></img>
            <div>
                <div>
                    <h3>{title}</h3>
                    <h4>{brand} {category}</h4>
                </div>
                Price: <h4>{` ${(price * 77).toLocaleString()} Rs`}</h4>
            </div>

            {count && <h4>Quantity: {count}</h4>}

            {addProductToCart && <button onClick={() => addProductToCart(product)} >Add to cart</button>}
        </div>
    );
}

export default Product;