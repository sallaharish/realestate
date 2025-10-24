
import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from './Navbar'
import { Box, Button, Container, Typography } from '@mui/material'
// Using high-quality open plot/land development images
const Building1 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
const Building2 = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
const Building3 = 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'

export default function HeroCarousel() {
  const slides = useMemo(() => [
    {
      image: Building1,
      title: 'Open Plot Investment',
      subtitle: 'Prime land parcels with clear titles and excellent growth potential.',
      cta: 'View Plots'
    },
    {
      image: Building2,
      title: 'Land Development',
      subtitle: 'Strategic locations with infrastructure development and connectivity.',
      cta: 'Explore Land'
    },
    {
      image: Building3, 
      title: 'Plot Investment Opportunity',
      subtitle: 'Secure your future with premium open plots in growing areas.',
      cta: 'Book Plot'
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


