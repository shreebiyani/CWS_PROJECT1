import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Menu from './components/Menu';
import PlaceOrder from './components/PlaceOrder';
import AboutRestaurant from './components/AboutRestaurant';
import './App.css';

const App = () => {
  return (
    <>
      <div className='container'>
        <h1 className='restaurant-name'>Jassi Da Dhaba</h1>
        
        <h3>Please click on the suitable options</h3>

        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to='/Menu'>Menu</Link></li>
              <li><Link to='/PlaceOrder'>Place Order</Link></li>
              <li><Link to='/AboutRestaurant'>About Restaurant</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/Menu" element={<Menu  />} />
            <Route path="/PlaceOrder" element={<PlaceOrder />} />
            <Route path="/AboutRestaurant" element={<AboutRestaurant />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
