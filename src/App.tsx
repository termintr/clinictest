import './App.css'
import { useState } from 'react'
import logo from '../public/assets/Taliayaniv_logo.png'
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
        <h2 className="hero-subtitle">קליניקה בקדימה צורן</h2>
        <p className="hero-desc">ברוכים הבאים לקליניקה החדשה לפיזיותרפיה</p>
      </section>
      <section id="about" className="about" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <img src={aboutImg} alt="גלית ריכטר" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', marginLeft: 24 }} />
        <div>
          <h2>אודות</h2>
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
        <form action="mailto:galit@example.com" method="post" encType="text/plain">
          <label>שם:<br/><input type="text" name="name" required /></label><br/>
          <label>אימייל:<br/><input type="email" name="email" required /></label><br/>
          <label>הודעה:<br/><textarea name="message" required /></label><br/>
          <button type="submit">שלח</button>
        </form>
        <p>או <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">שלח הודעה בוואטסאפ</a></p>
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.123456789!2d34.935!3d32.266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3f123456789:0xabcdef123456789!2z15nXkdeR15XXlNeZ15nXkQ!5e0!3m2!1siw!2sil!4v1710000000000!5m2!1siw!2sil"
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
        <img src={logo} alt="לוגו גלית ריכטר" style={{ height: 40, margin: '0 1rem' }} />
        <p>© {new Date().getFullYear()} גלית ריכטר | קדימה צורן</p>
        <p>טלפון: <a href="tel:0501234567">050-1234567</a></p>
      </footer>
    </div>
  )
}

export default App
