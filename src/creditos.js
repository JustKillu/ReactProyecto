import NavBar from './components/navbar';
import SearchMovies from './components/buscarpelis';
import React, { useState, useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import Crédito from './components/creditos';
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
        <Crédito />
      </div>
    
    </div>
  );
};

export default App;
