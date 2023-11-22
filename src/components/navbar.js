import React, { useState } from 'react';
import './NavBar.css'; 
import { NavLink } from 'react-router-dom';

const NavBar = ({ darkMode, setNavbarQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`nav ${darkMode ? 'dark-mode' : 'light-mode'} ${isOpen ? 'open' : ''}`}>
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span>☰</span>
      </button>
      <input
        className="input"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setNavbarQuery(e.target.value)} 
      />
      <ul className={`links ${isOpen ? 'open' : ''}`}>
        <li><NavLink className="link" activeClassName="active" exact to="/">Inicio</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to="/popular">Populares</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to="/catalogo">Catálogo</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to="/creditos">Creditos</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
