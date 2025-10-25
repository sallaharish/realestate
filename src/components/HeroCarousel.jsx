
import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from './Navbar'
import { Box, Button, Container, Typography, Dialog, DialogTitle, DialogContent, TextField, Snackbar, Alert, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
// Using local carousel images from assets
import carouselImage1 from '../assets/courasal/one.jpg'
// Using a working fallback image
import carouselImage2 from '../assets/courasal/two.jpg'
import carouselImage3 from '../assets/courasal/Making Your Dream Home a Reality.jpg'

export default function HeroCarousel() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('phone', formData.number)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('location', formData.location)
      formDataToSend.append('form_type', 'Book Plot Request')
      formDataToSend.append('project', 'Homepage Carousel')

      const response = await fetch('https://formspree.io/f/xeorlldk', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Thank you for your interest! We will contact you soon.',
          severity: 'success'
        })
        setFormData({ name: '', number: '', email: '', location: '' })
        handleClose()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSnackbar({
        open: true,
        message: 'Sorry, there was an error. Please try again.',
        severity: 'error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }))
  }

  const slides = useMemo(() => [
    {
      image: carouselImage1,
      title: 'Open Plot Investment',
      subtitle: 'Prime land parcels with clear titles and excellent growth potential.',
      cta: 'Book Plots'
    },
    {
      image: carouselImage2,
      title: 'Land Development',
      subtitle: 'Strategic locations with infrastructure development and connectivity.',
      cta: 'Book Plots'
    },
    {
      image: carouselImage3, 
      title: 'Plot Investment Opportunity',
      subtitle: 'Secure your future with premium open plots in growing areas.',
      cta: 'Book Plots'
    }
  ], [])

  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [slides.length])

  return (
    <Box sx={{ position: 'relative', height: { xs: '70vh', md: '100vh' }, overflow: 'hidden' }}>
      {/* Navbar inside carousel */}
      <Navbar />
      {/* Slides */}
      {slides.map((slide, i) => (
        <Box
          key={slide.image}
          sx={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            transition: 'opacity 800ms ease',
            opacity: i === index ? 1 : 0
          }}
          aria-hidden={i !== index}
        />
      ))}
      {/* Overlay */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.55))' }} />
      {/* Content */}
      <Container sx={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ color: 'white', maxWidth: 720 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.25rem', md: '3.75rem' }, lineHeight: 1.08, fontFamily: 'Playfair Display, serif' }}>
            {slides[index].title}
          </Typography>
          <Typography sx={{ mt: 2, opacity: 0.95, fontSize: { xs: '1.15rem', md: '1.25rem' } }}>
            {slides[index].subtitle}
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ borderRadius: 999, px: 2.5, py: 1 }}
              onClick={handleOpen}
            >
              {slides[index].cta}
            </Button>
            <Button variant="outlined" color="inherit">Projects</Button>
          </Box>
        </Box>
      </Container>
      {/* Dots */}
      <Box sx={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 1 }}>
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 10, height: 10, borderRadius: '50%', cursor: 'pointer',
              bgcolor: i === index ? 'white' : 'rgba(255,255,255,0.6)'
            }}
          />
        ))}
      </Box>

      {/* Book Plot Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            bgcolor: '#181c22',
            color: 'white',
            border: '2px solid #e0a146',
            borderRadius: 3
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          color: '#e0a146',
          fontWeight: 600,
          fontSize: '1.5rem'
        }}>
          Book Your Plot
          <IconButton onClick={handleClose} sx={{ color: '#e0a146' }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
            <TextField
              label="Full Name"
              value={formData.name}
              onChange={handleInputChange('name')}
              required
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: '#e0a146',
                  },
                  '&:hover fieldset': {
                    borderColor: '#e0a146',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e0a146',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#e0a146',
                  '&.Mui-focused': {
                    color: '#e0a146',
                  },
                },
              }}
            />
            <TextField
              label="Phone Number"
              value={formData.number}
              onChange={handleInputChange('number')}
              required
              fullWidth
              type="tel"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: '#e0a146',
                  },
                  '&:hover fieldset': {
                    borderColor: '#e0a146',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e0a146',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#e0a146',
                  '&.Mui-focused': {
                    color: '#e0a146',
                  },
                },
              }}
            />
            <TextField
              label="Email Address"
              value={formData.email}
              onChange={handleInputChange('email')}
              required
              fullWidth
              type="email"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: '#e0a146',
                  },
                  '&:hover fieldset': {
                    borderColor: '#e0a146',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e0a146',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#e0a146',
                  '&.Mui-focused': {
                    color: '#e0a146',
                  },
                },
              }}
            />
            <TextField
              label="Preferred Location"
              value={formData.location}
              onChange={handleInputChange('location')}
              required
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: '#e0a146',
                  },
                  '&:hover fieldset': {
                    borderColor: '#e0a146',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e0a146',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#e0a146',
                  '&.Mui-focused': {
                    color: '#e0a146',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{
                bgcolor: '#e0a146',
                color: '#181c22',
                fontWeight: 600,
                py: 1.5,
                mt: 2,
                '&:hover': {
                  bgcolor: '#d4923a'
                },
                '&:disabled': {
                  bgcolor: '#666'
                }
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            bgcolor: snackbar.severity === 'success' ? '#4caf50' : '#f44336',
            color: 'white',
            '& .MuiAlert-icon': { color: 'white' }
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}


