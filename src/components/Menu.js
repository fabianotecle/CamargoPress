import React from 'react';

function Menu() {
  return (
    <section id="menu">
        <div className="container">
          <div className="logo"><img src="/assets/img/logo.png" alt="CamargoPress Transportadora" title="CamargoPress Transportadora" /></div>
          <div className="menu">
            <div className="items">
              <div className="item home active">Home</div>
              <div className="item quem-somos">Quem Somos</div>
              <div className="item locais">Locais</div>
              <div className="item entregas">Entregas</div>
              <div className="item contato">Contato</div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Menu;
  