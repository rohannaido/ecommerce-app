import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList'
import Product from './pages/Product';
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { useSelector } from 'react-redux';


const App = () => {
    const user = useSelector(state => state.user.currentUser);
    // let navigate = useNavigate();

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* // {
          //   user ? <Home /> : <Navigate to="/login" />
          // } 
          //   /> */}
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    );
}

export default App;