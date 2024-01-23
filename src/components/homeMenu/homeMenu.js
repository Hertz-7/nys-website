// NavigationMenu.jsx
import React from 'react';
import './homeMenu.css'; // Import the CSS file here

const NavigationMenu = () => {
  return (
    <div className="nav-menu">
      <h1 className="nav-title">Discover our Projects</h1>
      <div className='nav-links'>
        <a href="#houses-villas" className="nav-link">Houses & Villas</a>
        <a href="#apartments" className="nav-link">Apartments</a>
        <a href="#buildings" className="nav-link">Buildings</a>
        <a href="#corporate" className="nav-link">Corporate</a>
        <a href="#all-projects" className="nav-link">All Projects</a>
      </div>
    </div>
  );
};

export default NavigationMenu;
