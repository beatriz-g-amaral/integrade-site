import './LegacySection.css';

function LegacySection() {
  const items = [
    {
      num: "01",
      title: "Nossa Missão",
      desc: "Nos dedicamos trazer cada vez mais benefícios, tecnologia e qualidade aos nossos serviços, soluções e processos, além de modernizar a nossa estrutura, com o propósito de atender os clientes com o que há de melhor em conhecimento, técnicas e ferramentas de alto valor agregado."
    },
    {
      num: "02",
      title: "As Melhores Ferramentas e Soluções Tecnológicas",
      desc: "Nossa empresa desenvolve suas próprias ferramentas de trabalho, softwares de gestão, aplicativos de inventário, sob diversas plataformas: Web, Android e Windows Mobile. Atendendo ao diversos padrões de identificação desde Código de Barras até Tags de RFID, NFC e Beacons."
    },
    {
      num: "03",
      title: "Metodologia de Trabalho",
      desc: "A experiência faz a diferença. Acreditamos na qualidade dos nossos processos associados a expertise de nossa equipe, aprimorando procedimentos, ferramentas com o que há de mais atual em recursos tecnológicos."
    }
  ];

  return (
    <section id="legacy-section">
      <div className="quote-container">
        <h2 className="legacy-quote">
          "Desenvolvemos os melhores softwares de gestão, ferramentas de trabalho, aplicativos, sob diversas plataformas: Web, Android e Windows Mobile."
        </h2>
      </div>
      
      <div className="legacy-grid">
        {items.map((item, i) => (
          <div key={i} className="legacy-item">
            <div className="legacy-number">{item.num}</div>
            <div className="legacy-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LegacySection;
