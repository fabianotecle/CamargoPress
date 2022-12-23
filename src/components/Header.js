import React from 'react';
import Menu from "./Menu";
import { goWhats } from "./Globais";

function Header() {
  let activeBanner = 1;
  const allBanners = 4;

  const changeBanner = (numBanner) => {
    activeBanner = numBanner;

    if(activeBanner>allBanners) {
      activeBanner = 1;
    }

    setBannerInitState();

    document.querySelectorAll('.c-banner').forEach(element => {
      if(element.getAttribute('id') === 'c' + activeBanner) {
        element.classList.add('active');
        document.querySelector('.texto' + activeBanner).classList.add('active');
        document.querySelector('.texto' + activeBanner).style.display = 'block';
      }
    });
  }

  const setBannerInitState = () => {
    document.querySelectorAll('.texto-banner').forEach(texto => {
      texto.style.display = 'none';
      texto.classList.remove('active');
    });

    const carro = document.querySelector('.carro');
    carro.innerHTML = '<img src="/assets/img/doblo.webp" className="doblo" alt="" title="" />';

    document.querySelectorAll('.c-banner').forEach(element => {
      element.classList.remove('active');
    });
  }

  setInterval(function () {
    activeBanner = activeBanner + 1;
    changeBanner(activeBanner);
  }, 7500);

  return (
    <section id="header" className="dark-side">
      <Menu />
      <div className="container">
        <div className="banner">
          <div className="texto texto-banner texto1 active">
            Precisando de uma ENTREGA RÁPIDA, PRÁTICA E SEGURA aqui no Rio Grande do Sul?
          </div>
          <div className="texto texto-banner texto2">
            Então você chegou ao lugar certo!!!
          </div>
          <div className="texto texto-banner texto3">
            Basta chamar e nós iremos até onde você estiver e realizamos a sua entrega!!!
          </div>
          <div className="texto texto-banner texto4">
            CamargoPress<br />
            Piscou, está ENTREGUE!
          </div>
          <div className="carro active">
            <img src="/assets/img/doblo.webp" className="doblo" alt="" title="" />
          </div>
        </div>
        <div className="contador">
          <div id="c1" className="c-banner active" onClick={() => changeBanner(1)}>1</div>
          <div id="c2" className="c-banner" onClick={() => changeBanner(2)}>2</div>
          <div id="c3" className="c-banner" onClick={() => changeBanner(3)}>3</div>
          <div id="c4" className="c-banner" onClick={() => changeBanner(4)}>4</div>
        </div>
        <div className="button" data-aos="zoom-out-up">
          <button type="button" onClick={() => goWhats()}>quero uma entrega!</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
