
import { Box, Container, Grid, Typography, Button, Card, CardContent, IconButton, TextField } from '@mui/material'
import { Twitter, Facebook, Instagram, YouTube, PlayArrow, LocationOn, Email, Phone, Business, EmojiEvents, Star, Group, Timeline, CheckCircle } from '@mui/icons-material'
import Navbar from '../components/Navbar'

export default function About() {
  const gold = '#e0a146';
  const dark = '#181c22';

  return (
    <Box>
      {/* Hero Section with Navbar inside */}
      <Box sx={{ 
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        overflow: 'hidden'
      }}>
        {/* Navbar inside hero section */}
      <Navbar />
        
        {/* Dark overlay for better text readability */}
        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0,0,0,0.7)'
        }} />
        
        {/* Golden gradient overlay */}
        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        {/* Main Content Container */}
        <Container sx={{ 
          position: 'relative',
          zIndex: 1,
          py: 8
        }}>
          {/* Main Heading */}
          <Box sx={{ textAlign: 'center', mb: 8, mt: 4 }}>
            <Typography variant="h1" sx={{ 
              color: gold, 
              fontWeight: 400,
              fontSize: { xs: '3rem', md: '4rem' },
              lineHeight: 1.1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              mb: 2,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em'
            }}>
              ABOUT US
            </Typography>
          </Box>

          {/* Corporate Profile Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" sx={{ 
              color: gold, 
              fontWeight: 600, 
              mb: 4,
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}>
              Corporate Profile
            </Typography>
            <Typography sx={{ 
              color: 'white', 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 3,
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
            }}>
              Surya Prime Ventures is a leading real estate development company established in 2017 in Hyderabad, Telangana. We specialize in developing DTCP and RERA-registered open plots in prime locations across the city.
            </Typography>
            <Typography sx={{ 
              color: 'white', 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
            }}>
              With a strong reputation for quality, reliability, and customer satisfaction, we have successfully delivered numerous projects that have transformed the landscape of Hyderabad. Our expertise lies in identifying high-potential locations and developing them into well-planned, legally compliant, and value-appreciating real estate assets.
            </Typography>
          </Box>

          {/* MD's Profile Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" sx={{ 
              color: gold, 
              fontWeight: 600, 
              mb: 4,
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}>
              MD's Profile
            </Typography>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography sx={{ 
                  color: 'white', 
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  mb: 3,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  Mr. Chandra Chandrasekhar is the Founder and Managing Director of Surya Prime Ventures. With over 20 years of experience in the real estate industry, he has been instrumental in shaping the company's vision and growth.
                </Typography>
                <Typography sx={{ 
                  color: 'white', 
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  mb: 3,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  Under his leadership, the company has established itself as a trusted name in the real estate sector, known for its commitment to quality, transparency, and customer satisfaction. His vision for sustainable development and eco-friendly living has been a driving force behind the company's success.
                </Typography>
                <Typography sx={{ 
                  color: 'white', 
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  Mr. Chandrasekhar's passion for greenery and nature is reflected in the company's projects, which often incorporate sustainable practices and environmental considerations. He is also known for his commitment to helping individuals achieve their dreams of owning property and building a secure future.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{
                  width: '100%',
                  maxWidth: 300,
                  height: 400,
                  borderRadius: 3,
                  backgroundImage: 'url(https://i.imgur.com/0y8Ftya.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  mx: 'auto'
                }} />
              </Grid>
            </Grid>
          </Box>

          {/* Vision Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h3" sx={{ 
              color: gold, 
              fontWeight: 600, 
              mb: 4,
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}>
              Vision
            </Typography>
            <Typography sx={{ 
              color: 'white', 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
            }}>
              To be the most trusted and innovative real estate developer in the Telugu states, known for transforming land into valuable assets and thriving communities.
        </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
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
          <Box sx={{ display: 'flex', gap: 6, flexDirection: { xs: 'column', lg: 'row' } }}>
            {/* Left Column - Get in touch */}
            <Box sx={{ flex: { xs: 1, lg: '0 0 40%' } }}>
              <Typography variant="h4" sx={{ 
                fontWeight: 600, 
                mb: 3,
                color: gold,
                fontSize: { xs: '1.5rem', md: '1.8rem' }
              }}>
                Get in touch
              </Typography>
              <Typography sx={{ 
                color: 'white', 
                opacity: 0.9,
                fontSize: '16px',
                lineHeight: 1.6,
                mb: 4
              }}>
                Ready to invest in your future? Contact us today to explore our premium DTCP approved and RERA registered open plots in prime locations.
              </Typography>
              
              {/* Contact Details */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Box sx={{
                    width: 50,
                    height: 50,
                    bgcolor: gold,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 3,
                    flexShrink: 0
                  }}>
                    <LocationOn sx={{ color: dark, fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: gold, mb: 0.5 }}>
                      Head Office
                    </Typography>
                    <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px', lineHeight: 1.4 }}>
                      Shadnagar, South Hyderabad, Telangana
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Box sx={{
                    width: 50,
                    height: 50,
                    bgcolor: gold,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 3,
                    flexShrink: 0
                  }}>
                    <Email sx={{ color: dark, fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: gold, mb: 0.5 }}>
                      Email Us
                    </Typography>
                    <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px', lineHeight: 1.4 }}>
                      suryaprimeventures@gmail.com<br />suryaprimeventures@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Box sx={{
                    width: 50,
                    height: 50,
                    bgcolor: gold,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 3,
                    flexShrink: 0
                  }}>
                    <Phone sx={{ color: dark, fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: gold, mb: 0.5 }}>
                      Call Us
                    </Typography>
                    <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px', lineHeight: 1.4 }}>
                      Phone: +91 99026 51666<br />WhatsApp: +91 99026 51666
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Social Media */}
              <Box>
                <Typography sx={{ fontWeight: 600, color: gold, mb: 2 }}>
                  Follow our social media
              </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[Facebook, Instagram, Twitter, YouTube].map((Icon, index) => (
                    <Box key={index} sx={{
                      width: 40,
                      height: 40,
                      bgcolor: gold,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      '&:hover': { bgcolor: '#d4943a' }
                    }}>
                      <Icon sx={{ color: dark, fontSize: 20 }} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Right Column - Contact Form */}
            <Box sx={{ flex: { xs: 1, lg: '0 0 60%' } }}>
              <Typography variant="h4" sx={{ 
                fontWeight: 600, 
                mb: 3,
                color: gold,
                fontSize: { xs: '1.5rem', md: '1.8rem' }
              }}>
                Send us a message
              </Typography>
              
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <TextField
                    placeholder="Name"
                    variant="outlined"
                    sx={{
                      flex: 1,
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
                    placeholder="Company"
                    variant="outlined"
                    sx={{
                      flex: 1,
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
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <TextField
                    placeholder="Phone"
                    variant="outlined"
                    sx={{
                      flex: 1,
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
                    placeholder="Email"
                    variant="outlined"
                    sx={{
                      flex: 1,
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
                </Box>

                <TextField
                  placeholder="Subject"
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
                  placeholder="Message"
                  multiline
                  rows={6}
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
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
      </Container>
      </Box>

      {/* Company Timeline/Milestones Section */}
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
              OUR JOURNEY
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              From humble beginnings to becoming a trusted name in real estate development.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: '1200px', mx: 'auto' }}>
            {/* Creative Background Elements */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(224, 161, 70, 0.1) 0%, transparent 50%),
                linear-gradient(45deg, transparent 30%, rgba(224, 161, 70, 0.05) 50%, transparent 70%)
              `,
              pointerEvents: 'none'
            }} />


            {[
              { 
                year: '2017', 
                title: 'Company Founded', 
                description: 'Surya Prime Ventures was established with a vision to transform the real estate landscape in Telangana.',
                icon: '🏢',
                color: '#e0a146'
              },
              { 
                year: '2018', 
                title: 'First Project Launch', 
                description: 'Successfully launched our first DTCP approved project, setting new standards in the industry.',
                icon: '🚀',
                color: '#4CAF50'
              },
              { 
                year: '2020', 
                title: 'RERA Registration', 
                description: 'Obtained RERA registration, ensuring complete transparency and legal compliance.',
                icon: '📋',
                color: '#2196F3'
              },
              { 
                year: '2022', 
                title: 'Market Expansion', 
                description: 'Expanded operations across multiple locations in South Hyderabad with premium projects.',
                icon: '🌍',
                color: '#FF9800'
              },
              { 
                year: '2024', 
                title: 'Industry Recognition', 
                description: 'Recognized as one of the most trusted real estate developers in Telangana.',
                icon: '🏆',
                color: '#9C27B0'
              }
            ].map((milestone, index) => (
              <Box key={index} sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                mb: { xs: 6, md: 10 },
                position: 'relative',
                minHeight: { xs: 'auto', md: '200px' }
              }}>
                {/* Desktop Left Content */}
                <Box sx={{
                  flex: 1,
                  pr: { xs: 0, md: 8 },
                  textAlign: { xs: 'center', md: 'right' },
                  display: { xs: 'none', md: index % 2 === 0 ? 'block' : 'none' }
                }}>
                  <Box sx={{
                    background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                    border: `2px solid ${milestone.color}`,
                    borderRadius: 4,
                    p: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${milestone.color}40`,
                      '& .milestone-icon': {
                        transform: 'rotate(360deg) scale(1.2)'
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${milestone.color}20, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:hover::before': {
                      opacity: 1
                    }
                  }}>
                    {/* Icon */}
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      mb: 2
                    }}>
                      <Box className="milestone-icon" sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}80)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        transition: 'all 0.3s ease',
                        boxShadow: `0 8px 25px ${milestone.color}40`
                      }}>
                        {milestone.icon}
                      </Box>
                    </Box>

                    <Typography variant="h3" sx={{
                      color: milestone.color,
                      fontWeight: 800,
                      fontSize: '2.5rem',
                      mb: 1,
                      textShadow: `2px 2px 4px rgba(0,0,0,0.3)`
                    }}>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h5" sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: 3,
                      fontSize: '1.4rem',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {milestone.title}
                    </Typography>
                    <Typography sx={{
                      color: 'white',
                      opacity: 0.9,
                      lineHeight: 1.7,
                      fontSize: '16px',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>
                      {milestone.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Enhanced Timeline Dot */}
                <Box sx={{
                  width: { xs: 24, md: 32 },
                  height: { xs: 24, md: 32 },
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}80)`,
                  position: 'relative',
                  zIndex: 2,
                  mx: { xs: 0, md: 3 },
                  my: { xs: 2, md: 0 },
                  flexShrink: 0,
                  boxShadow: `0 0 30px ${milestone.color}60`,
                  border: `4px solid ${dark}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.3)',
                    boxShadow: `0 0 40px ${milestone.color}80`
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '12px', md: '16px' },
                    height: { xs: '12px', md: '16px' },
                    borderRadius: '50%',
                    background: 'white',
                    opacity: 0.8
                  }
                }} />

                {/* Desktop Right Content */}
                <Box sx={{
                  flex: 1,
                  pl: { xs: 0, md: 8 },
                  textAlign: { xs: 'center', md: 'left' },
                  display: { xs: 'none', md: index % 2 === 1 ? 'block' : 'none' }
                }}>
                  <Box sx={{
                    background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                    border: `2px solid ${milestone.color}`,
                    borderRadius: 4,
                    p: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.02)',
                      boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${milestone.color}40`,
                      '& .milestone-icon': {
                        transform: 'rotate(360deg) scale(1.2)'
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(135deg, ${milestone.color}20, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    },
                    '&:hover::before': {
                      opacity: 1
                    }
                  }}>
                    {/* Icon */}
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      mb: 2
                    }}>
                      <Box className="milestone-icon" sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}80)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        transition: 'all 0.3s ease',
                        boxShadow: `0 8px 25px ${milestone.color}40`
                      }}>
                        {milestone.icon}
                      </Box>
                    </Box>

                    <Typography variant="h3" sx={{
                      color: milestone.color,
                      fontWeight: 800,
                      fontSize: '2.5rem',
                      mb: 1,
                      textShadow: `2px 2px 4px rgba(0,0,0,0.3)`
                    }}>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h5" sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: 3,
                      fontSize: '1.4rem',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {milestone.title}
                    </Typography>
                    <Typography sx={{
                      color: 'white',
                      opacity: 0.9,
                      lineHeight: 1.7,
                      fontSize: '16px',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>
                      {milestone.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Mobile Content (always visible on mobile) */}
                <Box sx={{
                  display: { xs: 'block', md: 'none' },
                  width: '100%',
                  textAlign: 'center',
                  mt: 2
                }}>
                  <Box sx={{
                    background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                    border: `2px solid ${milestone.color}`,
                    borderRadius: 4,
                    p: { xs: 3, sm: 4 },
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 15px 30px rgba(0,0,0,0.3), 0 0 20px ${milestone.color}40`
                    }
                  }}>
                    {/* Mobile Icon */}
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2
                    }}>
                      <Box sx={{
                        width: { xs: 50, sm: 60 },
                        height: { xs: 50, sm: 60 },
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}80)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '20px', sm: '24px' },
                        boxShadow: `0 6px 20px ${milestone.color}40`
                      }}>
                        {milestone.icon}
                      </Box>
                    </Box>

                    <Typography variant="h3" sx={{
                      color: milestone.color,
                      fontWeight: 800,
                      fontSize: { xs: '1.8rem', sm: '2rem' },
                      mb: 1,
                      textShadow: `2px 2px 4px rgba(0,0,0,0.3)`
                    }}>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h5" sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: 3,
                      fontSize: { xs: '1.1rem', sm: '1.2rem' },
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {milestone.title}
                    </Typography>
                    <Typography sx={{
                      color: 'white',
                      opacity: 0.9,
                      lineHeight: 1.7,
                      fontSize: { xs: '14px', sm: '15px' },
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                    }}>
                      {milestone.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Our Team Section */}
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
              OUR TEAM
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Meet the dedicated professionals who make our vision a reality.
            </Typography>
          </Box>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
            maxWidth: '1200px',
            mx: 'auto'
          }}>
            {[
              {
                name: 'Mr. Chandra Chandrasekhar',
                position: 'Founder & Managing Director',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
                experience: '20+ Years',
                description: 'Visionary leader with extensive experience in real estate development and strategic planning.',
                color: '#e0a146',
                gradient: 'linear-gradient(135deg, #e0a146 0%, #f4d03f 100%)'
              },
              {
                name: 'Ms. Priya Sharma',
                position: 'Head of Operations',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=300&auto=format&fit=crop',
                experience: '15+ Years',
                description: 'Expert in project management and ensuring smooth operations across all our developments.',
                color: '#4CAF50',
                gradient: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)'
              },
              {
                name: 'Mr. Rajesh Kumar',
                position: 'Head of Sales & Marketing',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
                experience: '12+ Years',
                description: 'Drives our sales strategy and maintains strong relationships with our valued customers.',
                color: '#2196F3',
                gradient: 'linear-gradient(135deg, #2196F3 0%, #03A9F4 100%)'
              },
              {
                name: 'Ms. Anjali Reddy',
                position: 'Legal & Compliance Head',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
                experience: '10+ Years',
                description: 'Ensures all our projects comply with legal requirements and regulatory standards.',
                color: '#FF9800',
                gradient: 'linear-gradient(135deg, #FF9800 0%, #FFC107 100%)'
              }
            ].map((member, index) => (
              <Box key={index} sx={{
                position: 'relative',
                '&:hover': {
                  '& .team-card': {
                    transform: 'translateY(-20px) rotateY(5deg)',
                    boxShadow: `0 30px 60px rgba(0,0,0,0.4), 0 0 40px ${member.color}50`
                  },
                  '& .member-image': {
                    transform: 'scale(1.1) rotate(5deg)',
                    boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${member.color}60`
                  },
                  '& .member-badge': {
                    transform: 'scale(1.1) rotate(-5deg)',
                    background: member.gradient
                  }
                }
              }}>
                <Card className="team-card" sx={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)`,
                  border: `3px solid transparent`,
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), ${member.gradient}`,
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box',
                  borderRadius: 6,
                  p: 0,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 50% 0%, ${member.color}20 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  },
                  '&:hover::before': {
                    opacity: 1
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `conic-gradient(from 0deg, transparent, ${member.color}20, transparent)`,
                    animation: 'rotate 4s linear infinite',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  },
                  '&:hover::after': {
                    opacity: 1
                  },
                  '@keyframes rotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                  }
                }}>
                  {/* Decorative Elements */}
                  <Box sx={{
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    borderRadius: '50%',
                    background: `linear-gradient(45deg, ${member.color}30, transparent)`,
                    opacity: 0.3
                  }} />
                  
                  <Box sx={{
                    position: 'absolute',
                    bottom: 15,
                    left: 15,
                    width: { xs: 30, md: 35 },
                    height: { xs: 30, md: 35 },
                    borderRadius: '50%',
                    background: `linear-gradient(45deg, transparent, ${member.color}20)`,
                    opacity: 0.4
                  }} />

                  <Box sx={{ p: { xs: 3, md: 4 }, position: 'relative', zIndex: 2 }}>
                    {/* Image Section */}
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: { xs: 3, md: 4 },
                      position: 'relative'
                    }}>
                      <Box className="member-image" sx={{
                        width: { xs: 100, md: 120 },
                        height: { xs: 100, md: 120 },
                        borderRadius: '50%',
                        backgroundImage: `url(${member.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: `3px solid ${member.color}`,
                        boxShadow: `0 10px 25px rgba(0,0,0,0.3), 0 0 20px ${member.color}40`,
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '-6px',
                          left: '-6px',
                          right: '-6px',
                          bottom: '-6px',
                          borderRadius: '50%',
                          background: member.gradient,
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          zIndex: -1
                        }
                      }} />
                      
                      {/* Floating Badge */}
                      <Box className="member-badge" sx={{
                        position: 'absolute',
                        top: 5,
                        right: 5,
                        background: `linear-gradient(135deg, ${member.color}, ${member.color}80)`,
                        color: 'white',
                        borderRadius: '15px',
                        px: 1.5,
                        py: 0.5,
                        fontSize: { xs: '10px', md: '11px' },
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        boxShadow: `0 6px 15px ${member.color}40`,
                        transition: 'all 0.3s ease',
                        border: `2px solid ${dark}`
                      }}>
                        {member.experience}
                      </Box>
                    </Box>

                    {/* Content Section */}
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{
                        background: member.gradient,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 800,
                        mb: 2,
                        fontSize: { xs: '16px', md: '18px' },
                        textShadow: 'none'
                      }}>
                        {member.name}
                      </Typography>
                      
                      <Typography sx={{
                        color: member.color,
                        fontWeight: 600,
                        mb: 2,
                        fontSize: { xs: '12px', md: '13px' },
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {member.position}
                      </Typography>
                      
                      <Typography sx={{
                        color: 'white',
                        opacity: 0.9,
                        fontSize: { xs: '12px', md: '13px' },
                        lineHeight: 1.6,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                        fontStyle: 'italic'
                      }}>
                        "{member.description}"
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Awards & Certifications Section */}
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
              AWARDS & CERTIFICATIONS
            </Typography>
            <Typography sx={{
              color: 'white',
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Recognized for excellence in real estate development and customer satisfaction.
            </Typography>
          </Box>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              lg: 'repeat(4, 1fr)' 
            },
            gap: 3,
            maxWidth: '1200px',
            mx: 'auto'
          }}>
            {[
              {
                title: 'DTCP Approved',
                description: 'All our projects are DTCP approved ensuring legal compliance and future development potential.',
                icon: <CheckCircle sx={{ fontSize: { xs: 32, md: 40 }, color: gold }} />,
                color: '#4CAF50'
              },
              {
                title: 'RERA Registered',
                description: 'RERA registered properties provide transparency and protection for investors.',
                icon: <EmojiEvents sx={{ fontSize: { xs: 32, md: 40 }, color: gold }} />,
                color: '#FF9800'
              },
              {
                title: 'ISO 9001:2015',
                description: 'Certified for quality management systems ensuring consistent service delivery.',
                icon: <Star sx={{ fontSize: { xs: 32, md: 40 }, color: gold }} />,
                color: '#2196F3'
              },
              {
                title: 'Best Developer Award',
                description: 'Recognized as the best real estate developer in Telangana for 2023.',
                icon: <Business sx={{ fontSize: { xs: 32, md: 40 }, color: gold }} />,
                color: '#9C27B0'
              }
            ].map((award, index) => (
              <Card key={index} sx={{
                background: `linear-gradient(135deg, rgba(224, 161, 70, 0.15) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                border: `2px solid ${award.color}`,
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                textAlign: 'center',
                height: { xs: 300, sm: 320, lg: 340 },
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-15px) scale(1.02)',
                  boxShadow: `0 25px 50px rgba(0,0,0,0.4), 0 0 30px ${award.color}40`,
                  border: `3px solid ${award.color}`,
                  '& .award-icon': {
                    transform: 'rotate(360deg) scale(1.2)'
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${award.color}20, transparent)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                },
                '&:hover::before': {
                  opacity: 1
                }
              }}>
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box className="award-icon" sx={{
                    mb: 3,
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { xs: 60, md: 80 },
                    height: { xs: 60, md: 80 },
                    mx: 'auto',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${award.color}20, ${award.color}10)`,
                    border: `2px solid ${award.color}`,
                    boxShadow: `0 8px 25px ${award.color}30`
                  }}>
                    {award.icon}
                  </Box>
                  
                  <Typography variant="h6" sx={{
                    color: award.color,
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '16px', md: '18px' },
                    textShadow: `2px 2px 4px rgba(0,0,0,0.3)`,
                    minHeight: { xs: '50px', sm: '54px', lg: '56px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {award.title}
                  </Typography>
                </Box>
                
                <Typography sx={{
                  color: 'white',
                  opacity: 0.9,
                  fontSize: { xs: '13px', md: '14px' },
                  lineHeight: 1.6,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {award.description}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>


      {/* Map Section */}
      <Box sx={{ 
        height: 500, 
        width: '100%',
        bgcolor: dark,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 1
        }
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.1234567!3d17.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb123456789abc%3A0x1234567890abcdef!2sShadnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1635789123456!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, position: 'relative', zIndex: 2 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </Box>
      
    </Box>
  )
}



