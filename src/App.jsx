import './App.css';
import Logo from './assets/Logo.png';
import LogoH from './assets/LogoHorizontal.png';
import HistorySection from './components/HistorySection';
import LegacySection from './components/LegacySection';
import Solutions from './components/Solutions';
import TrustedBy from './components/TrustedBy';
import CTA from './components/CTA';
import Contact from './components/Contact';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { Phone, Mail, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <div className="bg-mesh"></div>
      <header className="App-header">
        <div className="logo">
          <img src={Logo} alt="Integrade Logo" height="40" />
        </div>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#legacy-section">Sobre</a></li>
            <li><a href="#solutions">Negócios</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>Uma nova e moderna maneira de pensar e integrar os processos da sua empresa!</h1>
          <p>Soluções inovadoras que unem tecnologia, pesquisa e desempenho para transformar seu negócio.</p>
          <div className="cta-group">
            <button className="btn btn-primary">Começar Agora</button>
            <button className="btn btn-secondary">Ver Serviços</button>
          </div>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow">
              <span></span>
              <span></span>
            </div>
          </div>
        </section>

        <HistorySection />
        <LegacySection />
        <Solutions />
        <TrustedBy />
        <CTA />
        <Contact />
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={Logo} alt="Integrade Logo" height="30" />
            </div>
            <p>&copy; 2026 Integrade. Tecnologia que transforma.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/integradeconsulting?locale=pt_BR" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="https://www.youtube.com/@integrade38" aria-label="YouTube">YouTube</a>
              <a href="https://www.instagram.com/integrade__/" aria-label="Instagram">Instagram</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Atendimento</h3>
            <ul>
              <li><Phone size={16} /> (11) 5081-5001 - Matriz SP</li>
              <li><Phone size={16} /> (21) 3005-3443 - Filial RJ</li>
              <li><Phone size={16} /> (51) 2626-3103 - Filial RS</li>
              <li><Mail size={16} /> <a href="mailto:comercial@integrade.com.br">comercial@integrade.com.br</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Endereço</h3>
            <p className="address">
              <MapPin size={16} /> Rua Américo Brasiliense 1490 – Sala 05<br />
              Chácara Santo Antônio – São Paulo – SP<br />
              CEP: 04715-002
            </p>
          </div>
        </div>
      </footer>
      <FloatingWhatsApp 
        phoneNumber="551150815001"
        accountName="Integrade"
        chatMessage="Olá! Como podemos ajudar você hoje?"
        placeholder="Digite sua mensagem..."
        statusMessage="Online"
        avatar={LogoH}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default App;
