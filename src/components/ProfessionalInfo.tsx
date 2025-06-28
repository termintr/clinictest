import { useState } from 'react'

function ProfessionalInfo() {
  const [pelvicFloorExpanded, setPelvicFloorExpanded] = useState(false)
  const [vestibularExpanded, setVestibularExpanded] = useState(false)

  const pelvicFloorFAQs = [
    "שאלה 1: מה זה שיקום רצפת האגן?",
    "שאלה 2: מתי צריך לפנות לטיפול ברצפת האגן?",
    "שאלה 3: איך מתבצע הטיפול?",
    "שאלה 4: כמה זמן נמשך הטיפול?",
    "שאלה 5: האם הטיפול כואב?",
    "שאלה 6: מה ההבדל בין ביופידבק לטיפול ידני?",
    "שאלה 7: האם יש תרגילים שאפשר לעשות בבית?",
    "שאלה 8: מה קורה אחרי הטיפול?"
  ]

  const vestibularFAQs = [
    "שאלה 1: מה זה שיקום וסטיבולרי?",
    "שאלה 2: איך מאבחנים בעיות וסטיבולריות?",
    "שאלה 3: מה זה BPPV?",
    "שאלה 4: איך משקפי פרנזל עוזרים?",
    "שאלה 5: כמה זמן נמשך השיקום?",
    "שאלה 6: האם יש תרגילים שאפשר לעשות בבית?",
    "שאלה 7: מה ההבדל בין סחרחורת לבעיות וסטיבולריות?",
    "שאלה 8: האם השיקום תמיד מצליח?"
  ]

  return (
    <>
      {/* Spacer to push content below navbar */}
      <div style={{ height: '50px' }}></div>
      
      {/* Professional Information Section */}
      <section id="professional-info" className="professional-info">
        <h2>מידע מקצועי</h2>
        
        <div className="faq-section" id="pelvic-floor">
          <h3>בתחום רצפת האגן:</h3>
          <div className="faq-list">
            {pelvicFloorFAQs.map((question, index) => (
              <div key={index} className="faq-item">
                {question}
              </div>
            ))}
          </div>
        </div>

        <div className="faq-section" id="vestibular">
          <h3>בתחום הוסטיבולרי:</h3>
          <div className="faq-list">
            {vestibularFAQs.map((question, index) => (
              <div key={index} className="faq-item">
                {question}
              </div>
            ))}
          </div>
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

export default ProfessionalInfo 