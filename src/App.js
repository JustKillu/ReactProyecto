import React, { useEffect, useState } from 'react';
import NavBar from './components/navbar';
import SearchMovies from './components/buscarpelis';
import MovieCarousel from './components/carusel';
import CambioModo from './components/dark-light-mode';
import './App.css'; 

const App = () => {
  const [navbarQuery, setNavbarQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

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
