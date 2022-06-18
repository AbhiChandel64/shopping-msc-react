import React from 'react';
import Product from '../components/Product';
import { CartState } from '../context/Context';


import './Cart.css';

const Cart = () => {

    const { state } = CartState();

    const getProducts = (products) => {
        console.log(products);
        const productById = products.reduce((acc, product) => {
            if (!(product.id in acc)) {
                acc[product.id] = { ...product, qty: 1 };
            } else {
                acc[product.id] = { ...product, qty: acc[product.id].qty + 1 };
            }
            return acc;
        }, {});

        return Object.values(productById).map((product) => (
            <Product
                id={product.id}
                product={product}
                count={product.qty}
            />
        ));
    };


    return (
        <div className='cartContainer'>
            {getProducts(state.cart)}
        </div>
    );
}

export default Cart;