import { Box, Container, Grid, Typography, TextField, Button, Divider, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';    
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const gold = '#e0a146';
  const dark = '#181c22';

  return (
    <Box sx={{
      bgcolor: dark,
      color: 'white',
      py: { xs: 4, md: 6 },
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
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: gold, 
                fontWeight: 700, 
                mb: 2,
                fontFamily: '"Playfair Display", serif'
              }}
            >
              SURYA PRIME VENTURES
            </Typography>
            <Typography sx={{ 
              color: 'white', 
              opacity: 0.9, 
              mb: 3,
              lineHeight: 1.6,
              fontSize: '16px'
            }}>
              Since 2017, Surya Prime Ventures has established itself as a trusted open plot real estate developer in Telangana. We offer DTCP Approved & RERA registered open plots in well-connected locations.
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: gold, 
                fontWeight: 600, 
                mb: 2,
                fontSize: '18px'
              }}
            >
              Join Our Newsletter
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              <TextField
                placeholder="Enter Your Email Here"
                variant="outlined"
                size="small"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
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
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: gold,
                  color: dark,
                  minWidth: 'auto',
                  px: 2,
                  '&:hover': {
                    bgcolor: '#c98b36'
                  }
                }}
              >
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: gold, 
                fontWeight: 600, 
                mb: 2,
                fontSize: '18px'
              }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ pl: 0, listStyle: 'none', m: 0 }}>
              {['Home', 'About Us', 'Projects', 'Gallery', 'Contact'].map((link) => (
                <Box component="li" key={link} sx={{ mb: 1 }}>
                  <Typography 
                    sx={{ 
                      color: 'white', 
                      opacity: 0.8, 
                      cursor: 'pointer',
                      fontSize: '14px',
                      '&:hover': {
                        color: gold,
                        opacity: 1
                      }
                    }}
                  >
                    {link}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: gold, 
                fontWeight: 600, 
                mb: 2,
                fontSize: '18px'
              }}
            >
              Our Services
            </Typography>
            <Box component="ul" sx={{ pl: 0, listStyle: 'none', m: 0 }}>
              {['DTCP Approved Plots', 'RERA Registered Properties', 'Transparent Documentation', 'Site Visits', 'Investment Guidance'].map((service) => (
                <Box component="li" key={service} sx={{ mb: 1 }}>
                  <Typography 
                    sx={{ 
                      color: 'white', 
                      opacity: 0.8, 
                      cursor: 'pointer',
                      fontSize: '14px',
                      '&:hover': {
                        color: gold,
                        opacity: 1
                      }
                    }}
                  >
                    {service}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: gold, 
                fontWeight: 600, 
                mb: 2,
                fontSize: '18px'
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: gold, fontSize: 20 }} />
                <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
                  Shadnagar, South Hyderabad, Telangana
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: gold, fontSize: 20 }} />
                <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
                  suryaprimeventures@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: gold, fontSize: 20 }} />
                <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
                  +91 99026 51666
                </Typography>
              </Box>
            </Box>
            
            {/* Social Media Icons */}
            <Box sx={{ mt: 3 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: gold, 
                  fontWeight: 600, 
                  mb: 2,
                  fontSize: '18px'
                }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  sx={{
                    bgcolor: gold,
                    color: dark,
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: '#c98b36',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: gold,
                    color: dark,
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: '#c98b36',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: gold,
                    color: dark,
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: '#c98b36',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: gold,
                    color: dark,
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: '#c98b36',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: gold,
                    color: dark,
                    width: 40,
                    height: 40,
                    '&:hover': {
                      bgcolor: '#c98b36',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(224, 161, 70, 0.3)' }} />

        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography sx={{ 
            color: 'white', 
            opacity: 0.8, 
            fontSize: '14px'
          }}>
            © 2024 Surya Prime Ventures. All rights reserved.
          </Typography>
          <Typography sx={{ 
            color: 'white', 
            opacity: 0.8, 
            fontSize: '14px'
          }}>
            DTCP Approved & RERA Registered
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;