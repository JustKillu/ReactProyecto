import React, { useState, useContext } from 'react';
import NavBar from './components/navbar';
import SearchMovies from './components/buscarpelis';
import CambioModo from './components/dark-light-mode';
import { DarkModeContext } from './DarkModeContext';
import './App.css'; 
import Popular from './components/Popular';

const App = () => {
  const [navbarQuery, setNavbarQuery] = useState('');
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div className={`fondo ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <CambioModo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <NavBar darkMode={darkMode} setNavbarQuery={setNavbarQuery} />
        <SearchMovies navbarQuery={navbarQuery} />
        <Popular/>
      </div>
    </div>
  );
};

export default App;
