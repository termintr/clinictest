import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import carouselMain from '../../public/assets/carouselMain.jpg'
import carousel1 from '../../public/assets/carousel1.jpg'
import carousel2 from '../../public/assets/carousel2.jpg'
import aboutImg from '../../public/assets/aboutme.png'
import recommendation1 from '../../public/assets/recommendation1.jpg'
import recommendation2 from '../../public/assets/recommendation2.jpg'
import recommendation3 from '../../public/assets/recommendation3.jpg'
import recommendation4 from '../../public/assets/recommendation4.jpg'
import recommendation5 from '../../public/assets/recommendation5.jpeg'
import fullLogo from '../../public/assets/fulllogo.png'
import Footer from './Footer'

function MainPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [pelvicFloorExpanded, setPelvicFloorExpanded] = useState(false)
  const [vestibularExpanded, setVestibularExpanded] = useState(false)
  const [pelvicFloorTechniquesExpanded, setPelvicFloorTechniquesExpanded] = useState(false)
  const [vestibularTechniquesExpanded, setVestibularTechniquesExpanded] = useState(false)
  const [recommendationIndex, setRecommendationIndex] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const carouselImages = [carouselMain, carousel1, carousel2]
  const recommendationImages = [recommendation1, recommendation2, recommendation3, recommendation4, recommendation5]

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
    "<strong>טיפול מנואלי</strong> (ידני) חיצוני ופנימי לתנועתיות, שחרור רקמות ומתח שרירים.",
    "<strong>ביופידבק</strong> - מכשיר המלמד לזהות ולשלוט בשרירי רצפת האגן בעזרת משוב חזותי וקולי ע״י אלקטרודה וגינלית המתחברת למכשיר ובכך המטופלת מצליחה לשפר את התפקוד ויכולת השליטה על הסוגרים.",
    "<strong>חיזוק שרירי רצפת האגן</strong> והשרירים התומכים בה ע״י תרגילים ממוקדים תוך עבודה נכונה ומותאמת אישית כולל התייחסות לנשימה ומנחים מגוונים.",
    "<strong>טיפול ויסצרלי</strong> - גישה טיפולית ידנית המתמקדת בתנועתיות של האיברים הפנימיים (ויסצרה) בגוף. מטרת הטיפול היא לשפר מתח מוגבר בקיר הבטן, לשפר תנועתיות מעיים, לשחרר איזור גב עליון וסרעפת ובכך לתרום לשיפור פונקציונלי של מערכת העיכול.",
    "<strong>שימוש במנשפית (שיטת גיארם)</strong> - שיטה לתרגול שרירי הבטן ורצפת האגן ע\"י נשיפה לתוך מנשפית (אביזר דמוי משרוקית). הנשיפה מכריחה את שרירי הבטן ורצפת האגן לעבוד בצורה הפיזיולוגית שלהם כשרירים של מערכת היציבה המגינים על הגו ומייצבים את מרכז הגוף ובו זמנית תורמת לחיזוקם.",
    "<strong>הכנה ללידה</strong> - טיפול מנואלי ממוקד לאיזור רצפת האגן במטרה להפחית סיכוי לקרעים/חתכים בלידה. עם וללא שימוש במנשפית.",
    "<strong>הדרכה וליווי</strong> צמוד לאורך כל התהליך."
  ]

  const vestibularTechniques = [
    "<strong>שימוש במכשור</strong> מתקדם כגון משקפי פרנזל שעוזרים לאבחון מדויק וטיפול מותאם לבעיה.",
    "<strong>שימוש בתרגילים</strong> ייעודיים ומותאמים אישית לאיזון המערכת הוסטיבולרית, כולל דפי תרגול ומעקב כנדרש.",
    "<strong>ליווי אישי</strong> ומקצועי לאורך כל התהליך עד להגעה למטרות הטיפוליות שקבענו."
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

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear errors when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate name
    if (!formData.name.trim()) {
      setErrors(prev => ({ ...prev, name: 'שדה חובה' }))
      return
    }
    
    // Validate email
    if (!formData.email) {
      setErrors(prev => ({ ...prev, email: 'שדה חובה' }))
      return
    }
    if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'אימייל אינו תקין' }))
      return
    }
    
    // Validate message
    if (!formData.message.trim()) {
      setErrors(prev => ({ ...prev, message: 'שדה חובה' }))
      return
    }
    
    // Clear errors
    setErrors({ name: '', email: '', message: '' })
    
    // Prepare email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'galitush1@gmail.com'
    }
    
    // Send email using EmailJS
    emailjs.send(
      'service_galitclinic', // Replace with your EmailJS service ID
      'template_contact_clinic', // Replace with your EmailJS template ID
      templateParams,
      '0SNKk5cvEsXIiQtfF' // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      // Show success popup
      setShowSuccessPopup(true)
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      // Hide popup after 3 seconds
      setTimeout(() => setShowSuccessPopup(false), 3000)
    })
    .catch((error) => {
      console.log('FAILED...', error)
      // Show error message (you can add error state if needed)
      alert('שגיאה בשליחת האימייל. אנא נסה שוב.')
    })
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
          <p>אמא ל-3 ושחקנית כדורשת בנשמה 😊<br/>
          פיזיותרפיסטית מוסמכת בוגרת אוניברסיטת ת״א משנת 2006 ומנהלת מכון פיזיותרפיה בכללית, מדריכה קלינית ומטפלת גם במגוון הבעיות האורטופדיות למיניהן.<br/><br/>
          עיקר האהבות שלי בעבודה מתרכזות בשני תחומים שונים בהם התמחיתי:<br/><br/>
          <span className="numbered-list">
          1. <strong>רצפת האגן הנשית</strong> - אני משתמשת בטכניקות מתקדמות ומתעדכנת כל הזמן בפיתוחים הקיימים בתחום. מביאה לטיפול את הרוגע שלי, יצירת סביבה בטוחה ונעימה למטופלת ומתאימה כמו חליפה לכל אחת את הטיפול בשבילה.<br/><br/>
          2. <strong>סחרחורות</strong> - תחום מאוד מבלבל ומצריך ידע עמוק כדי לפתור בעיות מורכבות, לא כל הסחרחורות הן ״קריסטלים״ שזזים באוזן וכאן נכנס תחום השיקום הוסטיבולרי המרתק שבו גם למדתי לטפל ולעזור.<br/><br/>
          </span>
          <span className="highlighted-text" style={{ fontSize: '1.4rem' }}>
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
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
              {pelvicFloorTechniquesExpanded && 
                pelvicFloorTechniques.slice(1).map((item, index) => (
                  <li key={index + 1} dangerouslySetInnerHTML={{ __html: item }}></li>
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
              {vestibularTechniques.slice(0, 1).map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
              {vestibularTechniquesExpanded && 
                vestibularTechniques.slice(1).map((item, index) => (
                  <li key={index + 1} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))
              }
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
          
          <button 
            onClick={() => handleRecommendationNav('prev')}
            aria-label="תמונה קודמת"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(107, 70, 193, 0.4)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 10,
              left: '20px',
              color: 'white'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="white"/>
            </svg>
          </button>
          
          <button 
            onClick={() => handleRecommendationNav('next')}
            aria-label="תמונה הבאה"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(107, 70, 193, 0.4)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 10,
              right: '20px',
              color: 'white'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>צור קשר</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              placeholder="שם מלא" 
              value={formData.name}
              onChange={handleInputChange}
              maxLength={100}
              className={errors.name ? 'error' : ''}
              dir="rtl"
              lang="he"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="input-group">
            <input 
              type="text" 
              name="email" 
              placeholder="אימייל" 
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
              className={errors.email ? 'error' : ''}
              dir="ltr"
              lang="en"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="input-group">
            <textarea 
              name="message" 
              placeholder="הודעה" 
              value={formData.message}
              onChange={handleInputChange}
              maxLength={1000}
              className={errors.message ? 'error' : ''}
              dir="rtl"
              lang="he"
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          <button type="submit">שלח הודעה</button>
        </form>
        
        <div className="contact-info redesigned-contact-info">
          <a href="tel:+972526598076" className="contact-card call-card" aria-label="טלפון">
            <span className="contact-label">טלפון</span>
            <span className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#fff"/>
              </svg>
            </span>
          </a>
          <a href="https://wa.me/972526598076" target="_blank" rel="noopener noreferrer" className="contact-card whatsapp-card" aria-label="Whatsapp">
            <span className="contact-label">Whatsapp</span>
            <span className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#25D366"/>
                <path d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.118-.563-.177-.8.178-.237.355-.91 1.155-1.117 1.392-.207.237-.414.266-.769.089-.355-.178-1.5-.553-2.86-1.763-1.057-.943-1.771-2.104-1.98-2.459-.207-.355-.022-.546.155-.723.159-.158.355-.414.533-.62.178-.207.237-.355.355-.592.118-.237.06-.444-.03-.622-.089-.178-.8-1.921-1.096-2.633-.289-.695-.583-.601-.8-.612-.207-.009-.444-.011-.681-.011-.237 0-.622.089-.949.444-.326.355-1.243 1.215-1.243 2.963 0 1.748 1.274 3.437 1.452 3.674.178.237 2.51 3.833 6.077 5.225.85.292 1.513.466 2.03.596.853.204 1.63.175 2.243.106.684-.076 2.104-.859 2.403-1.689.296-.83.296-1.541.207-1.689-.089-.148-.326-.237-.681-.414z" fill="#fff"/>
              </svg>
            </span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61578053394490" target="_blank" rel="noopener noreferrer" className="contact-card facebook-card" aria-label="פייסבוק">
            <span className="contact-label">פייסבוק</span>
            <span className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#fff"/>
                <path d="M18.5 10.5h2V7.5c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.55 1.8-4.55 5.1v2.05H9.5v3.1h3.5V24h4.1v-6.4h2.75l.4-3.1h-3.15v-1.6c0-.9.25-1.5 1.5-1.5z" fill="#1877F3"/>
              </svg>
            </span>
          </a>
        </div>

        <div className="map" style={{ width: '100%', margin: 0, padding: 0 }}>
          <iframe
            title="מיקום הקליניקה"
            src="https://www.google.com/maps?q=עמק+יזרעאל+קדימה+צורן&output=embed"
            width="100%"
            height="200"
            style={{ border: 0, margin: 0, padding: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup">
          <div className="success-popup-content">
            <span>אימייל נשלח</span>
          </div>
        </div>
      )}
    </>
  )
}

export default MainPage 