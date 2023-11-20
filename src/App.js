import React, { useState } from 'react';
import NavBar from './components/navbar';
import SearchMovies from './components/buscarpelis';
import MovieCarousel from './components/carusel';
import './App.css'; 

const App = () => {
  const [navbarQuery, setNavbarQuery] = useState('');

  return (
    <div>
      <div className="fondo">
        <NavBar setNavbarQuery={setNavbarQuery} />
        <MovieCarousel />
        <SearchMovies navbarQuery={navbarQuery} />
      </div>
    </div>
  );
};

export default App;
