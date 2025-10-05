import { useEffect, useState } from 'react'
import { Box, Fab, Zoom } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import PhoneIcon from '@mui/icons-material/Phone'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const PHONE = '9902651666'
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
    <Box sx={{ position: 'fixed', right: { xs: 12, md: 20 }, bottom: { xs: 12, md: 24 }, zIndex: 1400, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
      <Fab color="success" aria-label="WhatsApp" size="medium" href={WA_LINK} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
      </Fab>
      <Fab color="primary" aria-label="Call" size="medium" href={`tel:+91${PHONE}`}>
        <PhoneIcon />
      </Fab>
      <Zoom in={showTop}>
        <Fab color="default" aria-label="Scroll to top" size="medium" onClick={scrollToTop} sx={{ bgcolor: 'white' }}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  )
}


