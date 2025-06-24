import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ direction: 'rtl', fontFamily: 'inherit' }}>
      <nav className="navbar">
        <ul>
          <li><a href="#hero">בית</a></li>
          <li><a href="#about">אודות</a></li>
          <li><a href="#services">שירותים</a></li>
          <li><a href="#testimonials">המלצות</a></li>
          <li><a href="#contact">צור קשר</a></li>
        </ul>
      </nav>
      <section id="hero" className="hero">
        <h1>גלית ריכטר - פיזיותרפיסטית</h1>
        <h2>קליניקה בקדימה צורן</h2>
        <p>ברוכים הבאים לקליניקה החדשה לפיזיותרפיה</p>
      </section>
      <section id="about" className="about">
        <h2>אודות</h2>
        <p>גלית ריכטר, פיזיותרפיסטית מוסמכת עם ניסיון רב בטיפול במגוון בעיות אורתופדיות ונוירולוגיות.</p>
      </section>
      <section id="services" className="services">
        <h2>שירותים</h2>
        <ul>
          <li>פיזיותרפיה אורתופדית</li>
          <li>שיקום לאחר ניתוח</li>
          <li>טיפול בכאבי גב וצוואר</li>
          <li>פיזיותרפיה נוירולוגית</li>
          <li>ייעוץ והכוונה אישית</li>
        </ul>
      </section>
      <section id="testimonials" className="testimonials">
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
        <p>© {new Date().getFullYear()} גלית ריכטר | קדימה צורן</p>
        <p>טלפון: <a href="tel:0501234567">050-1234567</a></p>
      </footer>
    </div>
  )
}

export default App
