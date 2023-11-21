import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import { DarkModeProvider } from '../DarkModeContext';
import Popular from '../populares';
import Catalogo from '../catalogo';
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

function CatalogoWrapper() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.title = 'Catálogo';
  }, []);

  return <Catalogo darkMode={darkMode} toggleDarkMode={toggleDarkMode} />;
}

function Main() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppWrapper />} />
          <Route path="/popular" element={<PopularWrapper />} />
          <Route path="/catalogo" element={<CatalogoWrapper />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}


export default Main;
