import React, { useState } from 'react';
import './App.css';

// Formspree: formspree.io → neues Formular erstellen → ID hier eintragen
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojpwgdb';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    gdpr: false,
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: formData.name,
          'E-Mail': formData.email,
          Telefon: formData.phone || '–',
          Unternehmen: formData.company || '–',
          Nachricht: formData.message,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) {
        setFormData({ name: '', email: '', phone: '', company: '', message: '', gdpr: false });
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar glass-dark">
        <div className="container nav-content animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="logo text-white">
            assel<span className="text-accent" style={{marginLeft: '2px'}}>.studio</span>
          </div>
          <div className="nav-links">
            <a href="#services" className="nav-link text-white/70">Systeme</a>
            <a href="#process" className="nav-link text-white/70">Branchen</a>
            <a href="#audit" className="nav-link text-white/70">Preise</a>
            <a href="#audit" className="btn-secondary" style={{ padding: '0.4rem 1.25rem', marginLeft: '1rem' }}>
              Free Audit
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Premium Dark Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <div className="hero-mesh"></div>
            <div className="hero-orb"></div>
          </div>

          <div className="container hero-content" style={{ position: 'relative', zIndex: 10 }}>
            <div className="hero-tag animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-white/70">AI-Powered</span> <span className="text-white">Business Solutions</span>
            </div>

            <h1 className="animate-fade-up font-serif" style={{ animationDelay: '0.3s' }}>
              Automate and scale<br />
              your business with AI
            </h1>

            <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <a href="#audit" className="btn-primary btn-hero">
                Start Now <span className="btn-dot"></span>
              </a>
              <a href="#services" className="btn-secondary">
                Book a Demo
              </a>
            </div>
          </div>
          
          <div className="hero-fade-bottom"></div>
        </section>

        {/* Trusted By (Logo Grid) */}
        <section className="section section-logos">
          <div className="container">
            <h3 className="section-label text-center">Trusted by innovative startups and world-leading companies</h3>
            
            <div className="logo-grid-wrapper animate-fade-up">
              <div className="logo-grid">
                <div className="logo-item"><span className="logo-placeholder">Nextmove</span><div className="cross top-left"></div><div className="cross bottom-left"></div></div>
                <div className="logo-item"><span className="logo-placeholder">Invert</span><div className="cross top-left"></div><div className="cross bottom-left"></div></div>
                <div className="logo-item"><span className="logo-placeholder">Chain</span><div className="cross top-left"></div><div className="cross bottom-left"></div></div>
                <div className="logo-item"><span className="logo-placeholder">Mindfulness</span><div className="cross top-left"></div><div className="cross bottom-left"></div></div>
                <div className="logo-item"><span className="logo-placeholder">Proline</span><div className="cross top-left"></div><div className="cross bottom-left"></div></div>
                <div className="logo-item"><span className="logo-placeholder">Colab</span><div className="cross top-left"></div><div className="cross top-right"></div><div className="cross bottom-left"></div><div className="cross bottom-right"></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section stats-section">
          <div className="container">
            <div className="stats-header animate-fade-up">
              <div className="sub-label">
                <span className="icon-badge">✨</span> OUR ADVANTAGE
              </div>
              <h2 className="font-serif">
                Driven by Assel Studio.<br/>
                Focused on Growth
              </h2>
            </div>

            <div className="stats-grid animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="stat-card">
                <div className="stat-number font-serif">+300%</div>
                <div className="stat-desc">More qualified leads generated through automated AI systems.</div>
              </div>
              
              <div className="stat-divider"></div>
              
              <div className="stat-card">
                <div className="stat-number font-serif">80%</div>
                <div className="stat-desc">Time saved by automating repetitive back-office tasks.</div>
              </div>
              
              <div className="stat-divider"></div>
              
              <div className="stat-card">
                <div className="stat-number font-serif">24/7</div>
                <div className="stat-desc">Constant digital presence, capturing and nurturing inbound traffic automatically.</div>
              </div>
            </div>
            
            <div className="stats-footer-text animate-fade-up" style={{ animationDelay: '0.3s' }}>
              At Assel Studio, we invite you to schedule a personalized consultation to explore the unique aspects of your business. 
              During this session, we'll take a closer look at your goals, discuss effective automation strategies tailored to your industry, 
              and identify ways to radically improve your operational efficiency.
            </div>
          </div>
        </section>

        {/* Services / Solutions Section */}
        <section id="services" className="section bg-secondary services-section">
          <div className="container">
            <div className="services-header animate-fade-up">
              <div className="sub-label">
                <span className="icon-badge">⚡</span> OUR DEVELOPMENTS
              </div>
              <div className="services-title-row">
                <h2 className="font-serif">AI-Powered<br/>Growth Bots</h2>
                <p className="services-subtitle">Assel Studio uses AI to automate processes and<br/>help businesses grow faster and smarter.</p>
              </div>
            </div>

            <div className="services-cards">
              <div className="service-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="spark-icon">✦</div>
                <h3 className="font-serif">Smart Websites &<br/>Landingpages</h3>
                <p>We build highly converting hubs that turn your raw traffic into actionable leads, providing analytics that help your business grow.</p>
              </div>

              <div className="service-card animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="spark-icon">✦</div>
                <h3 className="font-serif">AI-Driven<br/>Lead Capture</h3>
                <p>Intelligent forms and automated follow-up sequences that qualify prospects while you focus on delivering your core value.</p>
              </div>

              <div className="service-card card-highlight animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="spark-icon">✦</div>
                <h3 className="font-serif">Strategic AI<br/>Consulting</h3>
                <p>Our team transforms raw data into actionable insights, providing deeply integrated CRM automations that help your business scale effortlessly.</p>
              </div>

              <div className="service-card animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="spark-icon">✦</div>
                <h3 className="font-serif">Intelligent AI<br/>Chatbots</h3>
                <p>Custom-trained AI agents that handle customer support 24/7, booking appointments directly into your calendar and answering FAQs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Audit / Kontakt Section */}
        <section id="audit" className="section audit-section">
          <div className="container">
            <div className="audit-card animate-fade-up">
              
              {/* Left: Info */}
              <div className="audit-content">
                <div className="scarcity-badge" style={{ marginBottom: '1.5rem' }}>
                  <span className="pulse-dot"></span> Exklusiv: Nur 10 kostenfreie Audits pro Monat
                </div>
                <h2 className="font-serif" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Kostenlosen Audit anfragen</h2>
                <p className="text-secondary" style={{ marginBottom: '2rem', lineHeight: '1.7', fontSize: '1.125rem' }}>
                  Echte Analysen kosten uns Ressourcen. Deshalb bieten wir{' '}
                  <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                    streng limitiert für 10 ausgewählte Unternehmen
                  </strong>{' '}
                  pro Monat eine tiefe Website-Intelligence-Analyse an – 100% kostenfrei und ohne Risiko.
                </p>
                <ul className="audit-benefits">
                  <li><span className="check">✓</span> Kostenlose Website-Analyse</li>
                  <li><span className="check">✓</span> Konkrete Handlungsempfehlungen</li>
                  <li><span className="check">✓</span> Antwort innerhalb von 24 Stunden</li>
                  <li><span className="check">✓</span> Keine Verpflichtung</li>
                </ul>
              </div>

              {/* Right: Form */}
              <div className="audit-form-wrapper">
                {status === 'success' ? (
                  <div className="form-success">
                    <div className="form-success-icon">✓</div>
                    <h3 className="font-serif">Anfrage erhalten!</h3>
                    <p>Vielen Dank – wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form" noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="Max Mustermann"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="company">Unternehmen</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          className="form-input"
                          placeholder="Muster GmbH"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">E-Mail *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="max@mustermann.de"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Telefon</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="+49 931 ..."
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Ihre Anfrage *</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-input form-textarea"
                        placeholder="Kurz beschreiben, was Sie sich wünschen oder wo der Schuh drückt..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group form-checkbox-group">
                      <input
                        id="gdpr"
                        name="gdpr"
                        type="checkbox"
                        className="form-checkbox"
                        checked={formData.gdpr}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="gdpr" className="form-checkbox-label">
                        Ich stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage gemäß der{' '}
                        <a href="#" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>Datenschutzerklärung</a> zu. *
                      </label>
                    </div>
                    {status === 'error' && (
                      <p className="form-error">
                        Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an{' '}
                        <a href="mailto:hello@assel.studio" style={{ color: 'var(--accent)' }}>hello@assel.studio</a>.
                      </p>
                    )}
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: '100%', marginTop: '1rem', padding: '1rem', justifyContent: 'center' }}
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? 'Wird gesendet…' : 'Jetzt Platz sichern'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer border-top">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="logo font-serif" style={{ fontSize: '1.5rem' }}>
                assel<span className="text-accent" style={{marginLeft: '2px'}}>.studio</span>
              </div>
              <p className="text-secondary" style={{ fontSize: '0.875rem', marginTop: '0.75rem' }}>
                Webdesign & KI-Automation · Würzburg, Bayern
              </p>
              <a href="mailto:hello@assel.studio" className="text-secondary" style={{ fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>
                hello@assel.studio
              </a>
            </div>
            <div className="footer-links">
              <a href="#" className="text-secondary">Solutions</a>
              <a href="#" className="text-secondary">Industries</a>
              <a href="#" className="text-secondary">Pricing</a>
              <a href="#" className="text-secondary">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
