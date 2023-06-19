import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';



function Login() {
  useEffect(() => {
    const formSignin = document.querySelector('#signin');
    const formSignup = document.querySelector('#signup');
    const btnColor = document.querySelector('.btnColor');

    document.querySelector('#btnSignin').addEventListener('click', () => {
      formSignin.style.left = '25px';
      formSignup.style.left = '450px';
      btnColor.style.left = '0px';
    });

    document.querySelector('#btnSignup').addEventListener('click', () => {
      formSignin.style.left = '-450px';
      formSignup.style.left = '25px';
      btnColor.style.left = '110px';
    });
  }, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Obtenha os valores dos campos de login
    const email = document.querySelector('#signin input[type="text"]').value;
    const password = document.querySelector('#signin input[type="password"]').value;

    const credentials = { email, password };

    // Chamada à API para autenticar o usuário
    loginUser(credentials)
      .then((response) => {
        // Lógica de manipulação da resposta da API
        console.log(response.data);
      })
      .catch((error) => {
        // Lógica de tratamento de erros
        console.error(error);
      });
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    // Obtenha os valores dos campos de cadastro
    const email = document.querySelector('#signup input[type="text"]').value;
    const password = document.querySelector('#signup input[type="password"]').value;

    const userData = { email, password };

    // Chamada à API para criar um novo usuário
    createUser(userData)
      .then((response) => {
        // Lógica de manipulação da resposta da API
        console.log(response.data);
      })
      .catch((error) => {
        // Lógica de tratamento de erros
        console.error(error);
      });
  };

  return (
    <div className="login-page">
      <div className="header">
        <Link to="/">
          <img className="logo" src="https://i.imgur.com/YzJJCY2.png" alt="logo-streamcult" />
        </Link>
        <p className="frase">Saia do tédio e assista sua série preferida onde quer que esteja!</p>
      </div>

      <div className="container">
        <div className="buttonsForm">
          <div className="btnColor"></div>
          <button id="btnSignin">Login</button>
          <button id="btnSignup">Cadastro</button>
        </div>

        <form id="signin" onSubmit={handleLoginSubmit}>
          <input type="text" placeholder="Email" required />
          <i className="fas fa-envelope iEmail"></i>
          <input type="password" placeholder="Senha" required />
          <i className="fas fa-lock iPassword"></i>
          <div className="divCheck">
            <input type="checkbox" />
            <span className="spann">Lembrar senha</span>
          </div>
          <button type="submit">Entrar</button>
        </form>

        <form id="signup" onSubmit={handleSignupSubmit}>
          <input type="text" placeholder="Email" required />
          <i className="fas fa-envelope iEmail"></i>
          <input type="password" placeholder="Insira aqui a senha" required />
          <i className="fas fa-lock iPassword"></i>
          <input type="password" placeholder="Confirmar senha" required />
          <i className="fas fa-lock iPassword2"></i>
          <div className="divCheck">
            <input type="checkbox" required />
            <span className="spann">Termos</span>
          </div>
          <button type="submit">Cadastre-se</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
