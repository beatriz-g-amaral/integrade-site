import React from 'react';

function CTA() {
  const handleConsultancyClick = () => {
    const phoneNumber = "551150815001";
    const message = "Olá! Gostaria de solicitar uma consultoria.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cta">
      <div className="cta-content">
        <h2>Pronto para levar sua empresa para o próximo nível?</h2>
        <p>Entre em contato conosco hoje e descubra como nossas soluções podem transformar o seu negócio.</p>
        <button className="btn btn-primary" onClick={handleConsultancyClick}>Solicite uma Consultoria →</button>
      </div>
    </section>
  );
}

export default CTA;
