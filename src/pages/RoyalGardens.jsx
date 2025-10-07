import { Box, Container, Grid, Typography, Button, Card, CardContent, TextField, Accordion, AccordionSummary, AccordionDetails, Avatar, IconButton, Divider } from '@mui/material'
import { ExpandMore, LocationOn, Email, Phone, Star, CheckCircle, WhatsApp, Call, ArrowForward, Business } from '@mui/icons-material'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RoyalGardens() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
  ];

  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <Box sx={{ bgcolor: dark, color: 'white' }}>
      <Navbar />

      {/* Project Hero Section */}
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
        <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography variant="h1" sx={{
            color: gold,
            fontWeight: 400,
            fontSize: { xs: '3rem', md: '4.5rem' },
            lineHeight: 1.1,
            mb: 2,
            fontFamily: '"Playfair Display", serif',
            letterSpacing: '0.05em'
          }}>
            ROYAL GARDENS
          </Typography>
          <Typography variant="h4" sx={{
            color: 'white',
            fontSize: { xs: '1.2rem', md: '1.8rem' },
            mb: 3,
            opacity: 0.9
          }}>
            Luxury Residential Plots
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" sx={{ bgcolor: gold, color: dark, '&:hover': { bgcolor: '#d4943a' } }}>DTCP Approved</Button>
            <Button variant="contained" sx={{ bgcolor: gold, color: dark, '&:hover': { bgcolor: '#d4943a' } }}>RERA Registered</Button>
            <Button variant="contained" sx={{ bgcolor: gold, color: dark, '&:hover': { bgcolor: '#d4943a' } }}>Luxury Living</Button>
          </Box>
        </Container>
      </Box>

      {/* Project Description Section */}
      <Box sx={{ 
        py: 8, 
        bgcolor: dark,
        color: 'white',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              ABOUT ROYAL GARDENS
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto'
            }}>
              Discover the perfect blend of luxury living and strategic location in Hyderabad's most prestigious corridor
            </Typography>
          </Box>

          {/* Single Centered Image */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Box sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: `0 25px 50px rgba(0,0,0,0.4)`,
              border: `3px solid ${gold}`,
              maxWidth: '800px',
              mx: 'auto',
              transition: 'all 0.4s ease-out',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: `0 35px 70px rgba(0,0,0,0.5), 0 0 40px ${gold}30`,
                '& .overlay-text': {
                  opacity: 1,
                  transform: 'translateY(0)'
                }
              }
            }}>
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop"
                alt="Royal Gardens Luxury Living"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                p: 3,
                color: 'white',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.3s ease',
                className: 'overlay-text'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Luxury Living
                </Typography>
                <Typography sx={{ opacity: 0.9 }}>
                  Premium development with world-class amenities
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Content Section - Two Column Layout */}
          <Grid container spacing={6} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Typography sx={{ 
                color: 'white', 
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 3,
                opacity: 0.9
              }}>
                Royal Gardens represents the pinnacle of luxury residential development in Hyderabad's fastest-growing corridor. This DTCP approved and RERA registered project offers meticulously planned plots with world-class infrastructure and premium amenities.
              </Typography>
              <Typography sx={{ 
                color: 'white', 
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 4,
                opacity: 0.9
              }}>
                With excellent connectivity to IT hubs, educational institutions, and healthcare facilities, Royal Gardens presents an ideal opportunity for both investors and end-users looking to build their dream luxury homes.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ 
                  color: gold, 
                  fontWeight: 600, 
                  mb: 3,
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}>
                  Key Highlights
                </Typography>
                <Grid container spacing={2}>
                  {[
                    'DTCP Approved Plots',
                    'RERA Registered',
                    'Luxury Amenities',
                    'Premium Location',
                    'World-Class Infrastructure',
                    'Investment Potential'
                  ].map((feature, index) => (
                    <Grid item xs={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: gold
                        }} />
                        <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px' }}>
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" sx={{ bgcolor: gold, color: dark, fontWeight: 600 }}>
                  View Layout
                </Button>
                <Button variant="outlined" sx={{ borderColor: gold, color: gold, fontWeight: 600 }}>
                  Download Brochure
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Layout Section */}
      <Box sx={{
        bgcolor: dark,
        color: 'white',
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
        <Container>
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
              PROJECT LAYOUT
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Luxurious layout with premium amenities and exclusive lifestyle features
            </Typography>
          </Box>

          {/* Master Plan Image */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Box sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: `0 25px 50px rgba(0,0,0,0.4)`,
              maxWidth: '900px',
              mx: 'auto'
            }}>
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop"
                alt="Master Plan"
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover'
                }}
              />
              <Box sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                bgcolor: 'rgba(0,0,0,0.8)',
                borderRadius: 3,
                p: 2,
                color: 'white',
                backdropFilter: 'blur(10px)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Luxury Master Plan
                </Typography>
                <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                  Premium Development Layout
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Features Grid - Perfectly Centered & Uniform */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%',
            px: 2
          }}>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3,
              maxWidth: '1200px',
              width: '100%'
            }}>
              {/* Infrastructure */}
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 3,
                height: '300px',
                width: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${gold}40`
                }
              }}>
                <Box>
                  <Box sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: gold,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <LocationOn sx={{ fontSize: 24, color: dark }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2, fontSize: '18px' }}>
                    Premium Infrastructure
                  </Typography>
                </Box>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '15px', lineHeight: 1.5 }}>
                  Wide roads, premium drainage, luxury lighting, premium water & electricity connections
                </Typography>
              </Card>

              {/* Amenities */}
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 3,
                height: '300px',
                width: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${gold}40`
                }
              }}>
                <Box>
                  <Box sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: gold,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Star sx={{ fontSize: 24, color: dark }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2, fontSize: '18px' }}>
                    Luxury Amenities
                  </Typography>
                </Box>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '15px', lineHeight: 1.5 }}>
                  Private clubhouse, concierge services, premium landscaping, exclusive security
                </Typography>
              </Card>

              {/* Quality Assurance */}
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 3,
                height: '300px',
                width: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${gold}40`
                }
              }}>
                <Box>
                  <Box sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: gold,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <CheckCircle sx={{ fontSize: 24, color: dark }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2, fontSize: '18px' }}>
                    Premium Quality
                  </Typography>
                </Box>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '15px', lineHeight: 1.5 }}>
                  DTCP approved, RERA registered, premium materials, luxury construction standards
                </Typography>
              </Card>

              {/* Investment Potential */}
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 3,
                height: '300px',
                width: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${gold}40`
                }
              }}>
                <Box>
                  <Box sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: gold,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Business sx={{ fontSize: 24, color: dark }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2, fontSize: '18px' }}>
                    Investment Potential
                  </Typography>
                </Box>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '15px', lineHeight: 1.5 }}>
                  Prime location, excellent connectivity, high appreciation potential
                </Typography>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box sx={{
        bgcolor: dark,
        color: 'white',
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
        <Container>
          <Typography variant="h3" sx={{ color: gold, fontWeight: 600, mb: 6, textAlign: 'center' }}>
            Project Gallery
          </Typography>
          
          {/* Main Image */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Box sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: `0 25px 50px rgba(0,0,0,0.4)`,
              maxWidth: '1000px',
              mx: 'auto',
              height: '500px'
            }}>
              <img 
                src={mainImage} 
                alt="Main Project View" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block' 
                }} 
              />
            </Box>
          </Box>

          {/* Thumbnail Grid */}
          <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
            <Grid container spacing={2}>
              {galleryImages.map((image, index) => (
                <Grid item xs={12/5} key={index}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: mainImage === image ? `3px solid ${gold}` : '3px solid transparent',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: `0 10px 25px rgba(0,0,0,0.3)`,
                        border: `3px solid ${gold}`
                      }
                    }}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`} 
                      style={{ 
                        width: '100%', 
                        height: '120px', 
                        objectFit: 'cover',
                        display: 'block' 
                      }} 
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Location Highlights Section */}
      <Box sx={{
        bgcolor: dark,
        color: 'white',
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
        <Container>
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
              LOCATION HIGHLIGHTS
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Strategically located with excellent connectivity to major destinations
            </Typography>
          </Box>

          {/* Map Section */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: `0 25px 50px rgba(0,0,0,0.4)`,
              maxWidth: '1000px',
              mx: 'auto'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.1234567!3d17.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb123456789abc%3A0x1234567890abcdef!2sShadnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1635789123456!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Gardens Location"
              />
              <Box sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                bgcolor: 'rgba(0,0,0,0.8)',
                borderRadius: 3,
                p: 2,
                color: 'white',
                backdropFilter: 'blur(10px)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Royal Gardens Location
                </Typography>
                <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                  Luxury Location in Hyderabad
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Location Cards Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: 'repeat(5, 1fr)' },
            gap: 3,
            maxWidth: '1000px',
            mx: 'auto'
          }}>
            {[
              { name: 'Airport', distance: '30 km', time: '40 mins', icon: <LocationOn />, category: 'Transport' },
              { name: 'Railway Station', distance: '6 km', time: '12 mins', icon: <LocationOn />, category: 'Transport' },
              { name: 'Schools', distance: '1 km', time: '3 mins', icon: <Star />, category: 'Education' },
              { name: 'Hospitals', distance: '4 km', time: '8 mins', icon: <Star />, category: 'Healthcare' },
              { name: 'Shopping Mall', distance: '5 km', time: '10 mins', icon: <Star />, category: 'Shopping' }
            ].map((location, index) => (
              <Card key={index} sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 3,
                height: '180px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 15px 30px rgba(0,0,0,0.3), 0 0 20px ${gold}40`
                }
              }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: gold,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      {location.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ color: gold, fontWeight: 600, fontSize: '16px' }}>
                        {location.name}
                      </Typography>
                      <Typography sx={{ color: 'white', opacity: 0.7, fontSize: '12px' }}>
                        {location.category}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
                      {location.distance}
                    </Typography>
                    <Typography sx={{ color: gold, fontWeight: 600, fontSize: '14px' }}>
                      {location.time}
                    </Typography>
                  </Box>
                </Card>
            ))}
          </Box>

          {/* Connectivity Info */}
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Card sx={{
              background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
              border: `2px solid ${gold}`,
              borderRadius: 4,
              p: 4,
              maxWidth: '800px',
              mx: 'auto'
            }}>
              <Typography variant="h5" sx={{ color: gold, fontWeight: 600, mb: 3 }}>
                Premium Connectivity
              </Typography>
              <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '16px', lineHeight: 1.6 }}>
                Royal Gardens is strategically located with easy access to major IT hubs, educational institutions, 
                healthcare facilities, and transportation hubs. The project offers excellent connectivity through 
                premium roads and upcoming metro connectivity for luxury living.
              </Typography>
            </Card>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{
        bgcolor: dark,
        color: 'white',
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
        <Container>
          <Typography variant="h3" sx={{ color: gold, fontWeight: 600, mb: 6, textAlign: 'center' }}>
            Frequently Asked Questions
          </Typography>
          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            {[
              { question: 'What luxury amenities are included?', answer: 'Royal Gardens includes concierge services, private clubhouse, premium landscaping, exclusive security, and VIP lifestyle amenities.' },
              { question: 'Are there any additional charges for luxury features?', answer: 'All luxury amenities are included in the plot price. There are no additional charges for premium features and services.' },
              { question: 'What is the plot size available?', answer: 'Plots are available in various sizes, starting from 300 sq yards to 500 sq yards, designed for luxury living.' },
              { question: 'Is there a payment plan available?', answer: 'Yes, we offer flexible payment plans with easy installments over 12-24 months, making luxury living accessible.' },
            ].map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  bgcolor: 'rgba(224, 161, 70, 0.1)',
                  border: `1px solid ${gold}`,
                  borderRadius: 2,
                  mb: 2,
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { margin: '0 0 16px 0' }
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore sx={{ color: gold }} />}>
                  <Typography sx={{ color: gold, fontWeight: 700, fontSize: { xs: '16px', md: '18px' } }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography sx={{ color: 'white', opacity: 0.8, fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.6 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* GET IN TOUCH Section */}
      <Box sx={{
        bgcolor: dark,
        color: 'white',
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
        <Container>
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
              GET IN TOUCH
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Ready to invest in Royal Gardens? Get in touch with our expert team today
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'stretch',
            width: '100%',
            px: 2,
            gap: 3
          }}>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
              maxWidth: '1000px',
              width: '100%'
            }}>
              {/* Request Call Back Card */}
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 4,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '450px'
              }}>
                <Box>
                  <Phone sx={{ fontSize: 60, color: gold, mb: 3 }} />
                  <Typography variant="h5" sx={{ color: gold, fontWeight: 600, mb: 2 }}>
                    Request a Call Back
                  </Typography>
                  <Typography sx={{ color: 'white', opacity: 0.9, mb: 3 }}>
                    Fill out the form and our expert team will contact you shortly
                  </Typography>
                  
                  <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      placeholder="Your Name"
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': { 
                          bgcolor: 'rgba(255,255,255,0.1)', 
                          color: 'white', 
                          '& fieldset': { borderColor: gold }, 
                          '&:hover fieldset': { borderColor: gold }, 
                          '&.Mui-focused fieldset': { borderColor: gold }
                        },
                        '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.7)', opacity: 1 }
                      }}
                    />
                    <TextField
                      placeholder="Your Phone Number"
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': { 
                          bgcolor: 'rgba(255,255,255,0.1)', 
                          color: 'white', 
                          '& fieldset': { borderColor: gold }, 
                          '&:hover fieldset': { borderColor: gold }, 
                          '&.Mui-focused fieldset': { borderColor: gold }
                        },
                        '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.7)', opacity: 1 }
                      }}
                    />
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: gold,
                      color: dark,
                      fontWeight: 600,
                      py: 2,
                      fontSize: '16px',
                      '&:hover': { bgcolor: '#d4943a' }
                    }}
                  >
                    Request Call Back
                  </Button>
                  <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '12px', mt: 1 }}>
                    We'll call you within 30 minutes
                  </Typography>
                </Box>
              </Card>

              {/* Contact & Information Card */}
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 4,
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '450px'
              }}>
                <Box>
                  <WhatsApp sx={{ fontSize: 60, color: gold, mb: 3 }} />
                  <Typography variant="h5" sx={{ color: gold, fontWeight: 600, mb: 2 }}>
                    Contact & Information
                  </Typography>
                  <Typography sx={{ color: 'white', opacity: 0.9, mb: 3 }}>
                    Multiple ways to connect with us for instant support
                  </Typography>
                  
                  {/* Contact Options */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <Phone sx={{ color: gold, mr: 1, fontSize: 20 }} />
                      <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px' }}>
                        Direct Call: +91 99026 51666
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <Email sx={{ color: gold, mr: 1, fontSize: 20 }} />
                      <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px' }}>
                        Email: info@suryaprimeventures.com
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                      <LocationOn sx={{ color: gold, mr: 1, fontSize: 20 }} />
                      <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px' }}>
                        Office: Hyderabad, Telangana
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#25D366',
                      color: 'white',
                      fontWeight: 600,
                      py: 2,
                      fontSize: '16px',
                      '&:hover': { bgcolor: '#128C7E' }
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: gold,
                      color: gold,
                      fontWeight: 600,
                      py: 1.5,
                      fontSize: '14px',
                      '&:hover': { 
                        borderColor: gold,
                        bgcolor: 'rgba(224, 161, 70, 0.1)'
                      }
                    }}
                  >
                    Schedule Site Visit
                  </Button>
                  <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '12px', mt: 1 }}>
                    Available 9 AM - 7 PM (Mon-Sat)
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}