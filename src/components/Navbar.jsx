import { useEffect, useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import PhoneIcon from '@mui/icons-material/Phone'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Projects', to: '/projects', hasDropdown: true },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]

const projectItems = [
  { label: 'Suketana', to: '/suketana', description: 'Premium Residential Plots' },
  { label: 'Green Valley', to: '/green-valley', description: 'Eco-Friendly Residential Plots' },
  { label: 'Royal Gardens', to: '/royal-gardens', description: 'Luxury Residential Plots' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [projectsAnchorEl, setProjectsAnchorEl] = useState(null)
  const gold = '#e0a146'
  const dark = '#181c22'
  const location = useLocation()
  
  const toggleDrawer = () => setMobileOpen(!mobileOpen)
  
  const handleProjectsClick = (event) => {
    setProjectsAnchorEl(event.currentTarget)
  }
  
  const handleProjectsClose = () => {
    setProjectsAnchorEl(null)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Check if we're on the contact page or project pages
  const isContactPage = location.pathname === '/contact'
  const isProjectPage = location.pathname.startsWith('/suketana') || 
                       location.pathname.startsWith('/green-valley') || 
                       location.pathname.startsWith('/royal-gardens')
  const needsConstantBackground = isContactPage || isProjectPage

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={scrolled ? 2 : 0}
        sx={{
          zIndex: 1201,
          width: '100vw',
          left: 0,
          top: 0,
          backdropFilter: needsConstantBackground ? 'blur(6px)' : (scrolled ? 'blur(6px)' : 'none'),
          backgroundColor: needsConstantBackground ? 'rgba(24,28,34,0.90)' : (scrolled ? 'rgba(24,28,34,0.70)' : 'transparent'),
          borderBottom: needsConstantBackground ? '1px solid rgba(255,255,255,0.10)' : (scrolled ? '1px solid rgba(255,255,255,0.10)' : 'transparent'),
          transition: 'background-color 200ms ease, backdrop-filter 200ms ease, border-color 200ms ease, box-shadow 200ms ease'
        }}
      >
        <Toolbar sx={{
          gap: 2,
          minHeight: { xs: 64, md: 76 },
          px: { xs: 2, md: 6 }
        }}>
          <Typography variant="h6" component={Link} to="/" sx={{
            flexGrow: { xs: 1, md: 0 },
            textDecoration: 'none',
            color: 'white',
            fontWeight: 800,
            letterSpacing: 1,
            fontSize: { xs: '1rem', md: '1.15rem' }
          }}>
            SURYA PRIME VENTURES
          </Typography>
          
          {/* Centered menu on desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, mx: 'auto', alignItems: 'center' }}>
            {navItems.map((item) => (
              item.hasDropdown ? (
                <Box key={item.label}>
                  <Button
                    onClick={handleProjectsClick}
                    sx={{
                      fontWeight: 700,
                      letterSpacing: 0.6,
                      color: 'white',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      '&:hover': {
                        color: gold,
                        backgroundColor: 'rgba(224, 161, 70, 0.1)'
                      },
                      ...(location.pathname.startsWith('/suketana') || location.pathname.startsWith('/green-valley') || location.pathname.startsWith('/royal-gardens') ? {
                        color: gold,
                        backgroundColor: 'rgba(224, 161, 70, 0.1)',
                      } : {}),
                    }}
                  >
                    {item.label}
                    <KeyboardArrowDownIcon sx={{ ml: 0.5, fontSize: '16px' }} />
                  </Button>
                  <Menu
                    anchorEl={projectsAnchorEl}
                    open={Boolean(projectsAnchorEl)}
                    onClose={handleProjectsClose}
                    sx={{
                      '& .MuiPaper-root': {
                        bgcolor: dark,
                        border: `1px solid ${gold}`,
                        borderRadius: 2,
                        mt: 1,
                      }
                    }}
                  >
                    {projectItems.map((project) => (
                      <MenuItem
                        key={project.label}
                        component={Link}
                        to={project.to}
                        onClick={handleProjectsClose}
                        sx={{
                          color: 'white',
                          px: 3,
                          py: 2,
                          minWidth: '250px',
                          '&:hover': {
                            backgroundColor: 'rgba(224, 161, 70, 0.1)',
                            color: gold,
                          },
                          ...(location.pathname === project.to && {
                            color: gold,
                            backgroundColor: 'rgba(224, 161, 70, 0.1)',
                          }),
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>
                            {project.label}
                          </Typography>
                          <Typography sx={{ fontSize: '12px', opacity: 0.8 }}>
                            {project.description}
                          </Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={item.to}
                  component={Link}
                  to={item.to}
                  color="inherit"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 0.6,
                    color: 'white',
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    '&:hover': {
                      color: gold,
                      backgroundColor: 'rgba(224, 161, 70, 0.1)'
                    },
                    ...(location.pathname === item.to && {
                      color: gold,
                      backgroundColor: 'rgba(224, 161, 70, 0.1)',
                    }),
                  }}
                >
                  {item.label}
                </Button>
              )
            ))}
          </Box>
          
          {/* Right-aligned phone CTA and mobile menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Button
                href="tel:+919902651666"
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{ 
                  borderRadius: 999, 
                  px: 2.25, 
                  py: 0.75, 
                  fontWeight: 700,
                  bgcolor: gold,
                  '&:hover': { bgcolor: '#d4923a' }
                }}
              >
                99026 51666
              </Button>
            </Box>
            
            {/* Mobile hamburger/close menu - positioned on the right */}
            <IconButton 
              color="inherit" 
              edge="end" 
              sx={{ 
                display: { xs: 'inline-flex', md: 'none' },
                color: 'white',
                '&:hover': { color: gold }
              }} 
              onClick={toggleDrawer} 
              aria-label={mobileOpen ? "close navigation" : "open navigation"}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Spacer to offset fixed navbar height */}
      <Toolbar sx={{ minHeight: { xs: 64, md: 76 }, background: 'transparent' }} />
      
      {/* Mobile Drawer - slides from right */}
      <Drawer 
        anchor="right" 
        open={mobileOpen} 
        onClose={toggleDrawer} 
        sx={{ 
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: dark,
            background: 'linear-gradient(135deg, rgba(24, 28, 34, 0.95) 0%, rgba(224, 161, 70, 0.1) 100%)',
            borderLeft: `2px solid ${gold}`,
            boxShadow: `0 0 20px rgba(224, 161, 70, 0.3)`
          }
        }}
      >
        <Box sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          background: 'radial-gradient(circle at 20% 50%, rgba(224, 161, 70, 0.15) 0%, transparent 50%)'
        }}>
          {/* Header */}
          <Box sx={{ 
            p: 3, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            borderBottom: `1px solid rgba(224, 161, 70, 0.3)`
          }}>
            <Typography variant="h6" sx={{ 
              color: gold, 
              fontWeight: 800,
              fontSize: '1.1rem'
            }}>
              MENU
            </Typography>
          </Box>
          
          {/* Navigation Items */}
          <List sx={{ flexGrow: 1, pt: 2 }}>
            {navItems.map((item, index) => (
              item.hasDropdown ? (
                <Box key={item.label}>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <ListItemButton 
                      onClick={toggleDrawer}
                      sx={{
                        mx: 2,
                        borderRadius: 2,
                        color: 'white',
                        '&:hover': {
                          bgcolor: 'rgba(224, 161, 70, 0.2)',
                          color: gold,
                          transform: 'translateX(5px)',
                          transition: 'all 0.3s ease'
                        },
                        ...(location.pathname.startsWith('/suketana') || location.pathname.startsWith('/green-valley') || location.pathname.startsWith('/royal-gardens') ? {
                          bgcolor: 'rgba(224, 161, 70, 0.3)',
                          color: gold,
                          borderLeft: `3px solid ${gold}`
                        } : {}),
                      }}
                    >
                      <ListItemText 
                        primary={item.label} 
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontWeight: 600,
                            fontSize: '1rem'
                          }
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {/* Project Submenu */}
                  {projectItems.map((project) => (
                    <ListItem key={project.to} disablePadding sx={{ mb: 0.5, pl: 4 }}>
                      <ListItemButton 
                        component={Link} 
                        to={project.to}
                        onClick={toggleDrawer}
                        sx={{
                          mx: 2,
                          borderRadius: 2,
                          color: 'white',
                          opacity: 0.8,
                          '&:hover': {
                            bgcolor: 'rgba(224, 161, 70, 0.2)',
                            color: gold,
                            opacity: 1,
                            transform: 'translateX(5px)',
                            transition: 'all 0.3s ease'
                          },
                          ...(location.pathname === project.to && {
                            bgcolor: 'rgba(224, 161, 70, 0.3)',
                            color: gold,
                            borderLeft: `3px solid ${gold}`,
                            opacity: 1
                          }),
                        }}
                      >
                        <ListItemText 
                          primary={project.label}
                          secondary={project.description}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontWeight: 500,
                              fontSize: '0.9rem'
                            },
                            '& .MuiListItemText-secondary': {
                              fontSize: '0.75rem',
                              opacity: 0.7
                            }
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Box>
              ) : (
                <ListItem key={item.to} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton 
                    component={Link} 
                    to={item.to}
                    onClick={toggleDrawer}
                    sx={{
                      mx: 2,
                      borderRadius: 2,
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(224, 161, 70, 0.2)',
                        color: gold,
                        transform: 'translateX(5px)',
                        transition: 'all 0.3s ease'
                      },
                      ...(location.pathname === item.to && {
                        bgcolor: 'rgba(224, 161, 70, 0.3)',
                        color: gold,
                        borderLeft: `3px solid ${gold}`
                      }),
                    }}
                  >
                    <ListItemText 
                      primary={item.label} 
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: 600,
                          fontSize: '1rem'
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            ))}
          </List>
          
          <Divider sx={{ borderColor: 'rgba(224, 161, 70, 0.3)', mx: 2 }} />
          
          {/* Phone CTA */}
          <Box sx={{ p: 3 }}>
            <Button
              href="tel:+919902651666"
              variant="contained"
              startIcon={<PhoneIcon />}
              fullWidth
              sx={{
                bgcolor: gold,
                color: 'white',
                py: 1.5,
                fontWeight: 700,
                fontSize: '1rem',
                borderRadius: 2,
                '&:hover': { 
                  bgcolor: '#d4923a',
                  transform: 'translateY(-2px)',
                  boxShadow: `0 5px 15px rgba(224, 161, 70, 0.4)`
                }
              }}
            >
              Call 99026 51666
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
