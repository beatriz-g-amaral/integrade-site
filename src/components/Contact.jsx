import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Converse com nossos especialistas</h2>
          <p>Quer receber mais informações sobre nossos produtos e serviços? Envie suas dúvidas ou solicite uma proposta comercial.</p>
          <ul className="contact-links">
            <li><span>📞</span> (11) 5081-5001 / (11) 3136-0492</li>
            <li><span>📧</span> comercial@integrade.com.br</li>
          </ul>
        </div>
        <div className="contact-card">
          <form>
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu E-mail" />
            <textarea placeholder="Como podemos ajudar?"></textarea>
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
