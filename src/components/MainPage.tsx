import { useState, useEffect } from 'react'
import carouselMain from '../../public/assets/carouselMain.jpg'
import carousel1 from '../../public/assets/carousel1.jpg'
import carousel2 from '../../public/assets/carousel2.jpg'
import aboutImg from '../../public/assets/aboutme.png'
import recommendation1 from '../../public/assets/recommendation1.jpg'
import recommendation2 from '../../public/assets/recommendation2.jpg'
import recommendation3 from '../../public/assets/recommendation3.jpg'
import recommendation4 from '../../public/assets/recommendation4.jpg'

function MainPage() {
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
    <>
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
    </>
  )
}

export default MainPage 