import React from 'react';
import '../App.css';

function CambioModo({ darkMode, toggleDarkMode }) {
  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button onClick={toggleDarkMode}>
        Cambiar a {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </div>
  );
}

export default CambioModo;
