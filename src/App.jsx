// import { useState } from 'react'
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
import Suketana from './pages/Suketana.jsx'
import GreenValley from './pages/GreenValley.jsx'
import RoyalGardens from './pages/RoyalGardens.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'

// navItems moved to HeroCarousel.jsx


function PageContainer({ children }) {
  return (
    <Box>
      {/* Navbar removed from here, will be inside HeroCarousel on Home page */}
      {/* <Toolbar /> */}
      {children}
      <FloatingActions />
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
        <Route path="/suketana" element={<Suketana />} />
        <Route path="/green-valley" element={<GreenValley />} />
        <Route path="/royal-gardens" element={<RoyalGardens />} />
      </Routes>
    </PageContainer>
  )
}
