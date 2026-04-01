import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar glass">
        <div className="container nav-content animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="logo">
            assel<span className="text-accent">.studio</span>
          </div>
          <div className="nav-links">
            <a href="#services" className="nav-link">Systeme & Services</a>
            <a href="#process" className="nav-link">Unser Edge</a>
            <a href="#audit" className="btn-secondary" style={{ padding: '0.5rem 1rem' }}>
              Free Audit anfragen
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-glow"></div>
          </div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-tag animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span>KI-Automation für Würzburg & DACH</span> Fokus auf profitable Nischen
            </div>
            
            <h1 className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Baue und skaliere die <br />
              <span className="text-gradient">digitale Maschine.</span>
            </h1>
            
            <p className="animate-fade-up hero-subtitle" style={{ animationDelay: '0.4s' }}>
              Ihre veraltete Website und verpasste Anrufe kosten Sie bares Geld.<br/>
              Wir automatisieren Ihre Lead-Generierung mit KI-gestützten Systemen und hochkonvertierendem Design.
            </p>
            
            <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <a href="#audit" className="btn-primary">Kostenlose Potenzialanalyse</a>
              <a href="#services" className="btn-secondary">Was wir bauen</a>
            </div>
          </div>
        </section>

        {/* Services / Solutions Section */}
        <section id="services" className="section bg-secondary">
          <div className="container">
            <div className="section-header animate-fade-up">
              <h2>Unsere Systeme</h2>
              <p className="text-secondary">Maßgeschneiderte MRR-Lösungen für maximale Effizienz und Lead-Capture.</p>
            </div>
            
            <div className="services-grid">
              <div className="card animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="card-icon">⚡</div>
                <h3>Smart Websites</h3>
                <p>Hochkonvertierende Landingpages, superschnelles Hosting und fortlaufende SEO-Optimierung für lokale Sichtbarkeit.</p>
              </div>
              
              <div className="card animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="card-icon">🤖</div>
                <h3>AI Lead Capture</h3>
                <p>24/7 erreichbare KI-Web-Chatbots, die Anfragen qualifizieren, während Sie im Tagesgeschäft sind.</p>
              </div>
              
              <div className="card animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="card-icon">📱</div>
                <h3>Operations Automation</h3>
                <p>Missed-Call Text-Back, automatisierte Terminbuchung und systematische Google Review-Generierung.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Audit CTA Section */}
        <section id="audit" className="section">
          <div className="container" style={{ position: 'relative' }}>
            <div className="audit-card glass animate-fade-up">
              <div className="audit-content">
                <h2>Der "Free Value" Ansatz</h2>
                <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                  Wir beweisen unseren Wert, bevor wir eine Rechnung stellen. 
                  Fordern Sie eine kostenfreie Website-Intelligence-Analyse oder ein Mini-Redesign an. 
                  Kein Risiko, keine Agentur-Phrasen.
                </p>
                <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
                  <a href="mailto:louis@assel.studio" className="btn-primary">Audit jetzt anfordern</a>
                </div>
              </div>
              <div className="audit-glow"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer border-top">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              assel<span className="text-accent">.studio</span>
            </div>
            <div className="footer-links">
              <a href="#" className="text-secondary">Impressum</a>
              <a href="#" className="text-secondary">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
