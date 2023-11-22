import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import { DarkModeProvider } from '../DarkModeContext';
import Popular from '../populares';
import Catalogo from '../catalogo';
import Crédito from '../creditos';
import Peliculas from '../infopeli';
import MovieDetails from './informacion';
import { useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext';

function AppWrapper() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.title = 'Inicio';
  }, []);

  return <App darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}

function PopularWrapper() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.title = 'Populares';
  }, []);

  return <Popular darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}


function InfoPeliWrapper() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.title = 'Informacion';
  }, []);

  return <Peliculas darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}
function CatalogoWrapper() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.title = 'Catálogo';
  }, []);

  return <Catalogo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}

function CreditosWrapper() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.title = 'Créditos';
  }, []);

  return <Crédito darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}

function Main() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppWrapper />} />
          <Route path="/popular" element={<PopularWrapper />} />
          <Route path="/catalogo" element={<CatalogoWrapper />} />
          <Route path="/creditos" element={<CreditosWrapper />} />
          <Route path="/info-pelicula/:id" element={<InfoPeliWrapper />} component={MovieDetails} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}


export default Main;
