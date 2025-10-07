import { Box, Container, Grid, Typography, Button } from '@mui/material'
import Navbar from '../components/Navbar'

const images = Array.from({ length: 12 }).map((_, i) => `https://picsum.photos/seed/gallery-${i}/600/400`)

export default function Gallery() {
  const gold = '#e0a146';
  const dark = '#181c22';

  return (
    <Box sx={{ bgcolor: dark, color: 'white' }}>
      <Navbar />
      
      {/* Gallery Hero Section */}
      <Box sx={{
        position: 'relative',
        py: { xs: 10, md: 15 },
        backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0,0,0,0.7)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}>
        <Container sx={{ position: 'relative', zIndex: 3 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h1" sx={{
              color: gold,
              fontWeight: 400,
              fontSize: { xs: '3rem', md: '4.5rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2
            }}>
              PROJECT GALLERY
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '18px', md: '22px' },
              lineHeight: 1.6,
              maxWidth: '800px',
              mx: 'auto',
              mb: 4
            }}>
              Explore our premium residential projects through stunning visuals and detailed imagery
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: gold,
                color: dark,
                fontWeight: 600,
                py: 2,
                px: 4,
                fontSize: '16px',
                borderRadius: 3,
                boxShadow: '0 8px 20px rgba(224, 161, 70, 0.3)',
                '&:hover': {
                  bgcolor: '#d4943a',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 25px rgba(224, 161, 70, 0.4)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Gallery Grid Section */}
      <Box sx={{
        bgcolor: dark,
        py: { xs: 6, md: 8 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}>
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{
              color: gold,
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2
            }}>
              FEATURED IMAGES
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Discover the beauty and quality of our residential developments
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {images.map((src, idx) => (
              <Grid item xs={6} sm={4} md={3} key={idx}>
                <Box sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 200,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: `2px solid transparent`,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: `0 15px 30px rgba(0,0,0,0.4), 0 0 20px ${gold}40`,
                    border: `2px solid ${gold}`
                  }
                }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}


