import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Avatar
} from '@mui/material'
import {
  Menu as MenuIcon,
  Notifications,
  AccountCircle
} from '@mui/icons-material'

export default function AdminDashboardSimple() {
  const gold = '#e0a146'
  const dark = '#181c22'

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Simple Header */}
      <AppBar
        position="static"
        sx={{
          bgcolor: 'white',
          color: dark,
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          borderBottom: `1px solid ${gold}20`
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Admin Dashboard
          </Typography>

          <IconButton color="inherit" sx={{ mr: 1 }}>
            <Notifications />
          </IconButton>

          <Avatar sx={{ bgcolor: gold }}>
            <AccountCircle />
          </Avatar>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ fontWeight: 600, color: dark, mb: 4 }}>
            Dashboard Overview
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(224, 161, 70, 0.1) 0%, rgba(224, 161, 70, 0.05) 100%)',
                  border: `2px solid ${gold}`,
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark, mb: 1 }}>
                    24
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Properties
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)',
                  border: '2px solid #4caf50',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark, mb: 1 }}>
                    18
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Active Listings
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%)',
                  border: '2px solid #ff9800',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark, mb: 1 }}>
                    ₹2.4M
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Revenue
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(156, 39, 176, 0.05) 100%)',
                  border: '2px solid #9c27b0',
                  borderRadius: 3
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: dark, mb: 1 }}>
                    156
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Registered Users
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ color: dark, mb: 2 }}>
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ p: 2, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: `${gold}10` } }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Manage Properties
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ p: 2, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: `${gold}10` } }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    View Users
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ p: 2, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: `${gold}10` } }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Generate Reports
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ p: 2, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: `${gold}10` } }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Settings
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
