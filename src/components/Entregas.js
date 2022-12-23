import React from 'react';
import { goWhats } from "./Globais";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Entregas() {
  AOS.init();

  return (
    <section id="entregas">
      <div className="container">
        <div className="content">
          <div data-aos="fade-up">
            <div className="subtitulo">CamargoPress</div>
            <div className="titulo">Entregas</div>
            <div className="enfeite"><img src="/assets/img/linha.png" alt="Quem Somos" title="Quem Somos" /></div>
          </div>
          <div className="entregas dark-side">
            <div className="tipo para-voce" data-aos="fade-up" onClick={() => goWhats('Olá CamargoPress, gostaria de cotar uma entrega para pessoa física!')}>
              <div className="para-quem">Para Você</div>
            </div>
            <div className="tipo para-empresas" data-aos="fade-up" onClick={() => goWhats('Olá CamargoPress, gostaria de cotar uma entrega para pessoa jurídica!')}>
              <div className="para-quem">Para Empresas</div>
            </div>
            <div className="tipo simples" data-aos="fade-up"onClick={() => goWhats()}>
              <div className="para-quem">Simples, ágil e com entrega garantida!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Entregas;
  