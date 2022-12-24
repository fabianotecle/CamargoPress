import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function QuemSomos() {
  AOS.init();

  return (
    <section id="quem-somos">
      <div className="container">
        <div className="content">
          <div data-aos="fade-up">
            <div className="subtitulo">CamargoPress</div>
            <div className="titulo">Quem Somos</div>
            <div className="enfeite"><img src="/assets/img/linha.png" alt="Quem Somos" title="Quem Somos" /></div>
          </div>
          <div className="texto">
            <p data-aos="fade-up">A CamargoPress é uma empresa com mais de 7 anos de trajetória, tradição e excelência no setor de transportes, e ainda por cima, com os clientes mais satisfeitos da região sul do Brasil.</p>

            <p data-aos="fade-up">O serviço Encomendas Expressas assina o nosso nome, traduzindo a agilidade com que pensamos e trabalhamos diariamente, atendendo as necessidades em Porto Alegre, grande Porto Alegre, Litoral Rio Grandense e Sul do Litoral Catarinense com alto padrão de qualidade no serviço prestado.</p>

            <p data-aos="fade-up">CamargoPress - Piscou, está ENTREGUE!</p>
          </div>
          <div className="pode-confiar" data-aos="fade-up">Sua entrega em ótimas mãos!</div>
        </div>
        <div className="cliente-feliz"><img src="/assets/img/cliente-feliz.jpg" alt="Cliente Feliz" title="Cliente Feliz" data-aos="fade-right" /> <img src="/assets/img/entregador1.jpg" alt="Entregador Gentil" title="Entregador Gentil" data-aos="fade-right" className="entregador-mobile" /></div>
        <div className="entregador"><img src="/assets/img/entregador1.jpg" alt="Entregador Gentil" title="Entregador Gentil" data-aos="fade-right" /></div>
      </div>
    </section>
  );
}

export default QuemSomos;
  