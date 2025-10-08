import { Box, Container, Grid, Typography, Button, Card, CardContent, TextField, Accordion, AccordionSummary, AccordionDetails, Chip, Avatar, IconButton, Snackbar, Alert } from '@mui/material'
import { ExpandMore, LocationOn, Email, Phone, Star, Business, Timeline, CheckCircle, PhotoLibrary, Map, Call, WhatsApp, Share, Favorite } from '@mui/icons-material'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Suketana() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [expanded, setExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [callbackFormData, setCallbackFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [errors, setErrors] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleCallbackInputChange = (field) => (event) => {
    setCallbackFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validatePhone = (phone) => {
    // Remove all non-digit characters and check length
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const validateCallbackForm = () => {
    const newErrors = {};
    
    if (!callbackFormData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!callbackFormData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(callbackFormData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCallbackSubmit = async (event) => {
    event.preventDefault();
    
    // Validate form before submission
    if (!validateCallbackForm()) {
      setNotification({
        open: true,
        message: 'Please fix the errors in the form before submitting.',
        severity: 'error'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', callbackFormData.name);
      formDataToSend.append('phone', callbackFormData.phone);
      formDataToSend.append('project', 'SUKETANA');
      formDataToSend.append('form_type', 'Callback Request');

      const response = await fetch('https://formspree.io/f/xeorlldk', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setNotification({
          open: true,
          message: 'Thank you for your callback request! We will call you back within 24 hours.',
          severity: 'success'
        });
        
        // Reset form
        setCallbackFormData({
          name: '',
          phone: ''
        });
      } else {
        const data = await response.json();
        if (data.errors) {
          console.error('Formspree errors:', data.errors);
        }
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting callback request:', error);
      setNotification({
        open: true,
        message: 'Sorry, there was an error sending your callback request. Please try again or contact us directly.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
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
        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop)',
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
          zIndex: 1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 2
        }
      }}>
        <Container sx={{ position: 'relative', zIndex: 3 }}>
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
      <Box 
        sx={{ 
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
          <Box sx={{ 
            textAlign: 'center', 
            mb: 6
          }}>
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

          {/* Single Centered Image */}
          <Box sx={{ 
            mb: 6, 
            textAlign: 'center'
          }}>
              <Box sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
              boxShadow: `0 25px 50px rgba(0,0,0,0.4)`,
              border: `3px solid ${gold}`,
              maxWidth: '800px',
              mx: 'auto'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
                  alt="Suketana Project"
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
                </Box>

          {/* Content Section - Original Layout */}
          <Box sx={{ textAlign: 'left' }}>
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
          </Box>
        </Container>
      </Box>

      {/* Layout Section */}
      <Box 
        sx={{
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
              maxWidth: '1000px',
              mx: 'auto',
              border: `3px solid ${gold}`
            }}>
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop"
                alt="Suketana Master Plan"
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop';
                }}
              />
              <Box sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                bgcolor: 'rgba(0,0,0,0.9)',
                borderRadius: 3,
                p: 3,
                color: 'white',
                backdropFilter: 'blur(10px)',
                border: `2px solid ${gold}`
              }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: gold }}>
                  Master Plan
                </Typography>
                <Typography sx={{ fontSize: '16px', opacity: 0.9 }}>
                  Comprehensive Development Layout
                </Typography>
              </Box>
              <Box sx={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                bgcolor: 'rgba(0,0,0,0.9)',
                borderRadius: 3,
                p: 2,
                color: 'white',
                backdropFilter: 'blur(10px)',
                border: `2px solid ${gold}`
              }}>
                <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                  Suketana Development Plan
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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
                    <LocationOn sx={{ color: dark, fontSize: 25 }} />
                </Box>
                  <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2, fontSize: '18px' }}>
                  Infrastructure
                </Typography>
                </Box>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '15px', lineHeight: 1.5 }}>
                  Wide roads, underground drainage, street lighting, water & electricity connections
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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
                    <Star sx={{ color: dark, fontSize: 25 }} />
                </Box>
                  <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2, fontSize: '18px' }}>
                  Amenities
                </Typography>
                </Box>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '15px', lineHeight: 1.5 }}>
                  Green spaces, parks, security surveillance, clubhouse facilities
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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
                    <CheckCircle sx={{ color: dark, fontSize: 25 }} />
                </Box>
                  <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2, fontSize: '18px' }}>
                  Quality Assurance
                </Typography>
                </Box>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '15px', lineHeight: 1.5 }}>
                  DTCP approved, RERA registered, quality materials, professional construction
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
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
                    <Timeline sx={{ color: dark, fontSize: 25 }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: gold, fontWeight: 600, mb: 2, fontSize: '18px' }}>
                    Investment Potential
                  </Typography>
                </Box>
                <Typography sx={{ color: 'white', opacity: 0.9, fontSize: '15px', lineHeight: 1.5 }}>
                  High ROI potential, strategic location, growing infrastructure, future development plans
                </Typography>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box 
        sx={{
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
                    border: selectedImage === index ? `3px solid ${gold}` : '3px solid transparent'
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
      <Box 
        sx={{
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

          {/* Location Cards Grid - Centered & Equally Spaced */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%',
            px: 2
          }}>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
              gap: 3,
              maxWidth: '1200px',
              width: '100%'
            }}>
              {[
              { name: 'Airport', distance: '35 km', time: '45 mins', icon: <LocationOn />, category: 'Transport' },
              { name: 'Railway Station', distance: '8 km', time: '15 mins', icon: <LocationOn />, category: 'Transport' },
              { name: 'Schools', distance: '2 km', time: '5 mins', icon: <Star />, category: 'Education' },
                { name: 'Hospitals', distance: '5 km', time: '10 mins', icon: <Star />, category: 'Healthcare' },
                { name: 'Shopping Mall', distance: '3 km', time: '8 mins', icon: <Business />, category: 'Shopping' }
            ].map((location, index) => (
                <Card key={index} sx={{
                  background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                  border: `2px solid ${gold}`,
                  borderRadius: 4,
                  p: 3,
                  height: '180px',
                  width: '100%',
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
      <Box 
        sx={{
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
      <Box 
        sx={{
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

          {/* Contact Cards - Equal Width & Height */}
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
                  <Call sx={{ fontSize: 60, color: gold, mb: 3 }} />
                <Typography variant="h5" sx={{ color: gold, fontWeight: 600, mb: 2 }}>
                  Request a Call Back
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.9, mb: 4 }}>
                  Fill in your details and we'll call you back within 24 hours
                </Typography>
                </Box>
                <Box component="form" onSubmit={handleCallbackSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    placeholder="Your Name"
                    value={callbackFormData.name}
                    onChange={handleCallbackInputChange('name')}
                    variant="outlined"
                    required
                    error={!!errors.name}
                    helperText={errors.name}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        '& fieldset': {
                          borderColor: errors.name ? '#f44336' : gold,
                        },
                        '&:hover fieldset': {
                          borderColor: errors.name ? '#f44336' : gold,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: errors.name ? '#f44336' : gold,
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255,255,255,0.7)',
                        opacity: 1,
                      },
                      '& .MuiFormHelperText-root': {
                        color: '#f44336',
                        fontSize: '12px',
                      },
                    }}
                  />
                  <TextField
                    placeholder="Phone Number"
                    value={callbackFormData.phone}
                    onChange={handleCallbackInputChange('phone')}
                    variant="outlined"
                    required
                    error={!!errors.phone}
                    helperText={errors.phone}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        '& fieldset': {
                          borderColor: errors.phone ? '#f44336' : gold,
                        },
                        '&:hover fieldset': {
                          borderColor: errors.phone ? '#f44336' : gold,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: errors.phone ? '#f44336' : gold,
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255,255,255,0.7)',
                        opacity: 1,
                      },
                      '& .MuiFormHelperText-root': {
                        color: '#f44336',
                        fontSize: '12px',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      bgcolor: gold,
                      color: dark,
                      fontWeight: 600,
                      py: 2,
                      fontSize: '16px',
                      '&:hover': { bgcolor: '#d4943a' },
                      '&:disabled': { bgcolor: '#ccc' }
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Call Back'}
                  </Button>
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

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ mt: 8 }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          sx={{ 
            width: '100%',
            bgcolor: notification.severity === 'success' ? '#4caf50' : '#f44336',
            color: 'white',
            '& .MuiAlert-icon': { color: 'white' }
          }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
      
    </Box>
  )
}
