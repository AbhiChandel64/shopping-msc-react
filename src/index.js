import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './containers/App';
import Login from './containers/Login';
import Cart from './containers/Cart';
import reportWebVitals from './reportWebVitals';
import Context from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter >
    </Context>
  </React.StrictMode>
);

reportWebVitals();
