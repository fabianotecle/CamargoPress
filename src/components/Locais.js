import React from 'react';

function Locais() {
  return (
    <section id="locais" className="dark-side">
      <div className="fundo">
        <div className="sul-brasil">
          <div className="rosa-dos-ventos">
            <div className="container">
              <div className="subtitulo">CamargoPress</div>
              <div className="titulo">Locais de Atendimento</div>
              <div className="enfeite"><img src="/assets/img/linha.png" alt="Locais de Atendimento" title="Locais de Atendimento" /></div>
              <div className="locais">
                <div className="porto-alegre">Porto Alegre</div>
                <div className="grande-porto-alegre">Grande Porto Alegre</div>
                <div className="litoral-rio-grandense">Litoral Rio Grandense</div>
                <div className="litoral-sul-catarinense">Litoral Sul Catarinense</div>
              </div>
              <div className="button">
                <button type="button">quero uma entrega!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default Locais;
  