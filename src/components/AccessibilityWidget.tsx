import { useState } from 'react'
import nagishIcon from '../../public/assets/nagish.svg'

interface AccessibilityWidgetProps {
  onFontSizeChange: (size: number) => void
  onContrastChange: (contrast: string) => void
  onGrayscaleToggle: () => void
}

function AccessibilityWidget({ onFontSizeChange, onContrastChange, onGrayscaleToggle }: AccessibilityWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentFontSize, setCurrentFontSize] = useState(16)
  const [isGrayscale, setIsGrayscale] = useState(false)

  const handleFontSizeChange = (increment: number) => {
    const newSize = Math.max(12, Math.min(24, currentFontSize + increment))
    setCurrentFontSize(newSize)
    onFontSizeChange(newSize)
  }

  const handleContrastChange = (contrast: string) => {
    onContrastChange(contrast)
  }

  const handleGrayscaleToggle = () => {
    setIsGrayscale(!isGrayscale)
    onGrayscaleToggle()
  }

  const handleToggle = () => {
    console.log('Button clicked, current isOpen:', isOpen)
    const newState = !isOpen
    console.log('Setting isOpen to:', newState)
    setIsOpen(newState)
  }

  console.log('Rendering widget, isOpen:', isOpen)

  return (
    <div className="accessibility-widget">
      {/* Main accessibility button */}
      <button 
        className="accessibility-float"
        onClick={handleToggle}
        aria-label="הגדרות נגישות"
        title="הגדרות נגישות"
      >
        <img src={nagishIcon} alt="נגישות" width="50" height="50" />
      </button>

      {/* Accessibility menu */}
      {isOpen && (
        <div className="accessibility-menu">
          <div className="accessibility-menu-header">
            <h3>הגדרות נגישות</h3>
            <button 
              onClick={() => setIsOpen(false)}
              aria-label="סגור"
              className="close-button"
            >
              ✕
            </button>
          </div>
          
          <div className="accessibility-option">
            <label>גודל טקסט</label>
            <div className="font-size-controls">
              <button 
                onClick={() => handleFontSizeChange(-2)}
                aria-label="הקטן טקסט"
                className="size-button"
              >
                A-
              </button>
              <span className="current-size">{currentFontSize}px</span>
              <button 
                onClick={() => handleFontSizeChange(2)}
                aria-label="הגדל טקסט"
                className="size-button"
              >
                A+
              </button>
            </div>
          </div>

          <div className="accessibility-option">
            <label>ניגודיות</label>
            <div className="contrast-controls">
              <button 
                onClick={() => handleContrastChange('normal')}
                className="contrast-button"
              >
                רגיל
              </button>
              <button 
                onClick={() => handleContrastChange('high')}
                className="contrast-button"
              >
                גבוה
              </button>
            </div>
          </div>

          <div className="accessibility-option">
            <label>צבעים</label>
            <button 
              onClick={handleGrayscaleToggle}
              className={`grayscale-button ${isGrayscale ? 'active' : ''}`}
            >
              {isGrayscale ? 'החזר צבעים' : 'שחור-לבן'}
            </button>
          </div>

          <div className="accessibility-option">
            <button 
              onClick={() => {
                document.documentElement.style.fontSize = '16px'
                document.documentElement.style.filter = 'none'
                setCurrentFontSize(16)
                setIsGrayscale(false)
                setIsOpen(false)
              }}
              className="reset-button"
            >
              איפוס הגדרות
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccessibilityWidget 