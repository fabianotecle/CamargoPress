import React from 'react';

function Menu() {
  function setMenuActive(menu) {
    document.querySelectorAll('.item').forEach((item) => {
      item.classList.remove('active');
    });
    document.querySelector(menu).classList.add('active');
  }

  window.addEventListener("scroll", (event) => {
    const scrollY = window.pageYOffset;

    if(scrollY>10) {
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
  