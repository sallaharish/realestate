
import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from './Navbar'
import { Box, Button, Container, Typography } from '@mui/material'
import Building1 from '../assets/building1.jpg'
import Building2 from '../assets/building2.jpg'
import Building3 from '../assets/building3.jpg'

export default function HeroCarousel() {
  const slides = useMemo(() => [
    {
      image: Building1,
      title: 'Rewriting the Narrative.',
      subtitle: 'Redefining the Cityscape of Vizag.',
      cta: 'Schedule Your Site Visit'
    },
    {
      image: Building2,
      title: 'Premium Apartments in Vizag',
      subtitle: 'Luxury gated communities and lifestyle amenities.',
      cta: 'Explore Projects'
    },
    {
      image: Building3, 
      title: 'Crafted For Modern Living',
      subtitle: 'Quality. Comfort. Community.',
      cta: 'Know More'
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
            <Button variant="contained" color="primary" sx={{ borderRadius: 999, px: 2.5, py: 1 }}>{slides[index].cta}</Button>
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
    </Box>
  )
}


