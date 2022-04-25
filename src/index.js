import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList'
import Product from './pages/Product';
import Register from './pages/Register'
import Login from './pages/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <ProductList /> */}
    {/* <Product /> */}
    {/* <Register /> */}
    <Login />
  </React.StrictMode>
);
