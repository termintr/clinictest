import './App.css'
import { useState } from 'react'
import logo from '../public/assets/cliniclogo.jpg'
import heroImg from '../public/assets/welcome.png'
import aboutImg from '../public/assets/aboutMe.png'
import leavesImg from '../public/assets/Leaves.png'
import hamburgerImg from '../public/assets/Hamburger.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className="App" style={{ direction: 'rtl', fontFamily: 'inherit' }}>
      <nav className="navbar">
        <img src={logo} alt="לוגו גלית ריכטר" style={{ height: 40, margin: '0 1rem' }} />
        <button className="hamburger" aria-label="תפריט" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={hamburgerImg} alt="תפריט" style={{ width: 32, height: 32 }} />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#hero" onClick={handleNavClick}><span className="nav-icon" aria-hidden="true">🏠</span> בית</a></li>
          <li><a href="#about" onClick={handleNavClick}><span className="nav-icon" aria-hidden="true">👤</span> אודות</a></li>
          <li><a href="#services" onClick={handleNavClick}><span className="nav-icon" aria-hidden="true">🛠️</span> שירותים</a></li>
          <li><a href="#testimonials" onClick={handleNavClick}><span className="nav-icon" aria-hidden="true">💬</span> המלצות</a></li>
          <li><a href="#contact" onClick={handleNavClick}><span className="nav-icon" aria-hidden="true">✉️</span> צור קשר</a></li>
        </ul>
      </nav>
      <div className="app-content">
        <section
          id="hero"
          className="hero"
          style={{
            position: 'relative',
            textAlign: 'center',
            minHeight: '320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2a5d7c',
            padding: 0,
            background: 'none',
          }}
        >
          <img
            src={heroImg}
            alt="קליניקת פיזיותרפיה גלית ריכטר"
            style={{
              width: '100vw',
              maxWidth: '100vw',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
              margin: 0,
              padding: 0,
              borderRadius: 0,
            }}
          />
        </section>
        <section id="about" className="about">
          <h2 className="about-title">אודות</h2>
          <img src={aboutImg} alt="גלית ריכטר" className="about-img" />
          <div>
            <p>גלית ריכטר, פיזיותרפיסטית מוסמכת עם ניסיון רב בטיפול במגוון בעיות אורתופדיות ונוירולוגיות.</p>
          </div>
        </section>
        <section id="services" className="services">
          <h2>שירותים</h2>
          <img src={leavesImg} alt="עלים דקורטיביים" className="leaves-img" />
          <div className="services-list">
            <div className="service-block">
              <h3>פיזיותרפיה אורתופדית</h3>
              <p>טיפול במגוון בעיות שריר-שלד, פציעות ספורט, שיקום מפרקים ושרירים.</p>
            </div>
            <div className="service-block">
              <h3>שיקום לאחר ניתוח</h3>
              <p>ליווי מקצועי בתהליך ההחלמה לאחר ניתוחים אורתופדיים ונוירולוגיים.</p>
            </div>
            <div className="service-block">
              <h3>טיפול בכאבי גב וצוואר</h3>
              <p>התאמת תוכנית טיפול אישית להקלה על כאבים ושיפור התפקוד היומיומי.</p>
            </div>
            <div className="service-block">
              <h3>פיזיותרפיה נוירולוגית</h3>
              <p>שיקום תפקודי לאחר פגיעות עצביות, שבץ מוחי ומחלות נוירולוגיות.</p>
            </div>
            <div className="service-block">
              <h3>ייעוץ והכוונה אישית</h3>
              <p>הדרכה מקצועית, מענה לשאלות ובניית תוכנית טיפול מותאמת אישית.</p>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials">
          <h2>המלצות</h2>
          <div className="testimonial-row">
            <div className="testimonial-portrait">
              {/* Woman wireframe SVG */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="18" r="10" stroke="#bcd0e5" strokeWidth="2"/><ellipse cx="24" cy="38" rx="14" ry="8" stroke="#bcd0e5" strokeWidth="2"/></svg>
            </div>
            <blockquote>"גלית מקצועית, קשובה ומסורה. ממליצה בחום!"</blockquote>
          </div>
          <div className="testimonial-row">
            <div className="testimonial-portrait">
              {/* Man wireframe SVG */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="18" r="10" stroke="#bcd0e5" strokeWidth="2"/><rect x="14" y="32" width="20" height="10" rx="5" stroke="#bcd0e5" strokeWidth="2"/></svg>
            </div>
            <blockquote>"הטיפול עזר לי מאוד, תודה רבה!"</blockquote>
          </div>
          <div className="testimonial-row">
            <div className="testimonial-portrait">
              {/* Woman wireframe SVG */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="18" r="10" stroke="#bcd0e5" strokeWidth="2"/><ellipse cx="24" cy="38" rx="14" ry="8" stroke="#bcd0e5" strokeWidth="2"/></svg>
            </div>
            <blockquote>"הגעתי לגלית עם כאבים ממושכים, וקיבלתי טיפול מקצועי ואישי."</blockquote>
          </div>
          <div className="testimonial-row">
            <div className="testimonial-portrait">
              {/* Man wireframe SVG */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="18" r="10" stroke="#bcd0e5" strokeWidth="2"/><rect x="14" y="32" width="20" height="10" rx="5" stroke="#bcd0e5" strokeWidth="2"/></svg>
            </div>
            <blockquote>"ממליץ בחום על גלית! סבלנות, מקצועיות ותוצאות מעולות."</blockquote>
          </div>
        </section>
        <section id="contact" className="contact">
          <h2>צור קשר</h2>
          <form className="contact-form" action="mailto:galit@example.com" method="post" encType="text/plain">
            <label className="contact-label">שם:<br/><input className="contact-input" type="text" name="name" required /></label><br/>
            <label className="contact-label">אימייל:<br/><input className="contact-input" type="email" name="email" required /></label><br/>
            <label className="contact-label">הודעה:<br/><textarea className="contact-input" name="message" required /></label><br/>
            <button type="submit">שלח</button>
          </form>
          <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16}}>
            <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: 6}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.118-.563-.177-.8.178-.237.355-.91 1.155-1.117 1.392-.207.237-.414.266-.769.089-.355-.178-1.5-.553-2.86-1.763-1.057-.943-1.771-2.104-1.98-2.459-.207-.355-.022-.546.155-.723.159-.158.355-.414.533-.62.178-.207.237-.355.355-.592.118-.237.06-.444-.03-.622-.089-.178-.8-1.921-1.096-2.633-.289-.695-.583-.601-.8-.612-.207-.009-.444-.011-.681-.011-.237 0-.622.089-.949.444-.326.355-1.243 1.215-1.243 2.963 0 1.748 1.274 3.437 1.452 3.674.178.237 2.51 3.833 6.077 5.225.85.292 1.513.466 2.03.596.853.204 1.63.175 2.243.106.684-.076 2.104-.859 2.403-1.689.296-.83.296-1.541.207-1.689-.089-.148-.326-.237-.681-.414z" fill="#fff"/></svg>
              שלח הודעה בוואטסאפ
            </a>
            <a href="https://www.facebook.com/galit.pr" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: 6}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#1877F3"/><path d="M21.5 16.02h-3.02v8.48h-3.5v-8.48h-1.75v-2.98h1.75v-1.7c0-2.1 1.02-3.2 3.23-3.2h2.02v2.98h-1.26c-.38 0-.5.18-.5.5v1.42h2.01l-.27 2.98z" fill="#fff"/></svg>
              פייסבוק
            </a>
          </p>
          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=עמק+יזרעאל+קדימה+צורן&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-row">
          <img src={logo} alt="לוגו גלית ריכטר" style={{ height: 40, margin: '0 1rem' }} />
          <p style={{margin: 0}}>גלית ריכטר | קדימה צורן <span style={{marginRight: '0.5em', fontWeight: 700}}>2025 ©</span></p>
        </div>
        <p>טלפון: <a href="tel:0501234567">050-1234567</a></p>
      </footer>
    </div>
  )
}

export default App
