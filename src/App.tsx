import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import MainPage from './components/MainPage'
import ProfessionalInfo from './components/ProfessionalInfo'
import { trackPageView } from './utils/analytics'

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()



  // Scroll to top on route change, but not when there's a hash
  useEffect(() => {
    const scrollToTop = () => {
      // Don't scroll to top if there's a hash in the URL
      if (window.location.hash) {
        return
      }
      
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        })
      }, 100)
    }
    
    scrollToTop()
    
    // Track page views with Google Analytics
    trackPageView(location.pathname + location.search)
  }, [location.pathname])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/professional-info" element={<ProfessionalInfo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppContent />
    </Router>
  )
}

export default App
