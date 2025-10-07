import { Box, Container, Grid, Typography, Button, Card, CardContent, TextField, Accordion, AccordionSummary, AccordionDetails, Chip, Avatar, IconButton } from '@mui/material'
import { ExpandMore, LocationOn, Email, Phone, Star, Business, Timeline, CheckCircle, PhotoLibrary, Map, Call, WhatsApp, Share, Favorite } from '@mui/icons-material'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Suketana() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1570129477492-45c00371b117?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop'
  ];

  return (
    <Box>
      <Navbar />
      
      {/* Project Hero Section */}
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
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h1" sx={{ 
              color: gold, 
              fontWeight: 400,
              fontSize: { xs: '3rem', md: '4rem' },
              lineHeight: 1.1,
              mb: 2,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em'
            }}>
              SUKETANA
            </Typography>
            <Typography sx={{ 
              color: 'white', 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
              opacity: 0.9
            }}>
              Premium Residential Plots in Prime Location
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Chip label="DTCP Approved" sx={{ bgcolor: gold, color: dark, fontWeight: 600 }} />
              <Chip label="RERA Registered" sx={{ bgcolor: gold, color: dark, fontWeight: 600 }} />
              <Chip label="Ready to Build" sx={{ bgcolor: gold, color: dark, fontWeight: 600 }} />
            </Box>
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
              ABOUT SUKETANA
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto'
            }}>
              Discover the perfect blend of modern living and strategic location in Hyderabad's most promising corridor
            </Typography>
          </Box>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
                mb: 4
              }}>
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                  alt="Suketana Project"
                  style={{
                    width: '100%',
                    height: '300px',
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
                  color: 'white'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Premium Location
                  </Typography>
                  <Typography sx={{ opacity: 0.9 }}>
                    Strategically located with excellent connectivity
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{
                  flex: 1,
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: `0 15px 30px rgba(0,0,0,0.2)`
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1570129477492-45c00371b117?q=80&w=1000&auto=format&fit=crop"
                    alt="Infrastructure"
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <Box sx={{
                  flex: 1,
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: `0 15px 30px rgba(0,0,0,0.2)`
                }}>
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop"
                    alt="Development"
                    style={{
                      width: '100%',
                      height: '150px',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ 
                color: gold, 
                fontWeight: 600, 
                mb: 4,
                fontSize: { xs: '1.8rem', md: '2.2rem' }
              }}>
                Premium Residential Excellence
              </Typography>
              <Typography sx={{ 
                color: 'white', 
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 3,
                opacity: 0.9
              }}>
                Suketana represents the pinnacle of residential plot development in Hyderabad's fastest-growing corridor. This DTCP approved and RERA registered project offers meticulously planned plots with world-class infrastructure and amenities.
              </Typography>
              <Typography sx={{ 
                color: 'white', 
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 4,
                opacity: 0.9
              }}>
                With excellent connectivity to IT hubs, educational institutions, and healthcare facilities, Suketana presents an ideal opportunity for both investors and end-users looking to build their dream homes.
              </Typography>
              
              {/* Key Features */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 3 }}>
                  Key Highlights
                </Typography>
                <Grid container spacing={2}>
                  {[
                    'DTCP Approved Plots',
                    'RERA Registered',
                    'Prime Location',
                    'Excellent Connectivity',
                    'Modern Infrastructure',
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
              Meticulously planned layout with wide roads, green spaces, and modern amenities
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
                src="https://images.unsplash.com/photo-1570129477492-45c00371b117?q=80&w=1000&auto=format&fit=crop"
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
                  Master Plan
                </Typography>
                <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                  Comprehensive Development Layout
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Features Grid */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 4,
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${gold}40`
                }
              }}>
                <Box sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: gold,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3
                }}>
                  <LocationOn sx={{ color: dark, fontSize: 30 }} />
                </Box>
                <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2 }}>
                  Infrastructure
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px', lineHeight: 1.6 }}>
                  Wide roads, underground drainage, street lighting, water & electricity connections
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 4,
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${gold}40`
                }
              }}>
                <Box sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: gold,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3
                }}>
                  <Star sx={{ color: dark, fontSize: 30 }} />
                </Box>
                <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2 }}>
                  Amenities
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px', lineHeight: 1.6 }}>
                  Green spaces, parks, security surveillance, clubhouse facilities
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 4,
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${gold}40`
                }
              }}>
                <Box sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: gold,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3
                }}>
                  <CheckCircle sx={{ color: dark, fontSize: 30 }} />
                </Box>
                <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2 }}>
                  Quality Assurance
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px', lineHeight: 1.6 }}>
                  DTCP approved, RERA registered, quality materials, professional construction
                </Typography>
              </Card>
            </Grid>
          </Grid>
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
              PROJECT GALLERY
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Explore the beauty and development progress of Suketana
            </Typography>
          </Box>

          {/* Main Image */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Box sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
              maxWidth: '800px',
              mx: 'auto'
            }}>
              <img
                src={galleryImages[selectedImage]}
                alt={`Gallery ${selectedImage + 1}`}
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
                bgcolor: 'rgba(0,0,0,0.7)',
                borderRadius: 2,
                p: 1,
                color: 'white'
              }}>
                <Typography variant="body2">
                  {selectedImage + 1} / {galleryImages.length}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Thumbnail Grid */}
          <Grid container spacing={2} justifyContent="center">
            {galleryImages.map((image, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Box
                  onClick={() => setSelectedImage(index)}
                  sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: selectedImage === index ? `3px solid ${gold}` : '3px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      border: `3px solid ${gold}`
                    }
                  }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '120px',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
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
                title="Suketana Location"
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
                  Suketana Location
                </Typography>
                <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                  Prime Location in Hyderabad
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Location Cards Grid */}
          <Grid container spacing={3}>
            {[
              { name: 'HITEC City', distance: '15 km', time: '25 mins', icon: <Business />, category: 'IT Hub' },
              { name: 'Gachibowli', distance: '12 km', time: '20 mins', icon: <Business />, category: 'IT Hub' },
              { name: 'Airport', distance: '35 km', time: '45 mins', icon: <LocationOn />, category: 'Transport' },
              { name: 'Railway Station', distance: '8 km', time: '15 mins', icon: <LocationOn />, category: 'Transport' },
              { name: 'Schools', distance: '2 km', time: '5 mins', icon: <Star />, category: 'Education' },
              { name: 'Hospitals', distance: '5 km', time: '10 mins', icon: <Star />, category: 'Healthcare' }
            ].map((location, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{
                  background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                  border: `2px solid ${gold}`,
                  borderRadius: 4,
                  p: 3,
                  height: '100%',
                  transition: 'all 0.3s ease',
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
              </Grid>
            ))}
          </Grid>

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
                Excellent Connectivity
              </Typography>
              <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '16px', lineHeight: 1.6 }}>
                Suketana is strategically located with easy access to major IT hubs, educational institutions, 
                healthcare facilities, and transportation hubs. The project offers excellent connectivity through 
                well-maintained roads and upcoming metro connectivity.
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
              FREQUENTLY ASKED QUESTIONS
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Common questions about Suketana project
            </Typography>
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {[
              {
                question: 'What is the plot size available in Suketana?',
                answer: 'Suketana offers plots ranging from 1200 sq ft to 2400 sq ft, catering to different budget requirements and family needs.'
              },
              {
                question: 'What are the payment plans available?',
                answer: 'We offer flexible payment plans starting from 10% booking amount. The remaining amount can be paid in installments over 12-24 months with attractive interest rates.'
              },
              {
                question: 'Is the project DTCP and RERA approved?',
                answer: 'Yes, Suketana is fully DTCP approved and RERA registered, ensuring complete legal compliance and protection for investors.'
              },
              {
                question: 'What amenities are provided in the project?',
                answer: 'The project includes wide roads, underground drainage, street lighting, water supply, electricity, parks, security, and clubhouse facilities.'
              },
              {
                question: 'When will the project be ready for construction?',
                answer: 'The project is ready for construction with all basic infrastructure in place. You can start building immediately after plot registration.'
              }
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
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: '0 0 16px 0',
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: gold }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      margin: '16px 0',
                    },
                    '&.Mui-expanded': {
                      minHeight: 'auto',
                    }
                  }}
                >
                  <Typography sx={{
                    color: gold,
                    fontWeight: 700,
                    fontSize: { xs: '16px', md: '18px' }
                  }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography sx={{
                    color: 'white',
                    opacity: 0.9,
                    fontSize: { xs: '14px', md: '16px' },
                    lineHeight: 1.6
                  }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Request Phone Call Section */}
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
              Ready to invest in Suketana? Contact us for more information and site visits
            </Typography>
          </Box>

          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 4,
                textAlign: 'center'
              }}>
                <Call sx={{ fontSize: 60, color: gold, mb: 3 }} />
                <Typography variant="h5" sx={{ color: gold, fontWeight: 600, mb: 2 }}>
                  Request a Call Back
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, mb: 4 }}>
                  Fill in your details and we'll call you back within 24 hours
                </Typography>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    placeholder="Your Name"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        '& fieldset': {
                          borderColor: gold,
                        },
                        '&:hover fieldset': {
                          borderColor: gold,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: gold,
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255,255,255,0.7)',
                        opacity: 1,
                      }
                    }}
                  />
                  <TextField
                    placeholder="Phone Number"
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        '& fieldset': {
                          borderColor: gold,
                        },
                        '&:hover fieldset': {
                          borderColor: gold,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: gold,
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255,255,255,0.7)',
                        opacity: 1,
                      }
                    }}
                  />
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
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 4,
                textAlign: 'center'
              }}>
                <WhatsApp sx={{ fontSize: 60, color: gold, mb: 3 }} />
                <Typography variant="h5" sx={{ color: gold, fontWeight: 600, mb: 2 }}>
                  WhatsApp Us
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, mb: 4 }}>
                  Get instant responses and updates via WhatsApp
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#25D366',
                    color: 'white',
                    fontWeight: 600,
                    py: 2,
                    fontSize: '16px',
                    mb: 2,
                    '&:hover': { bgcolor: '#128C7E' }
                  }}
                >
                  Chat on WhatsApp
                </Button>
                <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
                  +91 99026 51666
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
    </Box>
  )
}
