function Solutions() {
  const solutions = [
    { 
      title: "Consulting", 
      description: "Gestão patrimonial, Controle Patrimonial e Adequações Legais", 
      icon: "💼" 
    },
    { 
      title: "Solutions", 
      description: "Soluções em Sistema de Controle Patrimonial, Sistema de Gestão ERP e Cloud Service", 
      icon: "💻" 
    },
    { 
      title: "Digital", 
      description: "Equipamentos, Loja Ecommerce e Produtos de Tecnologia", 
      icon: "🛒" 
    },
    { 
      title: "Services", 
      description: "Serviços de Patrimônio, Serviços Contábeis e Serviços de RH e TI", 
      icon: "🤝" 
    }
  ];

  return (
    <section id="solutions">
      <div className="section-header">
        <h2>Conheça as Soluções da Integrade</h2>
        <p className="section-subtitle">Possuímos uma linha de soluções completa para te ajudar a melhorar a sua empresa.</p>
      </div>
      <div className="solutions-grid">
        {solutions.map((s, i) => (
          <div key={i} className="solution-card">
            <div className="solution-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <a href="#contact" className="learn-more">Saiba Mais →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;
