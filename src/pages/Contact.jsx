import { Box, Container, Grid, Typography, Button, TextField, Accordion, AccordionSummary, AccordionDetails, Snackbar, Alert } from '@mui/material'
import { ExpandMore, LocationOn, Email, Phone } from '@mui/icons-material'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Contact() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [errors, setErrors] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Remove all non-digit characters and check length
    const digitsOnly = phone.replace(/\D/g, '');
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
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
      formDataToSend.append('name', formData.name);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('form_type', 'Contact Form');

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
          message: 'Thank you for your message! We will get back to you soon.',
          severity: 'success'
        });
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const data = await response.json();
        if (data.errors) {
          console.error('Formspree errors:', data.errors);
        }
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification({
        open: true,
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };


  return (
    <Box>
      <Navbar />
      
      {/* Page Header */}
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
              CONTACT US
            </Typography>
            <Typography sx={{ 
              color: 'white', 
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
              opacity: 0.9
            }}>
              Ready to invest in your future? Get in touch with our expert team for personalized guidance on your real estate journey.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Enhanced Contact Form Section */}
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
            {/* Left Column - Contact Information */}
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
                      suryaprimeventures@gmail.com
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
              
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <TextField
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    variant="outlined"
                    required
                    error={!!errors.name}
                    helperText={errors.name}
                    sx={{
                      flex: 1,
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
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange('company')}
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
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    variant="outlined"
                    required
                    error={!!errors.phone}
                    helperText={errors.phone}
                    sx={{
                      flex: 1,
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
                  <TextField
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    variant="outlined"
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{
                      flex: 1,
                      '& .MuiOutlinedInput-root': {
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        '& fieldset': {
                          borderColor: errors.email ? '#f44336' : gold,
                        },
                        '&:hover fieldset': {
                          borderColor: errors.email ? '#f44336' : gold,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: errors.email ? '#f44336' : gold,
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
                </Box>

                <TextField
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange('subject')}
                  variant="outlined"
                  required
                  error={!!errors.subject}
                  helperText={errors.subject}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      '& fieldset': {
                        borderColor: errors.subject ? '#f44336' : gold,
                      },
                      '&:hover fieldset': {
                        borderColor: errors.subject ? '#f44336' : gold,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: errors.subject ? '#f44336' : gold,
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
                  placeholder="Message"
                  multiline
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  variant="outlined"
                  required
                  error={!!errors.message}
                  helperText={errors.message}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      '& fieldset': {
                        borderColor: errors.message ? '#f44336' : gold,
                      },
                      '&:hover fieldset': {
                        borderColor: errors.message ? '#f44336' : gold,
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: errors.message ? '#f44336' : gold,
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
                          fullWidth
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
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
              </Box>
            </Box>
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
              Find answers to common questions about our services and processes.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {[
              {
                question: 'What documents do I need to purchase a plot?',
                answer: 'You need a valid ID proof, address proof, PAN card, and bank statements. For NRI customers, additional documents like passport and overseas address proof are required.'
              },
              {
                question: 'What is the payment schedule for plot purchases?',
                answer: 'We offer flexible payment plans starting from 10% booking amount. The remaining amount can be paid in installments over 12-24 months with attractive interest rates.'
              },
              {
                question: 'Are your projects DTCP and RERA approved?',
                answer: 'Yes, all our projects are DTCP approved and RERA registered, ensuring complete legal compliance and protection for investors.'
              },
              {
                question: 'Do you provide home loans assistance?',
                answer: 'We have tie-ups with leading banks and financial institutions to help you get the best home loan rates and quick approval for your plot purchase.'
              },
              {
                question: 'What are the amenities provided in your projects?',
                answer: 'Our projects include wide roads, underground drainage, street lighting, water supply, electricity, parks, and security. Some projects also feature clubhouses and recreational facilities.'
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


