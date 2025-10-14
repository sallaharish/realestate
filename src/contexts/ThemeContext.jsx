import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('adminTheme')
    return savedTheme === 'dark'
  })

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
  }

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('adminTheme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const theme = {
    darkMode,
    toggleTheme,
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#e0a146',
        light: '#f4c430',
        dark: '#d4943a'
      },
      secondary: {
        main: '#181c22',
        light: '#2c3e50',
        dark: '#0f1419'
      },
      background: {
        default: darkMode ? '#0f1419' : '#f5f5f5',
        paper: darkMode ? '#181c22' : '#ffffff',
        card: darkMode ? '#1e2328' : '#ffffff'
      },
      text: {
        primary: darkMode ? '#ffffff' : '#181c22',
        secondary: darkMode ? '#a0a0a0' : '#666666'
      },
      border: darkMode ? '#2d3748' : '#e0e0e0',
      gold: '#e0a146',
      dark: '#181c22'
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
