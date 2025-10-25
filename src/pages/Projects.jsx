import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent, Button } from '@mui/material'
import { LocationOn, Star, CheckCircle, ArrowForward } from '@mui/icons-material'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'SINGARAI',
    subtitle: 'Premium Residential Plots',
    description: 'DTCP Approved plots near Kotha Valasa with excellent connectivity and modern amenities.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    location: 'Near Kotha Valasa',
    features: ['DTCP Approved', 'RERA Registered', 'Ready to Build'],
    link: '/singarai'
  },
  {
    title: 'GUDDIPA',
    subtitle: 'Eco-Friendly Residential Plots',
    description: 'Sustainable development with green infrastructure and eco-friendly amenities.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    location: 'Near Kotha Valasa',
    features: ['Eco-Friendly', 'Green Infrastructure', 'Sustainable Living'],
    link: '/guddipa'
  },
  {
    title: 'SAMPATHIPURAM',
    subtitle: 'Luxury Residential Plots',
    description: 'Premium luxury plots with world-class amenities and exclusive lifestyle features.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    location: 'Near Anakapalli',
    features: ['Luxury Amenities', 'Premium Location', 'Exclusive Lifestyle'],
    link: '/sampathipuram'
  }
]

export default function Projects() {
  const gold = '#e0a146';
  const dark = '#181c22';

  return (
    <Box sx={{ bgcolor: dark, color: 'white', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(24, 28, 34, 0.95) 0%, rgba(224, 161, 70, 0.1) 100%)',
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
          <Typography variant="h1" sx={{ 
            color: gold, 
            fontWeight: 400,
            fontSize: { xs: '2.5rem', md: '4rem' },
            lineHeight: 1.1,
            mb: 3,
            fontFamily: '"Playfair Display", serif',
            letterSpacing: '0.05em'
          }}>
            OUR PROJECTS
          </Typography>
          <Typography sx={{ 
            color: 'white', 
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto',
            opacity: 0.9
          }}>
            Discover our premium residential plot developments across Andhra Pradesh
          </Typography>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Container sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={project.title}>
              <Card sx={{
                height: '100%',
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.05) 0%, rgba(24, 28, 34, 0.8) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${gold}40`,
                  border: `2px solid ${gold}`,
                  '& .project-image': {
                    transform: 'scale(1.05)'
                  }
                }
              }}>
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <Box
                    className="project-image"
                    sx={{
                      backgroundImage: `url(${project.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: 250,
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    right: 16
                  }}>
                    <Typography variant="h5" sx={{ 
                      color: gold, 
                      fontWeight: 700, 
                      mb: 1,
                      fontSize: '1.5rem'
                    }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{ 
                      color: 'white', 
                      fontWeight: 600,
                      fontSize: '1rem',
                      opacity: 0.9
                    }}>
                      {project.subtitle}
                    </Typography>
                  </Box>
                </Box>
                
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn sx={{ color: gold, mr: 1, fontSize: 20 }} />
                    <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
                      {project.location}
                    </Typography>
                  </Box>
                  
                  <Typography sx={{ 
                    color: 'white', 
                    opacity: 0.9, 
                    mb: 3,
                    lineHeight: 1.6,
                    fontSize: '15px'
                  }}>
                    {project.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.features.map((feature, idx) => (
                      <Box key={idx} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1.5,
                        py: 0.5,
                        bgcolor: 'rgba(224, 161, 70, 0.1)',
                        borderRadius: 2,
                        border: `1px solid ${gold}40`
                      }}>
                        <CheckCircle sx={{ color: gold, fontSize: 16 }} />
                        <Typography sx={{ color: 'white', fontSize: '12px', fontWeight: 500 }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  
                  <Button
                    component={Link}
                    to={project.link}
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      bgcolor: gold,
                      color: dark,
                      fontWeight: 600,
                      py: 1.5,
                      px: 3,
                      borderRadius: 2,
                      width: '100%',
                      '&:hover': {
                        bgcolor: '#d4943a',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 25px ${gold}40`
                      }
                    }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}


