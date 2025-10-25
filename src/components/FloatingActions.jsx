import { useEffect, useState } from 'react'
import { Box, Fab, Zoom } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import PhoneIcon from '@mui/icons-material/Phone'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const PHONE = '9170394959'
const WA_LINK = `https://wa.me/91${PHONE}`

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Box sx={{ 
      position: 'fixed', 
      right: { xs: 12, md: 20 }, 
      bottom: { xs: 12, md: 24 }, 
      zIndex: 1400, 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 1.25 
    }}>
      <Fab 
        color="success" 
        aria-label="WhatsApp" 
        size="medium" 
        href={WA_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{
          bgcolor: '#25D366',
          '&:hover': {
            bgcolor: '#128C7E',
            transform: 'scale(1.1)',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)'
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <WhatsAppIcon />
      </Fab>
      <Fab 
        color="primary" 
        aria-label="Call" 
        size="medium" 
        href={`tel:+91${PHONE}`}
        sx={{
          bgcolor: '#e0a146',
          '&:hover': {
            bgcolor: '#d4943a',
            transform: 'scale(1.1)',
            boxShadow: '0 8px 25px rgba(224, 161, 70, 0.4)'
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <PhoneIcon />
      </Fab>
      <Zoom in={showTop}>
        <Fab 
          color="default" 
          aria-label="Scroll to top" 
          size="medium" 
          onClick={scrollToTop} 
          sx={{ 
            bgcolor: 'white',
            color: '#181c22',
            '&:hover': {
              bgcolor: '#f5f5f5',
              transform: 'scale(1.1)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  )
}


