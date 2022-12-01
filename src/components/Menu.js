import React from 'react';

function Menu() {
  return (
    <section id="menu">
        <div className="container">
          <div className="logo"></div>
          <div className="menu">
              <div className="home area active">Home</div>
              <div className="quem-somos">Quem Somos</div>
              <div className="locais">Locais</div>
              <div className="entregas">Entregas</div>
              <div className="contato">Contato</div>
          </div>
        </div>
    </section>
  );
}

export default Menu;
  