import React from 'react';
import { goWhats } from "./Globais";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProntoComecar() {
  AOS.init();

  return (
    <section id="pronto-comecar">
      <div className="container dark-side">
        <div className="pronto-comecar" data-aos="zoom-out-up">Pronto para começar?</div>
        <div className="carro" data-aos="fade-right"><img src="assets/img/doblo.webp" alt="Entregador CamargoPress" title="Entregador CamargoPress" /></div>
        <div className="entregador" data-aos="zoom-in-up"><img src="assets/img/entregador3.webp" alt="Entregador CamargoPress" title="Entregador CamargoPress" /></div>
        <div className="celular" data-aos="zoom-in-up" onClick={() => goWhats()}><img src="assets/img/celular.webp" alt="Clique ou ligue agora! (51) 99730-9818" title="Clique ou ligue agora! (51) 99730-9818" /></div>
      </div>
      <div className="container container-mobile dark-side">
        <div className="pronto-comecar">Pronto para começar?</div><div className="entregador" data-aos="zoom-in-up"><img src="/assets/img/entregador3.webp" alt="Entregador CamargoPress" title="Entregador CamargoPress" /></div>
        <div className="carro"><img src="assets/img/doblo.webp" alt="Entregador CamargoPress" title="Entregador CamargoPress" /></div>
        <div className="entregador"><img src="assets/img/entregador3.webp" alt="Entregador CamargoPress" title="Entregador CamargoPress" /></div>
        <div className="celular" onClick={() => goWhats()}><img src="assets/img/celular.webp" alt="Clique ou ligue agora! (51) 99730-9818" title="Clique ou ligue agora! (51) 99730-9818" /></div>
      </div>
    </section>
  );
}

export default ProntoComecar;
