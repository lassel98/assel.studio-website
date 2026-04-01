import { useState } from 'react';
import './index.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojpwgdb';

/* ── SVG Icons ─────────────────────────────────────── */

const IconMonitor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
);

const IconBot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8"/>
    <rect x="4" y="8" width="16" height="12" rx="2"/>
    <path d="M2 14h2M20 14h2M15 13v2M9 13v2"/>
  </svg>
);

const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 3 5 8.5 2 5.5"/>
  </svg>
);

/* ── App ────────────────────────────────────────────── */

function App() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '', gdpr: false,
  });
  const [status, setStatus] = useState('idle');

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
    <div>

      {/* ── Navigation ── */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="logo">
            assel<span className="dot">.studio</span>
          </a>
          <div className="nav-links">
            <a href="#services" className="nav-link">Leistungen</a>
            <a href="#audit" className="nav-link">Kontakt</a>
            <a href="#audit" className="btn btn-cta" style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}>
              Audit anfragen
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient" />
          <div className="hero-grid" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-label animate-fade-up">
              <span className="hero-label-dot" />
              KI-Automation für Würzburg & DACH
            </div>
            <h1 className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Mehr Kunden –<br /><em>automatisch.</em>
            </h1>
            <p className="hero-sub animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Veraltete Websites und verpasste Anrufe kosten Sie täglich Aufträge.
              Wir bauen KI-gestützte Systeme, die Leads erfassen und qualifizieren –
              rund um die Uhr, ohne Ihr Zutun.
            </p>
            <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#audit" className="btn btn-cta">Kostenlosen Audit anfragen</a>
              <a href="#services" className="btn btn-ghost">Leistungen ansehen</a>
            </div>
          </div>
        </div>
        <div className="hero-fade" />
      </section>

      {/* ── Stats ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-inner">
            <div className="stat-item">
              <div className="stat-number">+300<span>%</span></div>
              <div className="stat-label">mehr qualifizierte Anfragen durch automatisierte Lead-Systeme</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">80<span>%</span></div>
              <div className="stat-label">Zeitersparnis bei wiederkehrenden Backoffice-Aufgaben</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">digitale Präsenz, die eingehende Anfragen automatisch erfasst</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="services-intro animate-fade-up">
            <div>
              <div className="section-eyebrow">
                <span className="section-eyebrow-bar" /> Leistungen
              </div>
              <h2 className="section-title">Was wir für Sie bauen</h2>
            </div>
            <p className="services-intro-right">
              Maßgeschneiderte Systeme für Würzburger KMUs –
              von der hochkonvertierenden Website bis zur vollautomatisierten Lead-Pipeline.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card animate-fade-up" style={{ animationDelay: '0.05s' }}>
              <div className="service-icon"><IconMonitor /></div>
              <h3>Smart Websites & Landingpages</h3>
              <p>Hochkonvertierende Seiten mit superschnellem Hosting und fortlaufender SEO-Optimierung für lokale Sichtbarkeit in Würzburg und Umgebung.</p>
            </div>
            <div className="service-card animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="service-icon"><IconBot /></div>
              <h3>AI Lead Capture</h3>
              <p>24/7 erreichbare KI-Chatbots, die Anfragen qualifizieren und Termine direkt in Ihren Kalender buchen – während Sie im Tagesgeschäft sind.</p>
            </div>
            <div className="service-card animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <div className="service-icon"><IconZap /></div>
              <h3>Operations Automation</h3>
              <p>Missed-Call Text-Back, automatisierte Terminbuchung und systematische Google-Review-Generierung für mehr Vertrauen und weniger Aufwand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Audit / Kontakt ── */}
      <section id="audit" className="section audit-section">
        <div className="container">
          <div className="audit-card animate-fade-up">

            {/* Links: Info */}
            <div>
              <div className="scarcity-badge">
                <span className="pulse-dot" />
                Nur 10 kostenfreie Audits pro Monat
              </div>
              <h2 className="audit-title">Kostenlosen Audit anfragen</h2>
              <p className="audit-desc">
                Wir analysieren Ihre Website und zeigen Ihnen konkrete Hebel für mehr Anfragen –{' '}
                <strong>100% kostenfrei und ohne Risiko.</strong>
              </p>
              <ul className="audit-list">
                {[
                  'Kostenlose Website-Analyse',
                  'Konkrete Handlungsempfehlungen',
                  'Antwort innerhalb von 24 Stunden',
                  'Keine Verpflichtung',
                ].map(item => (
                  <li key={item}>
                    <span className="check-icon"><IconCheck /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Rechts: Formular */}
            <div>
              {status === 'success' ? (
                <div className="form-success">
                  <div className="form-success-icon"><IconCheck /></div>
                  <h3>Anfrage erhalten!</h3>
                  <p>Vielen Dank – wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Name *</label>
                      <input id="name" name="name" type="text" className="form-input"
                        placeholder="Max Mustermann" value={formData.name}
                        onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Unternehmen</label>
                      <input id="company" name="company" type="text" className="form-input"
                        placeholder="Muster GmbH" value={formData.company}
                        onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">E-Mail *</label>
                      <input id="email" name="email" type="email" className="form-input"
                        placeholder="max@mustermann.de" value={formData.email}
                        onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Telefon</label>
                      <input id="phone" name="phone" type="tel" className="form-input"
                        placeholder="+49 931 ..." value={formData.phone}
                        onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Ihre Anfrage *</label>
                    <textarea id="message" name="message" className="form-input form-textarea"
                      placeholder="Was können wir für Sie tun?" rows={4}
                      value={formData.message} onChange={handleChange} required />
                  </div>
                  <div className="form-checkbox-group">
                    <input id="gdpr" name="gdpr" type="checkbox" className="form-checkbox"
                      checked={formData.gdpr} onChange={handleChange} required />
                    <label htmlFor="gdpr" className="form-checkbox-label">
                      Ich stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage gemäß der{' '}
                      <a href="#">Datenschutzerklärung</a> zu. *
                    </label>
                  </div>
                  {status === 'error' && (
                    <p className="form-error">
                      Fehler beim Senden – bitte erneut versuchen oder direkt an{' '}
                      <a href="mailto:hello@assel.studio" style={{ textDecoration: 'underline' }}>
                        hello@assel.studio
                      </a> schreiben.
                    </p>
                  )}
                  <button type="submit" className="btn btn-cta" style={{ width: '100%', marginTop: '0.25rem' }}
                    disabled={status === 'loading'}>
                    {status === 'loading' ? 'Wird gesendet…' : 'Jetzt Platz sichern'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-logo">assel<span className="dot">.studio</span></div>
            <p className="footer-meta">Webdesign & KI-Automation · Würzburg, Bayern</p>
            <a href="mailto:hello@assel.studio" className="footer-meta" style={{ display: 'block', marginTop: '2px' }}>
              hello@assel.studio
            </a>
          </div>
          <div className="footer-links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
