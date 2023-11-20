import React from 'react';
import './NavBar.css'; 

const NavBar = ({ setNavbarQuery }) => {
  return (
    <nav className="nav">
      <input
        className="input"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setNavbarQuery(e.target.value)} 
      />
      <ul className="links">
        <li><a className="link" href="/">Inicio</a></li>
        <li><a className="link" href="/populares">Populares</a></li>
        <li><a className="link" href="/catalogo">Catálogo</a></li>
        <li><a className="link" href="/creditos">Creditos</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
