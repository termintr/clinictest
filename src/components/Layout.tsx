import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import hamburgerImg from '../../public/assets/Hamburger.png'
import topbarLogo from '../../public/assets/topbarlogo.png'
import wazeImg from '../../public/assets/waze.png'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [professionalInfoExpanded, setProfessionalInfoExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const handleLogoClick = () => {
    navigate('/')
    setMenuOpen(false)
    // Scroll to top when returning to main page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigation = (path: string) => {
    if (path.includes('#')) {
      // Handle anchor links for main page sections
      const [route, anchor] = path.split('#')
      navigate(route)
      setMenuOpen(false)
      
      // Wait for navigation to complete, then scroll to anchor
      setTimeout(() => {
        const element = document.getElementById(anchor)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Handle regular page navigation
      navigate(path)
      setMenuOpen(false)
    }
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
        
        <div className="navbar-brand" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={topbarLogo} alt="גלית ריכטר" />
        </div>

        <button className="hamburger" aria-label="תפריט" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={hamburgerImg} alt="תפריט" />
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="menu-container">
          <button className="menu-close-button" onClick={() => setMenuOpen(false)} aria-label="סגור תפריט">
            ✕
          </button>
          
          <div className="menu-content">
            <div className="menu-item">
              <a href="#" onClick={() => handleNavigation('/')}>ראשי</a>
            </div>
            
            <div className="menu-separator"></div>
            
            <div className="menu-item">
              <a href="#" onClick={() => handleNavigation('/#about')}>אודות</a>
            </div>
            
            <div className="menu-separator"></div>
            
            <div className="menu-item">
              <a href="#" onClick={() => handleNavigation('/#services')}>שירותים</a>
            </div>
            
            <div className="menu-separator"></div>
            
            <div className="menu-item">
              <a href="#" onClick={() => handleNavigation('/#techniques')}>טכניקות טיפוליות</a>
            </div>
            
            <div className="menu-separator"></div>
            
            <div className="menu-item">
              <a href="#" onClick={() => handleNavigation('/#testimonials')}>המלצות</a>
            </div>
            
            <div className="menu-separator"></div>
            
            <div className="menu-item">
              <a href="#" onClick={(e) => {
                e.preventDefault()
                setProfessionalInfoExpanded(!professionalInfoExpanded)
              }}>
                מידע מקצועי
                <span className="menu-arrow">
                  {professionalInfoExpanded ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                  )}
                </span>
              </a>
              {professionalInfoExpanded && (
                <div className="menu-submenu">
                  <div className="menu-subitem">
                    <a href="#" onClick={() => {
                      handleNavigation('/professional-info#pelvic-floor')
                      setProfessionalInfoExpanded(false)
                    }}>בתחום רצפת האגן</a>
                  </div>
                  <div className="menu-subitem">
                    <a href="#" onClick={() => {
                      handleNavigation('/professional-info#vestibular')
                      setProfessionalInfoExpanded(false)
                    }}>בתחום הוסטיבולרי</a>
                  </div>
                </div>
              )}
            </div>
            
            <div className="menu-separator"></div>
            
            <div className="menu-item">
              <a href="#" onClick={() => {
                window.open('https://www.ipts.org.il/?CategoryID=721', '_blank', 'noopener,noreferrer')
                setMenuOpen(false)
              }}>החזרים מביטוחים</a>
            </div>
            
            <div className="menu-separator"></div>
            
            <div className="menu-item">
              <a href="#" onClick={() => handleNavigation('/#contact')}>צור קשר</a>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default Layout 