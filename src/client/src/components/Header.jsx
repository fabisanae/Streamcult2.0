import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css'

const Header = () => {
  return (
    <div className="nav" id="nav">
      <Link to="/">
        <img className="nav__logo" src="https://i.imgur.com/YzJJCY2.png" alt="logo-streamcult" />
      </Link>
      <div className="nav__avatar-container">
        <img className="nav__avatar" src="https://i.imgur.com/ppmNkq2.png" alt="avatar" />
        <div className="dropdown-menu">
          <div className="dropdown-option">
            <Link to="/Minhalista">Minha Lista <span className="emoji">❤️</span></Link>
          </div>
          <div className="dropdown-option">
            Configurações <span className="emoji">⚙️</span>
          </div>
          <div className="dropdown-option">Fale conosco</div>
          <div className="dropdown-option">
            <Link to="/login">Sair</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
