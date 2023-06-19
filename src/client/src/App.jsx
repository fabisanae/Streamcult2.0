import '../src/css/App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3001', 
});




function App() {


  
  return (
    <div className='App'>
      <Header />

      <header className="banner">
        <div className="banner__contents">
          <p className="banner__title">The Office</p>
          <h2 className="banner-description">
            A trama é centrada em torno do gerente da filial, Michael Scott, que tenta ser amigo de seus funcionários enquanto administra a empresa de forma peculiar. A série segue a vida de personagens como Jim Halpert, Pam Beesly, Dwight Schrute, Angela Martin, Kevin Malone e muitos outros enquanto lidam com o cotidiano no ambiente de trabalho.
          </h2>
          <div className="banner__buttons">
            <Link to="/Minhalista" className="custom-button custom-button--centered">
              Minha Lista
            </Link>
            <Link to="/Assistir" className="custom-button custom-button--centered">
              Assistir
            </Link>
          </div>
        </div>
      </header>

      <div className="row">
        <h2>Populares</h2>
        <div className="row__posters">
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/BxbPghQ.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">
                  <Link to="/Assistir" className="link-button">
                    <span className="emoji">&#x25B6;</span>
                  </Link>
                </button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/FFjaXcT.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/BuH86CY.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/EZbDCLs.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/EJKHdcK.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/BxbPghQ.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <img className="row__poster row__posterLarge" src="https://i.imgur.com/BxbPghQ.jpg" alt="banner-fleabag" />
        </div>
      </div>

      <div className="row">
        <h2>Novidades</h2>
        <div className="row__posters">
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/FFjaXcT.jpg.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/DSEqvZS.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/BxbPghQ.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/EJKHdcK.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/FFjaXcT.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/BxbPghQ.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <img className="row__poster row__posterLarge" src="https://i.imgur.com/BxbPghQ.jpg" alt="banner-fleabag" />
        </div>
      </div>

      <div className="row">
        <h2>Estrangeiros</h2>
        <div className="row__posters">
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/FFjaXcT.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/BuH86CY.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/EZbDCLs.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/EJKHdcK.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/DSEqvZS.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/BxbPghQ.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x2B;</button>
              </div>
            </div>
          </div>
          <img className="row__poster row__posterLarge" src="https://i.imgur.com/BxbPghQ.jpg" alt="banner-fleabag" />
        </div>
      </div>
    </div>
  );
}

export default App;
