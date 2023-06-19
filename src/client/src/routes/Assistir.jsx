import React from 'react';
import '../css/Assistir.css';
import Header from '../components/Header';
import Botoes from '../components/Botoes';

const Assistir = () => {
  return (
    <>
    <div className="App">
    <Header />

<main class="intro">
  <div>
    <h1>The Office</h1>
    <p class="film-description">Na primeira temporada de The Office, o gerente regional da Dunder Mifflin, Michael Scott (Steve Carell)</p>

 <Botoes/>

  </div>
  <div class="banner-assistir">
    <img src="https://i.imgur.com/GXGdQ2U.jpg" alt="" />
  </div>
</main>

      
<ul class="locais">

  <li class="locais-item">
    <img src="https://i.imgur.com/Pn33pPt.png" alt="Episódio 1" />
    <div>
      <h2>T3 EP.1 — Gay Witch Hunt</h2>
      <p>
        20 de setembro de 2006<br />
        22min<br />
        Não recomendado para menores de 12 anos<br />
        O pessoal da Dunder Mifflin lida com algumas surpresas no escritório logo depois da Noite no Cassino.
      </p>
    
    </div>
  </li>
  
  <li class="locais-item">
  <img src="https://i.imgur.com/jAcuGFH.png" alt="Episódio 1" />
    <div>
      <h2>T3 EP.1 — Gay Witch Hunt</h2>
      <p>
        20 de setembro de 2006<br />
        22min<br />
        Não recomendado para menores de 12 anos<br />
        O pessoal da Dunder Mifflin lida com algumas surpresas no escritório logo depois da Noite no Cassino.
      </p>
   
    </div>
  </li>
  <li class="locais-item">
  <img src="https://i.imgur.com/XC7yE9A.png" alt="Episódio 1" />
    <div>
      <h2>T3 EP.1 — Gay Witch Hunt</h2>
      <p>
        20 de setembro de 2006<br />
        22min<br />
        Não recomendado para menores de 12 anos<br />
        O pessoal da Dunder Mifflin lida com algumas surpresas no escritório logo depois da Noite no Cassino.
      </p>
    
    </div>
  </li>
  <li class="locais-item">
  <img src="https://i.imgur.com/puJEco1.png" alt="Episódio 1" />
    <div>
      <h2>T3 EP.1 — Gay Witch Hunt</h2>
      <p>
        20 de setembro de 2006<br />
        22min<br />
        Não recomendado para menores de 12 anos<br />
        O pessoal da Dunder Mifflin lida com algumas surpresas no escritório logo depois da Noite no Cassino.
      </p>
  
    </div>
  </li>
</ul>

      
 
    </div>
    </>
  );


}
export default Assistir;