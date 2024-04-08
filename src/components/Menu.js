  import React from 'react';
  import './Menu.css'; 

  const Menu = () => {
    return (
      <div className="menu">
        <h2>Menu</h2>
        <table>
          <thead>
            <tr>
              <th>Dish</th>
            
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {/* Maharashtrian Menu */}
            <tr>
              <td colSpan="3" className="category">Maharashtrian Menu</td>
            </tr>
            <tr>
              <td>Misal Pav</td>
              
              <td>150</td>
            </tr>
            <tr>
              <td>Pav Bhaji</td>
          
              <td>200</td>
            </tr>
            <tr>
              <td>Puran Poli</td>
              
              <td>180</td>
            </tr>
            <tr>
              <td>Batata Vada</td>
          
              <td>100</td>
            </tr>
            <tr>
              <td>Thalipeeth</td>
            
              <td>120</td>
            </tr>
            
            {/* Punjabi Menu */}
            <tr>
              <td colSpan="3" className="category">Punjabi Menu</td>
            </tr>
            <tr>
              <td>Paneer Tikka</td>
          
              <td>220</td>
            </tr>
            <tr>
              <td>Butter Chicken</td>
            
              <td>250</td>
            </tr>
            <tr>
              <td>Chole Bhature</td>
  
              <td>180</td>
            </tr>
            
            {/* South Indian Menu */}
            <tr>
              <td colSpan="3" className="category">South Indian Menu</td>
            </tr>
            <tr>
              <td>Idli Sambhar</td>
        
              <td>100</td>
            </tr>
            <tr>
              <td>Dosa</td>
        
              <td>120</td>
            </tr>
            <tr>
              <td>Uttapam</td>
        
              <td>150</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  export default Menu;




