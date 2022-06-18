// import logo from './logo.svg';
import { useEffect } from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import { CartState } from '../context/Context';
import './App.css';

const fetchProducts = async () => {
  return fetch('https://dummyjson.com/products')
    .then(res => res.json())
}

function App() {
  const { state, dispatch } = CartState();

  useEffect(() => {
    fetchProducts().then(({ products }) => {
      dispatch({
        type: "ADD_PRODUCTS",
        payload: products
      });
    })
  }, []);

  const getProducts = (products) => {
    return products.map(product => (
      <Product
        id={product.id}
        product={product}
        addProductToCart={
          (product) => {
            dispatch({
              type: "ADD_TO_CART",
              payload: product
            })
          }
        }
      />)
    );
  };


  return (
    <div className="App">
      <header className="header">
        <Header cartCount={state.cart.length} />
      </header>
      <div className='productsContainer'>
        {getProducts(state.products)}
      </div>
    </div>
  );
}

export default App;
