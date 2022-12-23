import React from 'react';
import { goWhats } from "./Globais";
import { FaWhatsapp } from 'react-icons/fa';

function Whatsapp() {
  return (
    <section id="whatsapp">
      <div className="container">
        <div className="icon"><FaWhatsapp /></div>
        <div className="phone" onClick={() => { goWhats() }}>(51) 99730-9818</div>
      </div>
      <div className="balao-seta"></div>
    </section>
  );
}

export default Whatsapp;