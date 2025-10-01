import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import './App.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Gallery from './pages/Gallery.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleDrawer = () => setMobileOpen(!mobileOpen)

  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <Toolbar sx={{ gap: 2 }}>
          <IconButton color="inherit" edge="start" sx={{ display: { xs: 'inline-flex', md: 'none' } }} onClick={toggleDrawer} aria-label="open navigation">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: { xs: 1, md: 0 }, textDecoration: 'none', color: 'inherit', fontWeight: 800, letterSpacing: 1 }}>
            M.V.V BUILDERS
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, ml: 'auto', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button key={item.to} component={Link} to={item.to} color="inherit" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
                {item.label.toUpperCase()}
              </Button>
            ))}
            <Button href="tel:+919517991799" variant="contained" color="primary" sx={{ borderRadius: 999, px: 2.5, py: 0.75 }}>
              95179 91799
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ width: 260 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={Link} to={item.to}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton component="a" href="tel:+919517991799">
                <ListItemText primary="Call 95179 91799" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

function PageContainer({ children }) {
  return (
    <Box>
      <Navbar />
      <Toolbar />
      {children}
      <Footer />
    </Box>
  )
}

export default function App() {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageContainer>
  )
}
