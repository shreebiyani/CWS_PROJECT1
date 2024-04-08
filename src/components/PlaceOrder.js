// PlaceOrder.js
import React, { useState } from 'react';

const PlaceOrder = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [message, setMessage] = useState('');

  const handleItemSelect = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handlePlaceOrder = () => {
    setMessage('Your order has been placed!');
    setSelectedItems([]);
  };

  return (
    <div className="place-order">
      <h2>Place Your Order</h2>
      <p>Select items from the menu to add to your order:</p>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Price (₹)</th>
            <th>Add to Order</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Misal Pav</td>
            <td>A spicy curry made of sprouts, served with pav (bread).</td>
            <td>150</td>
            <td><button onClick={() => handleItemSelect('Misal Pav')}>Add</button></td>
          </tr>
          <tr>
            <td>Pav Bhaji</td>
            <td>A spicy mashed vegetable curry served with buttered bread rolls.</td>
            <td>200</td>
            <td><button onClick={() => handleItemSelect('Pav Bhaji')}>Add</button></td>
          </tr>
          <tr>
            <td>Puran Poli</td>
            <td>A sweet flatbread filled with a mixture of chana dal, jaggery, and spices.</td>
            <td>180</td>
            <td><button onClick={() => handleItemSelect('Puran Poli')}>Add</button></td>
          </tr>
          <tr>
            <td>Batata Vada</td>
            <td>Deep-fried potato dumplings served with chutney.</td>
            <td>100</td>
            <td><button onClick={() => handleItemSelect('Batata Vada')}>Add</button></td>
          </tr>
          <tr>
            <td>Thalipeeth</td>
            <td>A multigrain pancake made with various flours and spices.</td>
            <td>120</td>
            <td><button onClick={() => handleItemSelect('Thalipeeth')}>Add</button></td>
          </tr>
        </tbody>
      </table>
      <h3>Selected Items:</h3>
      <ul className="selected-items">
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Place Order</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PlaceOrder;


