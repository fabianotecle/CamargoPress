import React from 'react';
import { goWhats } from "./Globais";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Menu() {
  AOS.init();

  function setMenuActive(menu) {
    document.querySelectorAll('.item').forEach((item) => {
      item.classList.remove('active');
    });
    document.querySelector(menu).classList.add('active');
  }

  window.addEventListener("scroll", (event) => {
    const scrollY = window.pageYOffset;

    if(scrollY>100) {
      document.getElementById('menu').classList.add('menu-fixed');
    } else {
      document.getElementById('menu').classList.remove('menu-fixed');
      setMenuActive('.item.home');
    }

    let element = null;

    const AJUST = 300;
    
    element = document.getElementById('quem-somos');
    const quemSomos = element.getBoundingClientRect().y - AJUST;
    if(quemSomos<0) {
      setMenuActive('.item.quem-somos');
    }

    element = document.getElementById('locais');
    const locais = element.getBoundingClientRect().y - AJUST;
    if(locais<0) {
      setMenuActive('.item.locais');
    }

    element = document.getElementById('entregas');
    const entregas = element.getBoundingClientRect().y - AJUST;
    if(entregas<0) {
      setMenuActive('.item.entregas');
    }

    element = document.getElementById('pronto-comecar');
    const contato = element.getBoundingClientRect().y - AJUST;
    if(contato<0) {
      setMenuActive('.item.contato');
    }
  });

  const scrollTo = (id, heightDiscount) => {
    const element = document.getElementById(id);
    const y = element.offsetTop - heightDiscount;
    window.scrollTo({top: y, behavior: 'smooth'});
  };

  return (
    <section id="menu">
        <div className="container" data-aos="zoom-out">
          <div className="logo" onClick={() => scrollTo('header', 70)}><img src="/assets/img/logo.png" alt="CamargoPress Transportadora" title="CamargoPress Transportadora" /></div>
          <div className="menu">
            <div className="items">
              <div className="item home active" onClick={() => scrollTo('header', 70)}>Home</div>
              <div className="item quem-somos" onClick={() => scrollTo('quem-somos', 35)}>Quem Somos</div>
              <div className="item locais" onClick={() => scrollTo('locais', 30)}>Locais</div>
              <div className="item entregas" onClick={() => scrollTo('entregas', 10)}>Entregas</div>
              <div className="item contato" onClick={() => goWhats()}>Contato</div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Menu;
  