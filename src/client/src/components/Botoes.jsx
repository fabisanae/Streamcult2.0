import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Assistir.css';

const Botoes = () => {
  return (
    <div className="buttons-container">
      <button className="button-plays">Episodio 1</button>
      <button className="button-secondaries">
        <span className="button-symbols">+</span>
      </button>
      <button className="button-secondaries">
        <span className="button-symbols">❤️</span>
      </button>
    
    </div>
  );
}

export default Botoes;
