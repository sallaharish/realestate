import { useEffect, useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import PhoneIcon from '@mui/icons-material/Phone'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const gold = '#e0a146'
  const dark = '#181c22'
  
  const toggleDrawer = () => setMobileOpen(!mobileOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          backdropFilter: scrolled ? 'blur(6px)' : 'none',
          backgroundColor: scrolled ? 'rgba(24,28,34,0.70)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.10)' : 'transparent',
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
                  '&:hover': {
                    color: gold,
                    backgroundColor: 'rgba(224, 161, 70, 0.1)'
                  }
                }}
              >
                {item.label.toUpperCase()}
              </Button>
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
                    '&.Mui-selected': {
                      bgcolor: 'rgba(224, 161, 70, 0.3)',
                      color: gold,
                      borderLeft: `3px solid ${gold}`
                    }
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
