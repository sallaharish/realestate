import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button
} from '@mui/material'
import {
  Dashboard as DashboardIcon,
  TrendingUp,
  People,
  Home,
  AttachMoney,
  Visibility,
  Add
} from '@mui/icons-material'
import AdminLayout from './AdminLayout'

export default function AdminDashboardFixed() {
  const gold = '#e0a146'
  const dark = '#181c22'

  // Simplified mock data
  const stats = [
    {
      title: 'Total Properties',
      value: '24',
      change: '+12%',
      icon: <Home />,
      color: '#2196f3'
    },
    {
      title: 'Active Listings',
      value: '18',
      change: '+5%',
      icon: <Visibility />,
      color: '#4caf50'
    },
    {
      title: 'Total Revenue',
      value: '₹2.4M',
      change: '+18%',
      icon: <AttachMoney />,
      color: '#ff9800'
    },
    {
      title: 'Registered Users',
      value: '156',
      change: '+8%',
      icon: <People />,
      color: '#9c27b0'
    }
  ]

  return (
    <AdminLayout>
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: dark, mb: 1 }}>
              Dashboard Overview
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Welcome back! Here's what's happening with your real estate business today.
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(224, 161, 70, 0.1) 0%, rgba(224, 161, 70, 0.05) 100%)',
                    border: `2px solid ${gold}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 15px 30px rgba(0,0,0,0.1), 0 0 20px ${gold}30`
                    }
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: stat.color,
                          width: 56,
                          height: 56,
                          boxShadow: `0 8px 16px ${stat.color}40`
                        }}
                      >
                        {stat.icon}
                      </Avatar>
                      <Chip
                        label={stat.change}
                        size="small"
                        sx={{
                          bgcolor: '#4caf50',
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: dark, mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Quick Actions */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card
                sx={{
                  background: 'white',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: dark, mb: 3 }}>
                    Quick Actions
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<Add />}
                        sx={{
                          bgcolor: gold,
                          color: dark,
                          py: 2,
                          fontWeight: 600,
                          '&:hover': { bgcolor: '#d4943a' }
                        }}
                      >
                        Add Property
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<People />}
                        sx={{
                          borderColor: gold,
                          color: gold,
                          py: 2,
                          fontWeight: 600,
                          '&:hover': { 
                            borderColor: gold,
                            bgcolor: 'rgba(224, 161, 70, 0.1)'
                          }
                        }}
                      >
                        Manage Users
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<AttachMoney />}
                        sx={{
                          borderColor: gold,
                          color: gold,
                          py: 2,
                          fontWeight: 600,
                          '&:hover': { 
                            borderColor: gold,
                            bgcolor: 'rgba(224, 161, 70, 0.1)'
                          }
                        }}
                      >
                        View Reports
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<DashboardIcon />}
                        sx={{
                          borderColor: gold,
                          color: gold,
                          py: 2,
                          fontWeight: 600,
                          '&:hover': { 
                            borderColor: gold,
                            bgcolor: 'rgba(224, 161, 70, 0.1)'
                          }
                        }}
                      >
                        Analytics
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AdminLayout>
  )
}
