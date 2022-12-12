import React from 'react';

function Entregas() {
  return (
    <section id="entregas">
      <div className="container">
        <div className="content">
          <div className="subtitulo">CamargoPress</div>
          <div className="titulo">Entregas</div>
          <div className="enfeite"><img src="/assets/img/linha.png" alt="Quem Somos" title="Quem Somos" /></div>
          <div className="entregas dark-side">
            <div className="tipo para-voce">
              <div className="para-quem">Para Você</div>
            </div>
            <div className="respiro"></div>
            <div className="tipo para-empresas">
              <div className="para-quem">Para Empresas</div>
            </div>
            <div className="respiro"></div>
            <div className="tipo simples">
              <div className="para-quem">Simples, ágil e com entrega garantida!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Entregas;
  