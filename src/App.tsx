import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import MainPage from './components/MainPage'
import ProfessionalInfo from './components/ProfessionalInfo'

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Handle hash-based routing from 404.html redirect
    const hash = window.location.hash
    if (hash && hash.startsWith('#/')) {
      const path = hash.substring(1) // Remove the # symbol
      navigate(path)
      // Clear the hash from the URL
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [navigate])

  // Scroll to top on route change and page load
  useEffect(() => {
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        })
      }, 100)
    }
    
    scrollToTop()
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
