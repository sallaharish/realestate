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

// Admin imports
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import PropertyManagement from './pages/admin/PropertyManagement.jsx'
import UserManagement from './pages/admin/UserManagement.jsx'
import AnalyticsReports from './pages/admin/AnalyticsReports.jsx'
import InquiriesManagement from './pages/admin/InquiriesManagement.jsx'
import Settings from './pages/admin/Settings.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import AdminTest from './pages/admin/AdminTest.jsx'
import AdminDashboardSimple from './pages/admin/AdminDashboardSimple.jsx'
import AdminDashboardFixed from './pages/admin/AdminDashboardFixed.jsx'
import AdminDashboardMinimal from './pages/admin/AdminDashboardMinimal.jsx'
import AdminDashboardThemed from './pages/admin/AdminDashboardThemed.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

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
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/test" element={<AdminTest />} />
        <Route path="/admin/simple" element={<AdminDashboardSimple />} />
        <Route path="/ " element={
          <ThemeProvider>
            <AdminDashboardThemed />
          </ThemeProvider>
        } />
        <Route path="/admin/properties" element={
          <ThemeProvider>
            <PropertyManagement />
          </ThemeProvider>
        } />
        <Route path="/admin/users" element={
          <ThemeProvider>
            <UserManagement />
          </ThemeProvider>
        } />
        <Route path="/admin/reports" element={
          <ThemeProvider>
            <AnalyticsReports />
          </ThemeProvider>
        } />
        <Route path="/admin/inquiries" element={
          <ThemeProvider>
            <InquiriesManagement />
          </ThemeProvider>
        } />
        <Route path="/admin/settings" element={
          <ThemeProvider>
            <Settings />
          </ThemeProvider>
        } />
      </Routes>
    </PageContainer>
  )
}
