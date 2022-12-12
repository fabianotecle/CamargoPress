import React from 'react';
import Menu from "./Menu";

function Header() {
  return (
    <section id="header" className="dark-side">
      <Menu />
      <div className="container">
        <div className="banner">
          <div className="texto texto1">
            Precisando de uma ENTREGA RÁPIDA, PRÁTICA E SEGURA aqui no Rio Grande do Sul?
          </div>
          <div className="texto texto2">
            Então você chegou ao lugar certo!!!
          </div>
          <div className="texto texto3">
            Basta chamar e nós iremos até onde você estiver e realizamos a sua entrega!!!
          </div>
          <div className="texto texto4">
            CamargoPress<br />
            Piscou, está ENTREGUE!
          </div>
          <div className="carro">
            <img src="/assets/img/doblo.webp" alt="" title="" />
          </div>
        </div>
        <div className="contador">
          <div className="c1 active">1</div>
          <div className="c2">2</div>
          <div className="c3">3</div>
          <div className="c4">4</div>
        </div>
        <div className="button">
          <button type="button">quero uma entrega!</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
