import { Box, Button, Typography, Container, Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import HeroCarousel from '../components/HeroCarousel.jsx'
import { useState, useEffect, useRef } from 'react'

function HeroHeader() { return <HeroCarousel /> }

function AnimatedCounter({ target, suffix = '', duration = 1000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <Box ref={ref}>
      <Typography variant="h2" sx={{ color: '#e0a146', fontWeight: 800, lineHeight: 1, textAlign: 'center' }}>
        {count}{suffix}
      </Typography>
    </Box>
  );
}

function Highlights() {
  // Gold color and dark background from screenshot
  const gold = '#e0a146';
  const dark = '#181c22';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('highlights-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box id="highlights-section" sx={{ 
      bgcolor: dark, 
      color: 'white', 
      py: { xs: 8, md: 10 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'conic-gradient(from 0deg, transparent, rgba(224, 161, 70, 0.02), transparent)',
        animation: 'rotate 30s linear infinite',
        pointerEvents: 'none',
        zIndex: 0
      },
      '@keyframes rotate': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    }}>
      <Container>
        {/* Centered Welcome Heading */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6, 
          position: 'relative', 
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.4s ease-out'
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: gold, 
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '4px',
                background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                animation: 'pulse 3s ease-in-out infinite'
              },
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.6, transform: 'translateX(-50%) scaleX(1)' },
                '50%': { opacity: 1, transform: 'translateX(-50%) scaleX(1.3)' }
              }
            }}
          >
            WELCOME TO SURYA PRIME VENTURES
            </Typography>
          <Typography 
            sx={{ 
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: 800,
              mx: 'auto',
              mb: 6,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.4s ease-out 0.1s'
            }}
          >
              Since 2017, Surya prime ventures Pvt Ltd has established itself as a trusted open plot real estate developer in Telangana. We offer DTCP Approved & RERA registered open plots in well-connected locations across Shadnagar, South Hyderabad.
            </Typography>
        </Box>

        <Grid container spacing={6} alignItems="flex-start" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Left: Text Content */}
          <Grid item xs={12} md={7}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: gold, 
                fontWeight: 600, 
                mb: 3, 
                fontSize: '1.5rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 0.3s ease-out 0.2s'
              }}
            >
              Why Invest in Our Open Plots?
            </Typography>
            <Box component="ul" sx={{ pl: 0, mb: 4, listStyle: 'none' }}>
              {[
                '100% DTCP Approved & RERA Registered Properties.',
                'High-Growth Locations – Well-connected areas with increasing land value.',
                'Transparent Transactions – Hassle-free documentation & ownership process.'
              ].map((item, index) => (
                <Box 
                  key={index}
                  component="li" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    mb: 2,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `all 0.3s ease-out ${0.3 + index * 0.1}s`
                  }}
                >
                  <Box sx={{ 
                    color: gold, 
                    mr: 2, 
                    fontSize: 20, 
                    mt: 0.5,
                    animation: isVisible ? 'bounce 1s ease-in-out' : 'none',
                    animationDelay: `${0.8 + index * 0.2}s`
                  }}>✔️</Box>
                  <Typography sx={{ fontSize: '16px', lineHeight: 1.6 }}>{item}</Typography>
              </Box>
              ))}
              </Box>
            
            <Typography 
              variant="h5" 
              sx={{ 
                color: gold, 
                fontWeight: 600, 
                mb: 3, 
                fontSize: '1.5rem',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 0.3s ease-out 0.4s'
              }}
            >
              Meet Our Founder – Mr. Chandra Chandrasekhar
            </Typography>
            <Typography 
              sx={{ 
                mb: 3, 
                fontSize: '16px', 
                lineHeight: 1.6,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.3s ease-out 0.5s'
              }}
            >
              With over 20 years of experience in the real estate industry, Mr. Chandra Chandrasekhar has transformed Swargaseema Sandalwood Farms Pvt Ltd into a reputed name in open plot development. From being a successful builder to a visionary land developer, he brings a deep-rooted passion for greenery, nature, traditional living, and a sustainable environment, which is reflected in every project he envisions. His expertise, dedication, and customer-first approach continue to drive our success in creating thriving communities.
            </Typography>
            <Typography 
              sx={{ 
                mb: 4, 
                fontSize: '16px', 
                lineHeight: 1.6,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.3s ease-out 0.6s'
              }}
            >
              Beyond real estate, Mr. Chandrasekhar shares his knowledge and life philosophies through his YouTube channel, where he talks about day-to-day living, financial and personality development, building the right attitude, and leading a safe, secure, healthy, and happy life. Watch on <Box component="a" href="#" sx={{ color: gold, textDecoration: 'underline', fontWeight: 500, ml: 0.5, display: 'inline' }}>YouTube</Box>.
            </Typography>
            
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: gold, 
                color: dark, 
                fontWeight: 700, 
                borderRadius: 2, 
                px: 4, 
                py: 1.5, 
                mb: 4, 
                fontSize: '16px',
                textTransform: 'uppercase',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                transition: 'all 0.3s ease-out 0.7s',
                '&:hover': { 
                  bgcolor: '#c98b36',
                  transform: 'translateY(-3px) scale(1.05)',
                  boxShadow: `0 10px 25px ${gold}40`
                } 
              }}
            >
              BOOK SITE VISIT
            </Button>
              </Grid>
             
          {/* Right: Image */}
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.9)',
              transition: 'all 0.4s ease-out 0.3s'
            }}
          >
              {/* <Box
              component="img"
              src="https://i.imgur.com/0y8Ftya.png"
              alt="Founder"
              sx={{
                  width: { xs: '80%', md: '100%' },
                  maxWidth: 400,
                borderRadius: 3,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                objectFit: 'cover',
              }}
              /> */}
          </Grid>
        </Grid>

        {/* Stats Row - Bottom */}
        <Box sx={{ 
          mt: 8, 
          pt: 6, 
          borderTop: `1px solid ${gold}20`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.4s ease-out 0.4s'
        }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6} md={4}>
              <AnimatedCounter target={12} suffix="+" duration={2000} />
              <Typography sx={{ color: 'white', opacity: 0.8, fontWeight: 500, fontSize: 14, textAlign: 'center', textTransform: 'uppercase' }}>Years of Experience</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <AnimatedCounter target={800} suffix="+" duration={2500} />
              <Typography sx={{ color: 'white', opacity: 0.8, fontWeight: 500, fontSize: 14, textAlign: 'center', textTransform: 'uppercase' }}>Happy Customers</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

function FAQSection() {
  const gold = '#e0a146';
  const dark = '#181c22';
  
  const faqs = [
    {
      question: "What is real estate investment and how can it help my business?",
      answer: "Real estate investment helps you build long-term wealth through property appreciation, rental income, and tax benefits. It provides a stable foundation for your financial portfolio and can generate passive income streams."
    },
    {
      question: "How do I start investing in open plots with Surya Prime Ventures?",
      answer: "Starting is easy! Contact our team for a consultation, visit our DTCP approved plots, and we'll guide you through the entire process from selection to documentation and ownership transfer."
    },
    {
      question: "What makes Surya Prime Ventures plots different from other developers?",
      answer: "Our plots are 100% DTCP approved, RERA registered, located in high-growth areas, and come with transparent documentation. We have over 12 years of experience and 800+ satisfied customers."
    },
    {
      question: "Are there any hidden costs or charges?",
      answer: "No hidden costs! We believe in complete transparency. All charges are clearly communicated upfront, and our documentation process is straightforward with no surprise fees."
    }
  ];

  return (
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
        {/* Centered Main Heading */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white', 
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2
            }}
          >
              Frequently asked questions
            </Typography>
        </Box>

        {/* Two Column Layout - Side by Side */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 6,
          alignItems: 'flex-start'
        }}>
          {/* Left Half - Still have questions card */}
          <Box sx={{ 
            flex: { xs: '1', md: '0 0 50%' },
            width: { xs: '100%', md: '50%' }
          }}>
            <Card sx={{ 
              bgcolor: 'rgba(224, 161, 70, 0.1)', 
              border: `1px solid ${gold}`,
              borderRadius: 3,
              p: 4,
              height: 'fit-content'
            }}>
              <Typography variant="h5" sx={{ 
                color: gold, 
                fontWeight: 700, 
                mb: 3,
                fontSize: '1.5rem'
              }}>
                Still have questions?
              </Typography>
              <Typography sx={{ 
                color: 'white', 
                opacity: 0.9, 
                mb: 4,
                lineHeight: 1.6,
                fontSize: '16px'
              }}>
                Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: gold, 
                  color: dark, 
                  fontWeight: 700, 
                  borderRadius: 2, 
                  px: 4, 
                  py: 1.5,
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  '&:hover': { bgcolor: '#c98b36' }
                }}
              >
                Send email
              </Button>
            </Card>
          </Box>

          {/* Right Half - FAQ List */}
          <Box sx={{ 
            flex: { xs: '1', md: '0 0 50%' },
            width: { xs: '100%', md: '50%' }
          }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqs.map((faq, index) => (
                <Accordion 
                  key={index}
                  sx={{ 
                    bgcolor: 'rgba(224, 161, 70, 0.1)', 
                    border: `1px solid ${gold}`,
                    borderRadius: 3,
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': { 
                      bgcolor: 'rgba(224, 161, 70, 0.15)',
                      border: `2px solid ${gold}`
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box sx={{ 
                        width: 24, 
                        height: 24, 
                        bgcolor: gold, 
                        borderRadius: 1, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}>
                        <ExpandMore sx={{ color: dark, fontSize: 20 }} />
                      </Box>
                    }
                    sx={{ 
                      '& .MuiAccordionSummary-content': { 
                        margin: '16px 0' 
                      }
                    }}
                  >
                    <Typography sx={{ 
                      color: 'white', 
                      fontWeight: 600, 
                      fontSize: '16px',
                      pr: 2
                    }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                    <Typography sx={{ 
                      color: 'white', 
                      opacity: 0.9, 
                      lineHeight: 1.6,
                      fontSize: '15px'
                    }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

function OurProjects() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      name: 'SUKETANA',
      description: 'A premium open-plot venture village, where nature and opportunity thrive together.',
      plotNumbers: ['129', '148', '138', '140', '168', '183', '145', '156', '167', '178', '189', '200', '211', '222', '233', '244', '255', '266', '277', '288']
    },
    {
      name: 'SIRULASEEMA-2',
      description: 'Sirulaseema-2 is the perfect blend of nature and investment—open plots in a fast-growing destination.',
      plotNumbers: ['143', '144', '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '192', '193', '194', '195', '196', '197', '198', '199', '200', '201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211']
    },
    {
      name: 'SIDIL ACCCAAA 1',
      description: 'Premium residential plots in a strategic location with excellent connectivity and modern amenities.',
      plotNumbers: ['301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318', '319', '320', '321', '322', '323', '324', '325', '326', '327', '328', '329', '330']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('projects-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box id="projects-section" sx={{
      bgcolor: dark,
      color: 'white',
      py: { xs: 6, md: 8 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'conic-gradient(from 0deg, transparent, rgba(224, 161, 70, 0.02), transparent)',
        animation: 'rotate 35s linear infinite',
        pointerEvents: 'none',
        zIndex: 0
      },
      '@keyframes rotate': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    }}>
      <Container>
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
          position: 'relative',
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.4s ease-out'
        }}>
          <Typography variant="h2" sx={{
            color: gold,
            fontWeight: 800,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 2,
            textShadow: `2px 2px 4px rgba(0,0,0,0.3)`,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '4px',
              background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
              animation: 'pulse 3s ease-in-out infinite'
            },
            '@keyframes pulse': {
              '0%, 100%': { opacity: 0.6, transform: 'translateX(-50%) scaleX(1)' },
              '50%': { opacity: 1, transform: 'translateX(-50%) scaleX(1.3)' }
            }
          }}>
            OUR PROJECTS
          </Typography>
          <Box sx={{
            width: 100,
            height: 4,
            bgcolor: gold,
            mx: 'auto',
            borderRadius: 2,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'all 0.8s ease-out 0.3s'
          }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, position: 'relative', zIndex: 1 }}>
          {projects.map((project, index) => (
            <Box key={project.name} sx={{
              bgcolor: 'rgba(224, 161, 70, 0.1)',
              border: `2px solid ${gold}`,
              borderRadius: 4,
              p: 4,
              position: 'relative',
              overflow: 'hidden',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.9)',
              transition: `all 0.4s ease-out ${0.2 + index * 0.1}s`,
              '&:hover': {
                transform: 'translateY(-10px) scale(1.02)',
                boxShadow: `0 25px 50px rgba(0,0,0,0.4), 0 0 30px ${gold}30`,
                '& .map-container': {
                  transform: 'scale(1.05)'
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                width: 200,
                height: 200,
                background: `radial-gradient(circle, ${gold}20 0%, transparent 70%)`,
                borderRadius: '50%',
                transform: 'translate(50%, -50%)'
              }
            }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7}>
                  <Typography variant="h4" sx={{
                    color: gold,
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '1.8rem', md: '2.2rem' }
                  }}>
                    {project.name}
                  </Typography>
                  <Typography sx={{
                    color: 'white',
                    fontSize: '16px',
                    lineHeight: 1.7,
                    mb: 3,
                    opacity: 0.9
                  }}>
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: gold,
                      color: dark,
                      fontWeight: 700,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontSize: '16px',
                      textTransform: 'none',
                      boxShadow: `0 4px 20px ${gold}40`,
                      '&:hover': {
                        bgcolor: '#c98b36',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 6px 25px ${gold}60`
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    VIEW MORE
                  </Button>
                </Grid>
                
                <Grid item xs={12} md={5}>
                  <Box sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 3,
                    p: 3,
                    position: 'relative',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      background: `linear-gradient(45deg, ${gold}, #c98b36, ${gold})`,
                      borderRadius: 3,
                      zIndex: -1
                    }
                  }}>
                    <Typography sx={{
                      color: dark,
                      fontWeight: 700,
                      mb: 2,
                      textAlign: 'center',
                      fontSize: '14px'
                    }}>
                      PLOT LAYOUT
                    </Typography>
                    <Box sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(5, 1fr)',
                      gap: 1,
                      maxHeight: 200,
                      overflow: 'hidden'
                    }}>
                      {project.plotNumbers.slice(0, 20).map((number, i) => (
                        <Box key={i} sx={{
                          bgcolor: 'rgba(24, 28, 34, 0.1)',
                          border: '1px solid rgba(24, 28, 34, 0.2)',
                          borderRadius: 1,
                          p: 1,
                          textAlign: 'center',
                          fontSize: '10px',
                          fontWeight: 600,
                          color: dark,
                          minHeight: 30,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'rgba(224, 161, 70, 0.2)',
                            transform: 'scale(1.1)'
                          }
                        }}>
                          {number}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Gallery() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [isVisible, setIsVisible] = useState(false);
  
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
      alt: 'Playground area',
      title: 'Children Playground',
      category: 'Amenities'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
      alt: 'Aerial view of property',
      title: 'Aerial Property View',
      category: 'Overview'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
      alt: 'Pathway to building',
      title: 'Beautiful Pathways',
      category: 'Infrastructure'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
      alt: 'Landscaped area with sculptures',
      title: 'Landscaped Gardens',
      category: 'Landscaping'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1000&auto=format&fit=crop',
      alt: 'Gazebo structure',
      title: 'Elegant Gazebo',
      category: 'Amenities'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop',
      alt: 'Aerial development view',
      title: 'Development Overview',
      category: 'Overview'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('gallery-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box id="gallery-section" sx={{
      bgcolor: dark,
      color: 'white',
      py: { xs: 6, md: 8 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'conic-gradient(from 0deg, transparent, rgba(224, 161, 70, 0.03), transparent)',
        animation: 'rotate 30s linear infinite',
        pointerEvents: 'none',
        zIndex: 0
      },
      '@keyframes rotate': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    }}>
      <Container>
        {/* Centered Gallery Heading */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6, 
          position: 'relative', 
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.4s ease-out'
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: gold,
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                animation: 'pulse 2.5s ease-in-out infinite'
              },
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.5, transform: 'translateX(-50%) scaleX(1)' },
                '50%': { opacity: 1, transform: 'translateX(-50%) scaleX(1.2)' }
              }
            }}
          >
            GALLERY
          </Typography>
          <Typography 
            sx={{ 
              color: 'white', 
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.4s ease-out 0.1s'
            }}
          >
            Explore our beautiful projects through stunning visuals and see the quality we deliver.
          </Typography>
        </Box>

        {/* Unique Masonry-Style Gallery */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {/* First Row - Large Featured Image */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 4,
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4
          }}>
            <Box sx={{
              position: 'relative',
              width: { xs: '100%', md: '60%' },
              height: { xs: 300, md: 400 },
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: `0 20px 60px rgba(0,0,0,0.4)`,
              border: `3px solid ${gold}`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
              transition: 'all 0.4s ease-out 0.2s',
              '&:hover': {
                transform: 'scale(1.05) rotate(1deg)',
                boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 50px ${gold}40`,
                '& .image-overlay': {
                  opacity: 1
                },
                '& .image-glow': {
                  opacity: 1
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${gold}20, transparent, ${gold}10)`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: 1
              }
            }}>
              <Box className="image-glow" sx={{
                position: 'absolute',
                top: '-5px',
                left: '-5px',
                right: '-5px',
                bottom: '-5px',
                borderRadius: 4,
                background: `linear-gradient(45deg, ${gold}, transparent, ${gold})`,
                opacity: 0,
                zIndex: -1,
                filter: 'blur(10px)',
                transition: 'opacity 0.3s ease'
              }} />
              <Box
                component="img"
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
              <Box className="image-overlay" sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${gold}30, rgba(0,0,0,0.7))`,
                opacity: 0,
                transition: 'opacity 0.3s ease',
                zIndex: 2
              }} />
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                p: 3,
                color: 'white',
                zIndex: 3
              }}>
                <Typography variant="h6" sx={{ 
                  color: gold, 
                  fontWeight: 700, 
                  mb: 1,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                }}>
                  {galleryImages[0].title}
                </Typography>
                <Typography sx={{ 
                  fontSize: '14px', 
                  opacity: 0.9,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                }}>
                  {galleryImages[0].category}
                </Typography>
              </Box>
            </Box>

            {/* Side Images */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2,
              width: { xs: '100%', md: '35%' }
            }}>
              {galleryImages.slice(1, 3).map((image, index) => (
                <Box key={image.id} sx={{
                  position: 'relative',
                  height: { xs: 150, md: 190 },
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: `0 10px 30px rgba(0,0,0,0.3)`,
                  border: `2px solid ${gold}50`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
                  transition: `all 0.4s ease-out ${0.3 + index * 0.1}s`,
                  '&:hover': {
                    transform: 'translateY(-10px) scale(1.05)',
                    boxShadow: `0 25px 50px rgba(0,0,0,0.5), 0 0 30px ${gold}40`,
                    border: `3px solid ${gold}`,
                    '& .side-overlay': {
                      opacity: 1
                    },
                    '& .side-glow': {
                      opacity: 1
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${gold}20, transparent)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1
                  }
                }}>
                  <Box className="side-glow" sx={{
                    position: 'absolute',
                    top: '-3px',
                    left: '-3px',
                    right: '-3px',
                    bottom: '-3px',
                    borderRadius: 3,
                    background: `linear-gradient(45deg, ${gold}, transparent, ${gold})`,
                    opacity: 0,
                    zIndex: -1,
                    filter: 'blur(8px)',
                    transition: 'opacity 0.3s ease'
                  }} />
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                  <Box className="side-overlay" sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${gold}25, rgba(0,0,0,0.6))`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 2
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    p: 2,
                    zIndex: 3
                  }}>
                    <Typography sx={{ 
                      color: gold, 
                      fontWeight: 600, 
                      fontSize: '14px',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                    }}>
                      {image.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Second Row - Grid Layout */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)' 
            },
            gap: 3
          }}>
            {galleryImages.slice(3).map((image, index) => (
              <Box key={image.id} sx={{
                position: 'relative',
                height: { xs: 250, sm: 200, md: 220 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: `0 8px 25px rgba(0,0,0,0.3)`,
                border: `2px solid ${gold}30`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
                transition: `all 0.4s ease-out ${0.4 + index * 0.1}s`,
                '&:hover': {
                  transform: 'translateY(-15px) scale(1.05) rotate(2deg)',
                  boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 40px ${gold}50`,
                  border: `3px solid ${gold}`,
                  '& .overlay': {
                    opacity: 1
                  },
                  '& .grid-glow': {
                    opacity: 1
                  },
                  '& .grid-image': {
                    transform: 'scale(1.1)'
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${gold}15, transparent)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1
                }
              }}>
                <Box className="grid-glow" sx={{
                  position: 'absolute',
                  top: '-3px',
                  left: '-3px',
                  right: '-3px',
                  bottom: '-3px',
                  borderRadius: 3,
                  background: `linear-gradient(45deg, ${gold}, transparent, ${gold})`,
                  opacity: 0,
                  zIndex: -1,
                  filter: 'blur(8px)',
                  transition: 'opacity 0.3s ease'
                }} />
                <Box
                  className="grid-image"
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.2s ease'
                  }}
                />
                <Box className="overlay" sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${gold}30, rgba(0,0,0,0.8))`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  p: 2,
                  zIndex: 2
                }}>
                  <Typography variant="h6" sx={{ 
                    color: 'white', 
                    fontWeight: 700, 
                    textAlign: 'center',
                    mb: 1,
                    fontSize: { xs: '16px', md: '18px' },
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}>
                    {image.title}
                  </Typography>
                  <Typography sx={{ 
                    color: gold, 
                    fontSize: '12px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                  }}>
                    {image.category}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

function FeaturedProjects() {
  const projects = [
    { name: 'Surya Prime Heights', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Surya Prime Gardens', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Surya Prime Homes', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Featured Projects</Typography>
      <Grid container spacing={2}>
        {projects.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.name}>
            <Box sx={{
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
              backgroundImage: `url(${p.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 220,
              display: 'flex',
              alignItems: 'flex-end'
            }}>
              <Box sx={{ width: '100%', p: 2, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}>
                <Typography sx={{ color: 'white', fontWeight: 700 }}>{p.name}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

function RMCPlant() {
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            borderRadius: 2,
            minHeight: 260,
            backgroundImage: 'url(https://images.unsplash.com/photo-1581093458791-9d09c3e9b603?q=80&w=1200&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>Ready Mix Concrete Facility</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            In-house RMC plant with transit mixers and high-powered pumps for quality and speed.
          </Typography>
          <Box sx={{ display: 'grid', gap: 0.5, mt: 2 }}>
            <Typography>• Large site footprint</Typography>
            <Typography>• OPC-GGPS mix options</Typography>
            <Typography>• Multiple transit mixers</Typography>
            <Typography>• High-powered concrete pumps</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

function UPVCManufacturing() {
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>uPVC Manufacturing Facility</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            State-of-the-art extrusion facility with quality-focused manufacturing practices.
          </Typography>
          <Box sx={{ display: 'grid', gap: 0.5, mt: 2 }}>
            <Typography>• 100% lead-free durable profiles</Typography>
            <Typography>• Optimized for Indian climate</Typography>
            <Typography>• 80 tonnes/month capacity</Typography>
            <Typography>• 20,000 sft windows/month</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            borderRadius: 2,
            minHeight: 260,
            backgroundImage: 'url(https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </Grid>
      </Grid>
    </Container>
  )
}

function Testimonials() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Swargaseema has made it possible for me to invest in real estate and make informed decisions quickly and easily. Their transparency and professionalism are unmatched.",
      name: "Emily Johnson",
      title: "Business Owner",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      text: "I've been investing with Swargaseema for over 2 years now and it's made managing my real estate portfolio so much easier. Highly recommended!",
      name: "Ethan Miller",
      title: "Investment Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      text: "Swargaseema stands out as the most trustworthy and effective real estate developer I've ever worked with. Their DTCP approved plots give me complete peace of mind.",
      name: "Olivia Carter",
      title: "Property Investor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      text: "The team at Swargaseema provided excellent guidance throughout my investment journey. Their DTCP approved plots and transparent documentation process made everything smooth.",
      name: "Michael Chen",
      title: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 5,
      text: "I was initially hesitant about real estate investment, but Swargaseema's professional approach and clear communication made me confident in my decision.",
      name: "Sarah Williams",
      title: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 6,
      text: "The location and connectivity of Swargaseema plots are excellent. I can see great potential for appreciation in the coming years.",
      name: "David Rodriguez",
      title: "Financial Analyst",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 7,
      text: "Swargaseema's commitment to quality and customer satisfaction is evident in every interaction. They truly care about their investors' success.",
      name: "Lisa Thompson",
      title: "HR Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 8,
      text: "The documentation process was hassle-free and transparent. Swargaseema's team ensured everything was completed on time without any hidden costs.",
      name: "James Wilson",
      title: "Project Manager",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 9,
      text: "I've recommended Swargaseema to several friends and colleagues. Their plots offer excellent value for money with great growth potential.",
      name: "Maria Garcia",
      title: "Consultant",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 10,
      text: "The customer service at Swargaseema is outstanding. They answered all my questions promptly and provided detailed information about the investment.",
      name: "Robert Brown",
      title: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 11,
      text: "Surya Prime Ventures has exceeded my expectations in every way. Their DTCP approved plots and professional approach make them the best choice for real estate investment.",
      name: "Priya Sharma",
      title: "Doctor",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 12,
      text: "I've been investing in real estate for over 10 years, and Surya Prime Ventures stands out for their transparency, quality plots, and excellent customer support.",
      name: "Rajesh Kumar",
      title: "Business Executive",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('testimonials-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };


  return (
    <Box id="testimonials-section" sx={{
      bgcolor: dark,
      color: 'white',
      py: { xs: 6, md: 8 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'conic-gradient(from 0deg, transparent, rgba(224, 161, 70, 0.02), transparent)',
        animation: 'rotate 40s linear infinite',
        pointerEvents: 'none',
        zIndex: 0
      },
      '@keyframes rotate': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    }}>
      <Container>
        {/* Centered Heading and Description */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
          position: 'relative',
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.4s ease-out'
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: gold,
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                animation: 'pulse 3s ease-in-out infinite'
              },
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.5, transform: 'translateX(-50%) scaleX(1)' },
                '50%': { opacity: 1, transform: 'translateX(-50%) scaleX(1.3)' }
              }
            }}
          >
            Testimonial
          </Typography>
          <Typography 
            sx={{ 
              color: 'white',
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: 600,
              mx: 'auto',
              opacity: isVisible ? 0.9 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.4s ease-out 0.1s'
            }}
          >
            We provide all the advantages that can simplify your real estate investment journey with complete transparency and professional support.
          </Typography>
        </Box>

        {/* Testimonial Cards Slider */}
        <Box sx={{ position: 'relative', mb: 4, overflow: 'hidden', zIndex: 1 }}>
          <Box sx={{
            display: 'flex',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
              <Box key={slideIndex} sx={{ minWidth: '100%', flexShrink: 0 }}>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 3, 
                  justifyContent: 'center',
                  px: 2
                }}>
                  {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                    <Card key={testimonial.id} sx={{
                      bgcolor: 'rgba(224, 161, 70, 0.1)',
                      border: `2px solid ${gold}`,
                      borderRadius: 4,
                      p: 3,
                      width: { xs: '100%', sm: '320px' },
                      maxWidth: '350px',
                      height: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
                      transition: `all 0.4s ease-out ${0.2 + index * 0.1}s`,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-15px) scale(1.05)',
                        boxShadow: `0 30px 60px rgba(0,0,0,0.4), 0 0 40px ${gold}50`,
                        border: `3px solid ${gold}`,
                        '& .testimonial-glow': {
                          opacity: 1
                        },
                        '& .testimonial-overlay': {
                          opacity: 1
                        },
                        '& .testimonial-image': {
                          transform: 'scale(1.1)'
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${gold}20, transparent, ${gold}10)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 1
                      }
                    }}>
                      <Box className="testimonial-glow" sx={{
                        position: 'absolute',
                        top: '-3px',
                        left: '-3px',
                        right: '-3px',
                        bottom: '-3px',
                        borderRadius: 4,
                        background: `linear-gradient(45deg, ${gold}, transparent, ${gold})`,
                        opacity: 0,
                        zIndex: -1,
                        filter: 'blur(8px)',
                        transition: 'opacity 0.3s ease'
                      }} />
                      <Box className="testimonial-overlay" sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${gold}15, transparent)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 2
                      }} />
                      <CardContent sx={{ flexGrow: 1, p: 0, position: 'relative', zIndex: 3 }}>
                        {/* Rating Stars */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                          {[...Array(5)].map((_, i) => (
                            <Box
                              key={i}
                              sx={{
                                color: gold,
                                fontSize: '18px',
                                mr: 0.5,
                                textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                  transform: 'scale(1.2)'
                                }
                              }}
                            >
                              ★
                            </Box>
                          ))}
                        </Box>

                        {/* Testimonial Text */}
                        <Typography
                          sx={{
                            color: 'white',
                            fontSize: '14px',
                            lineHeight: 1.5,
                            mb: 3,
                            textAlign: 'center',
                            fontStyle: 'italic',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                          }}
                        >
                          "{testimonial.text}"
                        </Typography>

                        {/* Profile Section */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Box
                            className="testimonial-image"
                            component="img"
                            src={testimonial.image}
                            alt={testimonial.name}
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: `3px solid ${gold}`,
                              mr: 2,
                              transition: 'transform 0.3s ease',
                              boxShadow: `0 4px 15px rgba(0,0,0,0.3)`
                            }}
                          />
                          <Box>
                            <Typography
                              sx={{
                                color: gold,
                                fontWeight: 700,
                                fontSize: '14px',
                                mb: 0.5,
                                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                              }}
                            >
                              {testimonial.name}
                            </Typography>
                            <Typography
                              sx={{
                                color: 'white',
                                opacity: 0.8,
                                fontSize: '12px',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                              }}
                            >
                              {testimonial.title}
                            </Typography>
                          </Box>
                        </Box>
              </CardContent>
            </Card>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Navigation Controls */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          {/* Slide Indicators */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: index === currentSlide ? gold : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: index === currentSlide ? gold : 'rgba(255, 255, 255, 0.5)',
                    transform: 'scale(1.2)'
                  }
                }}
              />
            ))}
          </Box>

          {/* Arrow Controls */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            position: 'relative',
            zIndex: 1,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.8s'
          }}>
            <Box
              onClick={prevSlide}
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                border: `2px solid ${gold}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.15) translateY(-3px)',
                  boxShadow: `0 8px 30px rgba(0,0,0,0.4), 0 0 20px ${gold}40`
                }
              }}
            >
              <Typography sx={{ 
                color: gold, 
                fontSize: '20px', 
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}>‹</Typography>
            </Box>
            
            <Box
              onClick={nextSlide}
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: gold,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 20px ${gold}40`,
                '&:hover': {
                  bgcolor: '#c98b36',
                  transform: 'scale(1.15) translateY(-3px)',
                  boxShadow: `0 8px 30px ${gold}60`
                }
              }}
            >
              <Typography sx={{ 
                color: dark, 
                fontSize: '20px', 
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}>›</Typography>
            </Box>
          </Box>
        </Box>
    </Container>
    </Box>
  )
}

function FeaturesSection() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: '🏛️',
      title: 'DTCP Approved',
      description: 'All our plots are DTCP approved, ensuring legal compliance and future development potential.'
    },
    {
      icon: '📋',
      title: 'RERA Registered',
      description: 'RERA registered properties provide transparency and protection for investors.'
    },
    {
      icon: '📄',
      title: 'Transparent Documentation',
      description: 'Complete transparency in all documentation with no hidden costs or charges.'
    },
    {
      icon: '📍',
      title: 'Prime Locations',
      description: 'Strategically located plots with excellent connectivity and growth potential.'
    },
    {
      icon: '💡',
      title: 'Investment Guidance',
      description: 'Expert guidance from our experienced team to help you make informed decisions.'
    },
    {
      icon: '🚗',
      title: 'Free Site Visits',
      description: 'Schedule free site visits to explore our projects and make informed decisions.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('features-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box id="features-section" sx={{
      bgcolor: dark,
      color: 'white',
      py: { xs: 8, md: 10 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'conic-gradient(from 0deg, transparent, rgba(224, 161, 70, 0.03), transparent)',
        animation: 'rotate 20s linear infinite',
        pointerEvents: 'none',
        zIndex: 0
      },
      '@keyframes rotate': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    }}>
      <Container>
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8, 
          position: 'relative', 
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.4s ease-out'
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: gold, 
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                animation: 'pulse 2s ease-in-out infinite'
              },
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.5, transform: 'translateX(-50%) scaleX(1)' },
                '50%': { opacity: 1, transform: 'translateX(-50%) scaleX(1.2)' }
              }
            }}
          >
            Why Choose Us?
          </Typography>
          <Typography 
            sx={{ 
              color: 'white', 
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            We provide comprehensive real estate solutions with complete transparency and professional guidance.
          </Typography>
        </Box>

        {/* 3x2 Grid Layout with Premium Animations */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          {/* First Row - 3 Cards */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 4,
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            alignItems: 'center'
          }}>
            {features.slice(0, 3).map((feature, index) => (
              <Box key={index} sx={{
                position: 'relative',
                width: { xs: '100%', md: '280px' },
                maxWidth: '320px',
                height: { xs: 'auto', md: '260px' },
                bgcolor: 'rgba(224, 161, 70, 0.1)',
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 3,
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
                transition: `all 0.6s ease-out ${index * 0.2}s`,
                '&:hover': {
                  transform: 'translateY(-15px) scale(1.05)',
                  bgcolor: 'rgba(224, 161, 70, 0.2)',
                  border: `3px solid ${gold}`,
                  boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 30px ${gold}40`,
                  '& .icon-container': {
                    transform: 'rotate(360deg) scale(1.2)',
                    boxShadow: `0 0 30px ${gold}60`
                  },
                  '& .card-glow': {
                    opacity: 1
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${gold}20, transparent, ${gold}10)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }
              }}>
                <Box className="card-glow" sx={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  borderRadius: 4,
                  background: `linear-gradient(45deg, ${gold}, transparent, ${gold})`,
                  opacity: 0,
                  zIndex: -1,
                  filter: 'blur(8px)',
                  transition: 'opacity 0.3s ease'
                }} />
                <Box className="icon-container" sx={{
                  width: 80,
                  height: 80,
                  bgcolor: gold,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                  fontSize: '32px',
                  transition: 'all 0.4s ease',
                  boxShadow: `0 8px 25px rgba(224, 161, 70, 0.3)`,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-5px',
                    left: '-5px',
                    right: '-5px',
                    bottom: '-5px',
                    borderRadius: '50%',
                    background: `conic-gradient(from 0deg, ${gold}, transparent, ${gold})`,
                    opacity: 0,
                    animation: 'rotate 3s linear infinite',
                    zIndex: -1
                  }
                }}>
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: gold, 
                    fontWeight: 700, 
                    mb: 2,
                    fontSize: '18px',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0%',
                      height: '2px',
                      background: gold,
                      transition: 'width 0.3s ease'
                    }
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'white', 
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontSize: '14px'
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Second Row - 3 Cards */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            alignItems: 'center'
          }}>
            {features.slice(3, 6).map((feature, index) => (
              <Box key={index + 3} sx={{
                position: 'relative',
                width: { xs: '100%', md: '280px' },
                maxWidth: '320px',
                height: { xs: 'auto', md: '260px' },
                bgcolor: 'rgba(224, 161, 70, 0.1)',
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 3,
                textAlign: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
                transition: `all 0.6s ease-out ${(index + 3) * 0.2}s`,
                '&:hover': {
                  transform: 'translateY(-15px) scale(1.05)',
                  bgcolor: 'rgba(224, 161, 70, 0.2)',
                  border: `3px solid ${gold}`,
                  boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 30px ${gold}40`,
                  '& .icon-container': {
                    transform: 'rotate(360deg) scale(1.2)',
                    boxShadow: `0 0 30px ${gold}60`
                  },
                  '& .card-glow': {
                    opacity: 1
                  },
                  '& .title-underline': {
                    width: '100%'
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${gold}20, transparent, ${gold}10)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }
              }}>
                <Box className="card-glow" sx={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  borderRadius: 4,
                  background: `linear-gradient(45deg, ${gold}, transparent, ${gold})`,
                  opacity: 0,
                  zIndex: -1,
                  filter: 'blur(8px)',
                  transition: 'opacity 0.3s ease'
                }} />
                <Box className="icon-container" sx={{
                  width: 80,
                  height: 80,
                  bgcolor: gold,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                  fontSize: '32px',
                  transition: 'all 0.4s ease',
                  boxShadow: `0 8px 25px rgba(224, 161, 70, 0.3)`,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-5px',
                    left: '-5px',
                    right: '-5px',
                    bottom: '-5px',
                    borderRadius: '50%',
                    background: `conic-gradient(from 0deg, ${gold}, transparent, ${gold})`,
                    opacity: 0,
                    animation: 'rotate 3s linear infinite',
                    zIndex: -1
                  }
                }}>
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  className="title-underline"
                  sx={{ 
                    color: gold, 
                    fontWeight: 700, 
                    mb: 2,
                    fontSize: '18px',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-5px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0%',
                      height: '2px',
                      background: gold,
                      transition: 'width 0.3s ease'
                    }
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'white', 
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontSize: '14px'
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

function StatisticsSection() {
  const gold = '#e0a146';
  const dark = '#181c22';
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { label: 'Years of Experience', value: 12, suffix: '+', icon: '🏆' },
    { label: 'Happy Customers', value: 800, suffix: '+', icon: '👥' },
    { label: 'Projects Completed', value: 15, suffix: '+', icon: '🏗️' },
    { label: 'Plots Available', value: 500, suffix: '+', icon: '📍' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('statistics-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box id="statistics-section" sx={{
      bgcolor: dark,
      color: 'white',
      py: { xs: 8, md: 10 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(224, 161, 70, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'conic-gradient(from 0deg, transparent, rgba(224, 161, 70, 0.02), transparent)',
        animation: 'rotate 25s linear infinite',
        pointerEvents: 'none',
        zIndex: 0
      },
      '@keyframes rotate': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    }}>
      <Container>
        <Box sx={{ 
          textAlign: 'center', 
          mb: 8, 
          position: 'relative', 
          zIndex: 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 0.4s ease-out'
        }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: gold, 
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
                animation: 'pulse 2.5s ease-in-out infinite'
              },
              '@keyframes pulse': {
                '0%, 100%': { opacity: 0.5, transform: 'translateX(-50%) scaleX(1)' },
                '50%': { opacity: 1, transform: 'translateX(-50%) scaleX(1.2)' }
              }
            }}
          >
            Our Achievements
          </Typography>
          <Typography 
            sx={{ 
              color: 'white', 
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.4s ease-out 0.1s'
            }}
          >
            Numbers that speak for our commitment to excellence and customer satisfaction.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1, justifyContent: 'center' }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box sx={{ 
                textAlign: 'center',
                bgcolor: 'rgba(224, 161, 70, 0.1)',
                border: `2px solid ${gold}`,
                borderRadius: 4,
                p: 4,
                height: '100%',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.8)',
                transition: `all 0.6s ease-out ${0.5 + index * 0.2}s`,
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-15px) scale(1.05)',
                  bgcolor: 'rgba(224, 161, 70, 0.2)',
                  border: `3px solid ${gold}`,
                  boxShadow: `0 30px 60px rgba(0,0,0,0.4), 0 0 30px ${gold}40`,
                  '& .stat-icon': {
                    transform: 'rotate(360deg) scale(1.2)',
                    boxShadow: `0 0 20px ${gold}60`
                  },
                  '& .stat-glow': {
                    opacity: 1
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${gold}20, transparent, ${gold}10)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }
              }}>
                <Box className="stat-glow" sx={{
                  position: 'absolute',
                  top: '-2px',
                  left: '-2px',
                  right: '-2px',
                  bottom: '-2px',
                  borderRadius: 4,
                  background: `linear-gradient(45deg, ${gold}, transparent, ${gold})`,
                  opacity: 0,
                  zIndex: -1,
                  filter: 'blur(8px)',
                  transition: 'opacity 0.3s ease'
                }} />
                <Box className="stat-icon" sx={{
                  fontSize: '48px',
                  mb: 2,
                  display: 'block',
                  transition: 'all 0.4s ease',
                  animation: isVisible ? 'bounce 1s ease-in-out' : 'none',
                  animationDelay: `${0.7 + index * 0.2}s`
                }}>
                  {stat.icon}
                </Box>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
                <Typography 
                  sx={{ 
                    color: 'white', 
                    opacity: 0.9,
                    fontWeight: 600,
                    fontSize: 16,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    mt: 2,
                    letterSpacing: '0.5px'
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  )
}

function PartnersSection() {
  const gold = '#e0a146';
  const dark = '#181c22';

  const partners = [
    { name: 'DTCP Approved', logo: '🏛️', description: 'Directorate of Town and Country Planning' },
    { name: 'RERA Registered', logo: '📋', description: 'Real Estate Regulatory Authority' },
    { name: 'Bank Partnerships', logo: '🏦', description: 'Leading Financial Institutions' },
    { name: 'Legal Compliance', logo: '⚖️', description: 'Complete Legal Documentation' }
  ];

  return (
    <Box sx={{
      bgcolor: dark,
      color: 'white',
      py: { xs: 8, md: 10 },
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
        <Box sx={{ textAlign: 'center', mb: 8, position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: gold, 
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 4,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2
            }}
          >
            Certifications & Partnerships
          </Typography>
          <Typography 
            sx={{ 
              color: 'white', 
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Trusted by leading institutions and regulatory bodies for our commitment to quality and compliance.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 2, sm: 3, md: 4 },
          justifyContent: 'center',
          position: 'relative', 
          zIndex: 1 
        }}>
          {partners.map((partner, index) => (
            <Box 
              key={index}
              sx={{
                flex: { xs: '1 1 calc(50% - 8px)', sm: '1 1 calc(50% - 12px)', md: '1 1 calc(25% - 12px)' },
                minWidth: { xs: '140px', sm: '180px', md: '200px' },
                maxWidth: { xs: '180px', sm: '220px', md: '250px' },
                bgcolor: 'rgba(224, 161, 70, 0.1)',
                border: `1px solid ${gold}`,
                borderRadius: 3,
                p: { xs: 2, sm: 3, md: 4 },
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  bgcolor: 'rgba(224, 161, 70, 0.15)',
                  border: `2px solid ${gold}`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3)`
                }
              }}
            >
              <Box sx={{
                width: { xs: 60, sm: 70, md: 80 },
                height: { xs: 60, sm: 70, md: 80 },
                bgcolor: gold,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: { xs: 2, sm: 2.5, md: 3 },
                fontSize: { xs: '24px', sm: '28px', md: '32px' }
              }}>
                {partner.logo}
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: gold, 
                  fontWeight: 700, 
                  mb: { xs: 1, sm: 1.5, md: 2 },
                  fontSize: { xs: '14px', sm: '15px', md: '16px' },
                  lineHeight: 1.2
                }}
              >
                {partner.name}
              </Typography>
              <Typography 
                sx={{ 
                  color: 'white', 
                  opacity: 0.9, 
                  fontSize: { xs: '11px', sm: '12px', md: '12px' },
                  lineHeight: 1.4
                }}
              >
                {partner.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function CallToAction() {
  const gold = '#e0a146';
  const dark = '#181c22';

  return (
    <Box sx={{
      bgcolor: dark,
      color: 'white',
      py: { xs: 8, md: 10 },
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
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: gold, 
              fontWeight: 400,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 3,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.05em',
              lineHeight: 1.2
            }}
          >
            Ready to Invest?
          </Typography>
          
          <Typography 
            sx={{ 
              color: 'white', 
              opacity: 0.9,
              fontSize: { xs: '16px', md: '18px' },
              lineHeight: 1.6,
              mb: 6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Join 800+ satisfied customers who have made smart real estate investments with Surya Prime Ventures. 
            Get started today with our DTCP approved and RERA registered open plots.
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            gap: 3, 
            justifyContent: 'center',
            alignItems: 'center',
            mb: 6
          }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: gold,
                color: dark,
                fontWeight: 700,
                px: 6,
                py: 2,
                borderRadius: 3,
                fontSize: '18px',
                textTransform: 'uppercase',
                boxShadow: `0 8px 30px ${gold}40`,
                '&:hover': {
                  bgcolor: '#c98b36',
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 40px ${gold}60`
                },
                transition: 'all 0.3s ease',
                minWidth: { xs: '100%', sm: 'auto' }
              }}
              href="tel:+919902651666"
            >
              Call Now: +91 99026 51666
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: gold,
                color: gold,
                fontWeight: 700,
                px: 6,
                py: 2,
                borderRadius: 3,
                fontSize: '18px',
                textTransform: 'uppercase',
                borderWidth: 2,
                '&:hover': {
                  borderColor: '#c98b36',
                  color: '#c98b36',
                  bgcolor: 'rgba(224, 161, 70, 0.1)',
                  transform: 'translateY(-3px)'
                },
                transition: 'all 0.3s ease',
                minWidth: { xs: '100%', sm: 'auto' }
              }}
              href="https://wa.me/919902651666"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </Button>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 4, 
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              bgcolor: 'rgba(224, 161, 70, 0.1)',
              border: `1px solid ${gold}`,
              borderRadius: 3,
              p: 3,
              flex: 1
            }}>
              <Box sx={{
                width: 50,
                height: 50,
                bgcolor: gold,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Typography sx={{ color: dark, fontSize: '24px', fontWeight: 'bold' }}>✓</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: gold, fontWeight: 700, fontSize: '16px', mb: 0.5 }}>
                  Free Site Visit
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
                  Schedule a visit to our projects
                </Typography>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              bgcolor: 'rgba(224, 161, 70, 0.1)',
              border: `1px solid ${gold}`,
              borderRadius: 3,
              p: 3,
              flex: 1
            }}>
              <Box sx={{
                width: 50,
                height: 50,
                bgcolor: gold,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Typography sx={{ color: dark, fontSize: '24px', fontWeight: 'bold' }}>📋</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: gold, fontWeight: 700, fontSize: '16px', mb: 0.5 }}>
                  Expert Guidance
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
                  Get professional investment advice
                </Typography>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              bgcolor: 'rgba(224, 161, 70, 0.1)',
              border: `1px solid ${gold}`,
              borderRadius: 3,
              p: 3,
              flex: 1
            }}>
              <Box sx={{
                width: 50,
                height: 50,
                bgcolor: gold,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Typography sx={{ color: dark, fontSize: '24px', fontWeight: 'bold' }}>🏆</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: gold, fontWeight: 700, fontSize: '16px', mb: 0.5 }}>
                  Trusted Brand
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
                  12+ years of excellence
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default function Home() {
  return (
    <Box>
      <HeroHeader />
      <Highlights />
      <FeaturesSection />
      <StatisticsSection />
      <OurProjects />
      <Gallery />
      <PartnersSection />
      <FAQSection />
      <Testimonials />
      <CallToAction />
      {/* <FeaturedProjects /> */}
      {/* <RMCPlant /> */}
      {/* <UPVCManufacturing /> */}
    </Box>
  )
}


