import { Box, Container, Grid, Typography, Button, Card, CardContent, TextField, Accordion, AccordionSummary, AccordionDetails, Avatar, IconButton, Divider } from '@mui/material'
import { ExpandMore, LocationOn, Email, Phone, Star, CheckCircle, WhatsApp, Call, ArrowForward, Business } from '@mui/icons-material'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function GreenValley() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop',
  ];

  const [mainImage, setMainImage] = useState(galleryImages[0]);

  return (
    <Box sx={{ bgcolor: dark, color: 'white' }}>
      <Navbar />

      {/* Project Hero Section */}
      <Box sx={{
        position: 'relative',
        py: { xs: 10, md: 15 },
        backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop)',
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
            GREEN VALLEY
          </Typography>
          <Typography variant="h4" sx={{
            color: 'white',
            fontSize: { xs: '1.2rem', md: '1.8rem' },
            mb: 3,
            opacity: 0.9
          }}>
            Eco-Friendly Residential Plots
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button variant="contained" sx={{ bgcolor: gold, color: dark, '&:hover': { bgcolor: '#d4943a' } }}>DTCP Approved</Button>
            <Button variant="contained" sx={{ bgcolor: gold, color: dark, '&:hover': { bgcolor: '#d4943a' } }}>RERA Registered</Button>
            <Button variant="contained" sx={{ bgcolor: gold, color: dark, '&:hover': { bgcolor: '#d4943a' } }}>Eco-Friendly</Button>
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
              ABOUT GREEN VALLEY
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto'
            }}>
              Experience sustainable living in harmony with nature in Hyderabad's greenest residential development
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
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop"
                  alt="Green Valley Project"
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
                    Eco-Friendly Living
                  </Typography>
                  <Typography sx={{ opacity: 0.9 }}>
                    Sustainable development with green spaces
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
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop"
                    alt="Nature"
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
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop"
                    alt="Green Spaces"
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
                Sustainable Living Excellence
              </Typography>
              <Typography sx={{ 
                color: 'white', 
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 3,
                opacity: 0.9
              }}>
                Green Valley represents the future of sustainable residential development in Hyderabad. This eco-friendly project combines modern living with environmental consciousness, offering DTCP approved plots surrounded by lush green spaces.
              </Typography>
              <Typography sx={{ 
                color: 'white', 
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 4,
                opacity: 0.9
              }}>
                With solar-powered street lighting, rainwater harvesting, and extensive green cover, Green Valley offers a unique opportunity to live in harmony with nature while enjoying all modern conveniences.
              </Typography>
              
              {/* Key Features */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 3 }}>
                  Key Highlights
                </Typography>
                <Grid container spacing={2}>
                  {[
                    'Eco-Friendly Design',
                    'Solar Street Lighting',
                    'Rainwater Harvesting',
                    'Green Landscaping',
                    'Sustainable Materials',
                    'Nature Integration'
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
              Eco-friendly layout with sustainable features and green spaces
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
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop"
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
                  Eco Master Plan
                </Typography>
                <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                  Sustainable Development Layout
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
                  Green Infrastructure
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px', lineHeight: 1.6 }}>
                  Solar lighting, rainwater harvesting, eco-friendly materials, green roads
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
                  Natural Amenities
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px', lineHeight: 1.6 }}>
                  Green parks, walking trails, organic gardens, nature conservation areas
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
                  Sustainability
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '14px', lineHeight: 1.6 }}>
                  Carbon neutral design, renewable energy, waste management, environmental protection
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
          <Typography variant="h3" sx={{ color: gold, fontWeight: 600, mb: 6, textAlign: 'center' }}>
            Project Gallery
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3
          }}>
            <Box sx={{ flex: 1, borderRadius: 4, overflow: 'hidden', boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${gold}40` }}>
              <img src={mainImage} alt="Main Project View" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </Box>
            <Grid container spacing={2} sx={{ flex: { xs: 'none', md: '0 0 250px' } }}>
              {galleryImages.map((image, index) => (
                <Grid item xs={4} md={12} key={index}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: mainImage === image ? `2px solid ${gold}` : '2px solid transparent',
                      transition: 'border 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: `0 5px 15px rgba(0,0,0,0.3)`
                      }
                    }}
                    onClick={() => setMainImage(image)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
                title="Green Valley Location"
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
                  Green Valley Location
                </Typography>
                <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                  Eco-Friendly Location in Hyderabad
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Location Cards Grid */}
          <Grid container spacing={3}>
            {[
              { name: 'HITEC City', distance: '18 km', time: '30 mins', icon: <Business />, category: 'IT Hub' },
              { name: 'Gachibowli', distance: '15 km', time: '25 mins', icon: <Business />, category: 'IT Hub' },
              { name: 'Airport', distance: '40 km', time: '50 mins', icon: <LocationOn />, category: 'Transport' },
              { name: 'Railway Station', distance: '10 km', time: '18 mins', icon: <LocationOn />, category: 'Transport' },
              { name: 'Schools', distance: '3 km', time: '8 mins', icon: <Star />, category: 'Education' },
              { name: 'Hospitals', distance: '6 km', time: '12 mins', icon: <Star />, category: 'Healthcare' }
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
                Green Connectivity
              </Typography>
              <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '16px', lineHeight: 1.6 }}>
                Green Valley is strategically located with easy access to major IT hubs, educational institutions, 
                healthcare facilities, and transportation hubs. The project offers excellent connectivity through 
                eco-friendly transportation options and upcoming metro connectivity.
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
              { question: 'What makes Green Valley eco-friendly?', answer: 'Green Valley features solar street lighting, rainwater harvesting, extensive green cover, and sustainable building materials throughout the development.' },
              { question: 'Are there any additional charges for eco-friendly features?', answer: 'No, all eco-friendly features are included in the plot price. There are no additional charges for sustainable amenities.' },
              { question: 'What is the plot size available?', answer: 'Plots are available in various sizes, starting from 200 sq yards to 400 sq yards, designed for sustainable living.' },
              { question: 'Is there a payment plan available?', answer: 'Yes, we offer flexible payment plans with easy installments over 12-24 months, making eco-friendly living accessible.' },
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

      {/* Request a Phone Call Section */}
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
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ color: gold, fontWeight: 600, mb: 3 }}>
                Request a Call Back
              </Typography>
              <Typography sx={{ color: 'white', opacity: 0.9, lineHeight: 1.8, mb: 4 }}>
                Fill out the form below and our expert team will get in touch with you shortly to discuss Green Valley plots.
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  placeholder="Your Name"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '& fieldset': { borderColor: gold, }, '&:hover fieldset': { borderColor: gold, }, '&.Mui-focused fieldset': { borderColor: gold, }, },
                    '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.7)', opacity: 1, }
                  }}
                />
                <TextField
                  placeholder="Your Phone Number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': { bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '& fieldset': { borderColor: gold, }, '&:hover fieldset': { borderColor: gold, }, '&.Mui-focused fieldset': { borderColor: gold, }, },
                    '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.7)', opacity: 1, }
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
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 4,
                bgcolor: 'rgba(224, 161, 70, 0.1)',
                border: `2px solid ${gold}`,
                borderRadius: 4,
                boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${gold}40`
              }}>
                <IconButton sx={{ bgcolor: gold, '&:hover': { bgcolor: '#d4943a' }, mb: 2 }}>
                  <WhatsApp sx={{ fontSize: 40, color: dark }} />
                </IconButton>
                <Typography variant="h5" sx={{ color: gold, fontWeight: 600, mb: 1 }}>
                  Chat on WhatsApp
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, mb: 3 }}>
                  Connect with us instantly for quick queries.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<WhatsApp />}
                  href="https://wa.me/919902651666"
                  target="_blank"
                  sx={{
                    bgcolor: '#25D366',
                    color: 'white',
                    fontWeight: 600,
                    '&:hover': { bgcolor: '#1DA851' }
                  }}
                >
                  WhatsApp Us
                </Button>
                <Divider sx={{ width: '80%', my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />
                <IconButton sx={{ bgcolor: gold, '&:hover': { bgcolor: '#d4943a' }, mb: 2 }}>
                  <Call sx={{ fontSize: 40, color: dark }} />
                </IconButton>
                <Typography variant="h5" sx={{ color: gold, fontWeight: 600, mb: 1 }}>
                  Direct Call
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, mb: 3 }}>
                  Speak to our sales team directly.
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<Phone />}
                  href="tel:+919902651666"
                  sx={{
                    bgcolor: gold,
                    color: dark,
                    fontWeight: 600,
                    '&:hover': { bgcolor: '#d4943a' }
                  }}
                >
                  Call Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}