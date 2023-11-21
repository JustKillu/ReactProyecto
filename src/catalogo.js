import NavBar from './components/navbar';
import SearchMovies from './components/buscarpelis';
import Catalogo from './components/catalogo'
import React, { useState, useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import CambioModo from './components/dark-light-mode';
import './App.css';

const App = () => {
  const [navbarQuery, setNavbarQuery] = useState('');
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div className={`fondo ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <CambioModo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <NavBar darkMode={darkMode} setNavbarQuery={setNavbarQuery} />
        <SearchMovies navbarQuery={navbarQuery} />
        <Catalogo />
      </div>
    </div>
  );
};

export default App;
