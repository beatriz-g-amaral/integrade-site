import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoUrl = `mailto:comercial@integrade.com.br?subject=Contato de ${encodeURIComponent(name)}&body=Nome: ${encodeURIComponent(name)}%0D%0AE-mail: ${encodeURIComponent(email)}%0D%0AMensagem: ${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

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
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Seu Nome" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Seu E-mail" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea 
              name="message"
              placeholder="Como podemos ajudar?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
