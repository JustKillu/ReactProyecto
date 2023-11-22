import React, { useState,useContext } from 'react';
import NavBar from './components/navbar';
import SearchMovies from './components/buscarpelis';
import MovieCarousel from './components/carusel';
import CambioModo from './components/dark-light-mode';
import { DarkModeContext } from './DarkModeContext';
import './App.css'; 

const App = () => {
  const [navbarQuery, setNavbarQuery] = useState('');
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <div className={`fondo ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <CambioModo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <NavBar darkMode={darkMode} setNavbarQuery={setNavbarQuery} />
        <MovieCarousel />
        <SearchMovies navbarQuery={navbarQuery} />
      </div>
    </div>
  );
};

export default App;
