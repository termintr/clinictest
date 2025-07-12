// Google Analytics configuration and helper functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Replace this with your actual Google Analytics Measurement ID
export const GA_MEASUREMENT_ID = 'G-0QJ8TYQPMV'

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID)
  }
}

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName)
}

// Track phone calls
export const trackPhoneCall = (location: string) => {
  trackEvent('phone_call_click', 'engagement', location)
}

// Track WhatsApp clicks
export const trackWhatsAppClick = (location: string) => {
  trackEvent('whatsapp_click', 'engagement', location)
}

// Track Waze clicks
export const trackWazeClick = (location: string) => {
  trackEvent('waze_click', 'engagement', location)
} 