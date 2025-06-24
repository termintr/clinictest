import './App.css'
import { useState } from 'react'
import logo from '../public/assets/cliniclogo.jpg'
import heroImg from '../public/assets/clinicback2_edited.jpg'
import aboutImg from '../public/assets/85f255_51f2688bcdd445bc9072ebac0bea5cd4~mv2.jpg'
import leavesImg from '../public/assets/Leaves.png'
import testimonialImg from '../public/assets/f9b9d0b90d514da8b7f6d3cc07218673.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ direction: 'rtl', fontFamily: 'inherit' }}>
      <nav className="navbar">
        <img src={logo} alt="לוגו גלית ריכטר" style={{ height: 60, margin: '0 1rem' }} />
        <ul>
          <li><a href="#hero">בית</a></li>
          <li><a href="#about">אודות</a></li>
          <li><a href="#services">שירותים</a></li>
          <li><a href="#testimonials">המלצות</a></li>
          <li><a href="#contact">צור קשר</a></li>
        </ul>
      </nav>
      <section
        id="hero"
        className="hero"
        style={{
          position: 'relative',
          textAlign: 'center',
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '320px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2a5d7c',
        }}
      >
        <h1>גלית ריכטר - פיזיותרפיסטית</h1>
        <h2 className="hero-subtitle highlight-bg">קליניקה בקדימה צורן</h2>
        <p className="hero-desc">ברוכים הבאים לקליניקה החדשה לפיזיותרפיה</p>
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
      <section id="testimonials" className="testimonials" style={{ background: `url(${testimonialImg}) no-repeat center/cover`, borderRadius: 12, padding: 24 }}>
        <h2>המלצות</h2>
        <blockquote>"גלית מקצועית, קשובה ומסורה. ממליצה בחום!"</blockquote>
        <blockquote>"הטיפול עזר לי מאוד, תודה רבה!"</blockquote>
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
