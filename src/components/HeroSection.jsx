import { Box, Container, Typography } from '@mui/material'
import Navbar from './Navbar'

export default function HeroSection({ title, subtitle, bgImage }) {
  return (
    <Box sx={{ position: 'relative', height: { xs: '40vh', md: '55vh' }, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.55))', zIndex: 1 }} />
      <Container sx={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ color: 'white', maxWidth: 720 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.08, fontFamily: 'Playfair Display, serif' }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography sx={{ mt: 2, opacity: 0.95, fontSize: { xs: '1.15rem', md: '1.25rem' } }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  )
}
