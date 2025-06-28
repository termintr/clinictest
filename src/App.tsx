import './App.css'
import { useState, useEffect } from 'react'
import carouselMain from '../public/assets/carouselMain.jpg'
import carousel1 from '../public/assets/carousel1.jpg'
import carousel2 from '../public/assets/carousel2.jpg'
import aboutImg from '../public/assets/aboutme.png'
import hamburgerImg from '../public/assets/Hamburger.png'
import topbarLogo from '../public/assets/topbarlogo.png'
import wazeImg from '../public/assets/waze.png'
import recommendation1 from '../public/assets/recommendation1.jpg'
import recommendation2 from '../public/assets/recommendation2.jpg'
import recommendation3 from '../public/assets/recommendation3.jpg'
import recommendation4 from '../public/assets/recommendation4.jpg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [pelvicFloorExpanded, setPelvicFloorExpanded] = useState(false)
  const [vestibularExpanded, setVestibularExpanded] = useState(false)
  const [pelvicFloorTechniquesExpanded, setPelvicFloorTechniquesExpanded] = useState(false)
  const [vestibularTechniquesExpanded, setVestibularTechniquesExpanded] = useState(false)
  const [recommendationIndex, setRecommendationIndex] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)

  const carouselImages = [carouselMain, carousel1, carousel2]
  const recommendationImages = [recommendation1, recommendation2, recommendation3, recommendation4]

  const pelvicFloorItems = [
    "כאבים ביחסים",
    "דליפות שתן",
    "שלפוחית רגיזה",
    "תכיפות ודחיפות במתן שתן",
    "נוקטוריה (השתנה מרובה בלילה)",
    "צניחות איברים",
    "כאבי אגן והכנה ללידה",
    "שיקום אחרי לידה",
    "היפרדות בטנית",
    "עצירות כרונית",
    "אנדומטריוזיס"
  ]

  const vestibularItems = [
    "סחרחורת סיבובית אקוטית BPPV",
    "שיקום וסטיבולרי בסחרחורות מתמשכות כגון תת פעילות המערכת הוסטיבולרית לאחר אירוע מוחי, ניתוחי ראש/אוזן וכד׳"
  ]

  const pelvicFloorTechniques = [
    "טיפול מנואלי (ידני) חיצוני ופנימי לתנועתיות, שחרור רקמות ומתח שרירים.",
    "ביופידבק - מכשיר המלמד לזהות ולשלוט בשרירי רצפת האגן בעזרת משוב חזותי וקולי ע״י אלקטרודה וגינלית המתחברת למכשיר ובכך המטופלת מצליחה לשפר את התפקוד ויכולת השליטה על הסוגרים.",
    "חיזוק שרירי רצפת האגן והשרירים התומכים בה ע״י תרגילים ממוקדים תוך עבודה נכונה ומותאמת אישית כולל התייחסות לנשימה ומנחים מגוונים.",
    "טיפול ויסצרלי - גישה טיפולית ידנית המתמקדת בתנועתיות של האיברים הפנימיים (ויסצרה) בגוף. מטרת הטיפול היא לשפר מתח מוגבר בקיר הבטן, לשפר תנועתיות מעיים, לשחרר איזור גב עליון וסרעפת ובכך לתרום לשיפור פונקציונלי של מערכת העיכול.",
    "שימוש במנשפית (שיטת גיארם) - שיטה לתרגול שרירי הבטן ורצפת האגן ע\"י נשיפה לתוך מנשפית (אביזר דמוי משרוקית). הנשיפה מכריחה את שרירי הבטן ורצפת האגן לעבוד בצורה הפיזיולוגית שלהם כשרירים של מערכת היציבה המגינים על הגו ומייצבים את מרכז הגוף ובו זמנית תורמת לחיזוקם.",
    "הדרכה וליווי לאורך כל התהליך."
  ]

  const vestibularTechniques = [
    "שימוש במכשור מתקדם כגון משקפי פרנזל",
    "שעוזרים לאבחון מדויק וטיפול מותאם לבעיה.",
    "שימוש בתרגילים ייעודיים ומותאמים אישית לאיזון המערכת הוסטיבולרית, כולל דפי תרגול ומעקב כנדרש.",
    "ליווי אישי ומקצועי לאורך כל התהליך עד להגעה למטרות הטיפוליות שקבענו."
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCarouselPaused) {
        setRecommendationIndex((prev) => (prev + 1) % recommendationImages.length)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [recommendationImages.length, isCarouselPaused])

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  const handlePhoneCall = () => {
    window.location.href = 'tel:+972526598076'
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/972526598076', '_blank')
  }

  const handleWaze = () => {
    window.open('waze://?ll=32.27768123878298,34.90627884864808&navigate=yes', '_blank')
  }

  const handleRecommendationNav = (direction: 'prev' | 'next') => {
    setIsCarouselPaused(true)
    if (direction === 'prev') {
      setRecommendationIndex((prev) => 
        prev === 0 ? recommendationImages.length - 1 : prev - 1
      )
    } else {
      setRecommendationIndex((prev) => (prev + 1) % recommendationImages.length)
    }
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsCarouselPaused(false), 5000)
  }

  return (
    <div className="App">
      {/* Floating Waze Button */}
      <button className="waze-float" onClick={handleWaze} aria-label="נווט עם וויז">
        <img src={wazeImg} alt="נווט עם וויז" />
      </button>

      {/* Floating WhatsApp Button */}
      <button className="whatsapp-float" onClick={handleWhatsApp} aria-label="צור קשר בוואטסאפ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="#fff"/>
        </svg>
      </button>

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <button className="phone-icon" onClick={handlePhoneCall} aria-label="התקשר עכשיו">
          <svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" fill="white"></path>
          </svg>
        </button>
        
        <div className="navbar-brand">
          <img src={topbarLogo} alt="גלית ריכטר" />
        </div>

        <button className="hamburger" aria-label="תפריט" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={hamburgerImg} alt="תפריט" />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#hero" onClick={handleNavClick}>🏠 בית</a></li>
          <li><a href="#about" onClick={handleNavClick}>👤 אודות</a></li>
          <li><a href="#services" onClick={handleNavClick}>🛠️ שירותים</a></li>
          <li><a href="#testimonials" onClick={handleNavClick}>💬 המלצות</a></li>
          <li><a href="#contact" onClick={handleNavClick}>✉️ צור קשר</a></li>
        </ul>
      </nav>

      {/* Hero Carousel */}
      <section id="hero" className="hero">
        <div className="carousel">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`תמונת קליניקה ${index + 1}`}
              className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
          <div className="carousel-overlay">
            <h1>גלית ריכטר</h1>
            <h1>פיזיותרפיה</h1>
            <p>שיקום רצפת האגן הנשית</p>
            <p>שיקום וסטיבולרי (טיפול בסחרחורת)</p>
            <p className="carousel-subtitle">קליניקה בקדימה</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>מי אני</h2>
        <div className="about-content">
          <img src={aboutImg} alt="גלית ריכטר" />
          <p>אמא ל-3 ושחקנית כדורשת בנשמה 😊<br/><br/>
          פיזיותרפיסטית מוסמכת בוגרת אוניברסיטת ת״א משנת 2006 ומנהלת מכון פיזיותרפיה בכללית, מדריכה קלינית ומטפלת גם במגוון הבעיות האורטופדיות למיניהן.<br/><br/>
          עיקר האהבות שלי בעבודה מתרכזות בשני תחומים שונים בהם התמחיתי:<br/><br/>
          <span className="numbered-list">
          1. <strong>רצפת האגן הנשית</strong> - אני משתמשת בטכניקות מתקדמות ומתעדכנת כל הזמן בפיתוחים הקיימים בתחום. מביאה לטיפול את הרוגע שלי, יצירת סביבה בטוחה ונעימה למטופלת ומתאימה כמו חליפה לכל אחת את הטיפול בשבילה.<br/><br/>
          2. <strong>סחרחורות</strong> - תחום מאוד מבלבל ומצריך ידע עמוק כדי לפתור בעיות מורכבות, לא כל הסחרחורות הן ״קריסטלים״ שזזים באוזן וכאן נכנס תחום השיקום הוסטיבולרי המרתק שבו גם למדתי לטפל ולעזור.<br/><br/>
          </span>
          <span className="highlighted-text">
          מטופלים שנכנסים לטיפול עם חשש ופחד, תמיד יוצאים עם אותו המשפט -״זה בכלל לא נורא כמו שחשבתי״.<br/><br/>
          </span>
          אני רואה בעבודתי שליחות ומזל גדול שיש לי הזכות לעסוק במה שאני אוהבת לעשות, ובו זמנית לשפר איכות חיים לאנשים רבים.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>במה אוכל לעזור?</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>בתחום רצפת האגן:</h3>
            <ul>
              {pelvicFloorItems.slice(0, 2).map((item, index) => (
                <li key={index}><strong>{item}</strong></li>
              ))}
              {pelvicFloorExpanded && 
                pelvicFloorItems.slice(2).map((item, index) => (
                  <li key={index + 2}><strong>{item}</strong></li>
                ))
              }
            </ul>
            <button 
              className="expand-button" 
              onClick={() => setPelvicFloorExpanded(!pelvicFloorExpanded)}
            >
              {pelvicFloorExpanded ? 'ראה פחות' : 'ראה עוד...'}
            </button>
          </div>
          <div className="service-card">
            <h3>בתחום הוסטיבולרי:</h3>
            <ul>
              {vestibularItems.slice(0, 1).map((item, index) => (
                <li key={index}><strong>{item}</strong></li>
              ))}
              {vestibularExpanded && 
                vestibularItems.slice(1).map((item, index) => (
                  <li key={index + 1}><strong>{item}</strong></li>
                ))
              }
            </ul>
            <button 
              className="expand-button" 
              onClick={() => setVestibularExpanded(!vestibularExpanded)}
            >
              {vestibularExpanded ? 'ראה פחות' : 'ראה עוד...'}
            </button>
          </div>
        </div>
      </section>

      {/* Treatment Techniques Section */}
      <section id="techniques" className="techniques">
        <h2>טכניקות טיפוליות</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>בתחום רצפת האגן:</h3>
            <ul>
              {pelvicFloorTechniques.slice(0, 1).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {pelvicFloorTechniquesExpanded && 
                pelvicFloorTechniques.slice(1).map((item, index) => (
                  <li key={index + 1}>{item}</li>
                ))
              }
            </ul>
            <button 
              className="expand-button" 
              onClick={() => setPelvicFloorTechniquesExpanded(!pelvicFloorTechniquesExpanded)}
            >
              {pelvicFloorTechniquesExpanded ? 'ראה פחות' : 'ראה עוד...'}
            </button>
          </div>
          <div className="service-card">
            <h3>בתחום הוסטיבולרי:</h3>
            <ul>
              <li>שימוש במכשור מתקדם כגון <strong>משקפי פרנזל</strong>
                {vestibularTechniquesExpanded && (
                  <>
                    {vestibularTechniques.slice(1).map((item, index) => (
                      <span key={index + 1}> {item}</span>
                    ))}
                  </>
                )}
              </li>
            </ul>
            <button 
              className="expand-button" 
              onClick={() => setVestibularTechniquesExpanded(!vestibularTechniquesExpanded)}
            >
              {vestibularTechniquesExpanded ? 'ראה פחות' : 'ראה עוד...'}
            </button>
          </div>
        </div>
      </section>

      {/* Recommendations Carousel Section */}
      <section id="testimonials" className="testimonials">
        <h2>מטופלים מספרים</h2>
      </section>
      
      <div className="recommendation-carousel">
        <div className="recommendation-container">
          {recommendationImages.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`המלצה ${index + 1}`} 
              className={`recommendation-image ${index === recommendationIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        
        <button 
          className="carousel-arrow carousel-arrow-left" 
          onClick={() => handleRecommendationNav('prev')}
          aria-label="תמונה קודמת"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="white"/>
          </svg>
        </button>
        
        <button 
          className="carousel-arrow carousel-arrow-right" 
          onClick={() => handleRecommendationNav('next')}
          aria-label="תמונה הבאה"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="white"/>
          </svg>
        </button>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>צור קשר</h2>
        <form className="contact-form" action="mailto:galit@example.com" method="post" encType="text/plain">
          <input type="text" name="name" placeholder="שם מלא" required />
          <input type="email" name="email" placeholder="אימייל" required />
          <textarea name="message" placeholder="הודעה" required></textarea>
          <button type="submit">שלח הודעה</button>
        </form>
        
        <div className="contact-info">
          <a href="tel:+972526598076" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#2E7D32"/>
            </svg>
            התקשר עכשיו
          </a>
          <a href="https://wa.me/972526598076" target="_blank" rel="noopener noreferrer" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.118-.563-.177-.8.178-.237.355-.91 1.155-1.117 1.392-.207.237-.414.266-.769.089-.355-.178-1.5-.553-2.86-1.763-1.057-.943-1.771-2.104-1.98-2.459-.207-.355-.022-.546.155-.723.159-.158.355-.414.533-.62.178-.207.237-.355.355-.592.118-.237.06-.444-.03-.622-.089-.178-.8-1.921-1.096-2.633-.289-.695-.583-.601-.8-.612-.207-.009-.444-.011-.681-.011-.237 0-.622.089-.949.444-.326.355-1.243 1.215-1.243 2.963 0 1.748 1.274 3.437 1.452 3.674.178.237 2.51 3.833 6.077 5.225.85.292 1.513.466 2.03.596.853.204 1.63.175 2.243.106.684-.076 2.104-.859 2.403-1.689.296-.83.296-1.541.207-1.689-.089-.148-.326-.237-.681-.414z" fill="#fff"/>
            </svg>
            שלח הודעה בוואטסאפ
          </a>
        </div>

        <div className="map">
          <iframe
            title="מיקום הקליניקה"
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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-name">גלית ריכטר</div>
            <div className="brand-subtitle">פיזיותרפיה</div>
          </div>
          <p>קדימה צורן | 2025 ©</p>
          <p>טלפון: <a href="tel:+972526598076">052-6598076</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
