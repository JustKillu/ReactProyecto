import React from 'react';
import './NavBar.css'; 
import { NavLink } from 'react-router-dom';

const NavBar = ({ darkMode, setNavbarQuery }) => {
  return (
    <nav className={`nav ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <input
        className="input"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setNavbarQuery(e.target.value)} 
      />
      <ul className="links">
        <li><NavLink className="link" activeClassName="active" exact to="/">Inicio</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to="/popular">Populares</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to="/catalogo">Catálogo</NavLink></li>
        <li><NavLink className="link" activeClassName="active" to="/creditos">Creditos</NavLink></li>
      </ul>
    </nav>
  );
};


export default NavBar;
