import React from 'react';

function Mission() {
  const points = [
    { 
      title: "Sempre pensando em Você", 
      desc: "Aqui na Integrade, o cliente sempre vem em primeiro lugar",
      icon: "👤" 
    },
    { 
      title: "Sistemas Inovadores", 
      desc: "Nossos sistemas foram feitos pensando na resolução dos problemas de uma maneira prática",
      icon: "💡" 
    },
    { 
      title: "Praticidade", 
      desc: "Sempre pensando em você, os processos da Integrade são práticos e fáceis",
      icon: "⚙️" 
    },
    { 
      title: "Suporte 24/7", 
      desc: "Nossa equipe trabalha para sempre estar disponível para atende-los",
      icon: "📞" 
    }
  ];

  return (
    <section id="mission">
      <div className="mission-container">
        <div className="mission-header">
          <h2>Porque escolher a Integrade?</h2>
          <p>Oferecemos soluções que unem tecnologia e humanidade para transformar o seu negócio.</p>
          <div className="mission-image-placeholder">
             <div className="glow-orb"></div>
          </div>
        </div>
        <div className="mission-list">
          {points.map((p, i) => (
            <div key={i} className="mission-item">
              <div className="mission-item-icon">{p.icon}</div>
              <div className="mission-item-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
