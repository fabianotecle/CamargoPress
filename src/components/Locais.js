import React from 'react';
import { goWhats } from "./Globais";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Locais() {
  AOS.init();

  return (
    <section id="locais" className="dark-side">
      <div className="fundo">
        <div className="sul-brasil">
          <div className="rosa-dos-ventos">
            <div className="container">
              <div data-aos="fade-up">
                <div className="subtitulo">CamargoPress</div>
                <div className="titulo">Locais de Atendimento</div>
                <div className="enfeite"><img src="/assets/img/linha.png" alt="Locais de Atendimento" title="Locais de Atendimento" /></div>
              </div>
              <div className="locais">
                <div className="porto-alegre" data-aos="fade-right">Porto Alegre</div>
                <div className="grande-porto-alegre" data-aos="fade-right">Grande Porto Alegre</div>
                <div className="litoral-rio-grandense" data-aos="fade-right">Litoral Rio Grandense</div>
                <div className="litoral-sul-catarinense" data-aos="fade-right">Litoral Sul Catarinense</div>
              </div>
              <div className="button">
                <button type="button" onClick={() => goWhats()} data-aos="zoom-out-up">quero uma entrega!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default Locais;
  