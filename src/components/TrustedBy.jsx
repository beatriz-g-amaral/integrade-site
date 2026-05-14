import React from 'react';
import './TrustedBy.css';

const TrustedBy = () => {
  const logos = import.meta.glob('../assets/Clientes/*.{png,jpg,jpeg,svg}', { eager: true });
  const logoList = Object.values(logos).map((logo) => logo.default);

  return (
    <section id="trusted-by">
      <h2>Empresas que confiam na Integrade</h2>
      <div className="logos-container">
        <div className="logos-grid">
          {logoList.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`Cliente ${index + 1}`} loading="lazy" />
            </div>
          ))}
          <div className="logo-item more-clients">
            <span>+ Empresas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
