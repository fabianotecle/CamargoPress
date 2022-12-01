import React from 'react';

function Footer() {
  return (
    <section id="footer">
        <div className="empresa">CamargoPress - Transportes</div>
        <div className="copyright">&copy; Copyright {new Date().getFullYear()} - Todos os direitos reservados</div>
    </section>
  );
}

export default Footer;
  