import fullLogo from '../../public/assets/fulllogo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={fullLogo} alt="גלית ריכטר לוגו" style={{ height: '140px', objectFit: 'contain' }} />
        </div>
        <div style={{ textAlign: 'center', marginTop: 0, marginBottom: 0, fontSize: '1rem', lineHeight: 1 }}>
          עמק יזרעאל 14, קדימה | 2025 ©
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
          <span><a href="mailto:galitush1@gmail.com">galitush1@gmail.com</a></span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
          <span><a href="tel:+972526598076">052-6598076</a></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer 