import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';



const Minhalista = () => {
  return (
    <>
    <Header />

      <div className="banner-mylist"></div>

      <div className="row">
        <h2>Minha Lista</h2>
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
                <button className="overlay-button">&#x274C;</button>
              </div>
            </div>
          </div>

          <div className="row__poster">
            <img className="row__posterLarge" src="https://i.imgur.com/FFjaXcT.jpg" alt="banner-fleabag" />
            <div className="overlay">
              <div className="overlay-content">
                <button className="overlay-button">&#x25B6;</button>
                <button className="overlay-button">&#x274C;</button>
              </div>
            </div>
          </div>
          <img className="row__poster row__posterLarge" src="https://i.imgur.com/BuH86CY.jpg" alt="banner-fleabag" />
          <img className="row__poster row__posterLarge" src="https://i.imgur.com/EZbDCLs.jpg" alt="banner-fleabag" />
          <img className="row__poster row__posterLarge" src="https://i.imgur.com/EJKHdcK.jpg" alt="banner-fleabag" />
          <img className="row__poster row__posterLarge" src="https://i.imgur.com/FFjaXcT.jpg.jpg" alt="banner-fleabag" />
          <img className="row__poster row__posterLarge" src="https://i.imgur.com/DSEqvZS.jpg" alt="banner-fleabag" />
          <img className="row__poster row__posterLarge" src="https://i.imgur.com/BxbPghQ.jpg" alt="banner-fleabag" />
        </div>
      </div>

      <script>
        {`
        const nav = document.getElementById('nav');
        window.addEventListener('scroll', () => {
          if (window.scrollY >= 80) {
            nav.classList.add('nav__black');
          } else {
            nav.classList.remove('nav__black');
          }
        });
        `}
      </script>
    </>
  );
};

export default Minhalista;
