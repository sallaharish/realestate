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
import AdminLayoutWithTheme from './AdminLayoutWithTheme'
import { useTheme } from '../../contexts/ThemeContext'

export default function AdminDashboardThemed() {
  const customTheme = useTheme()
  const gold = customTheme.palette.gold

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
    <AdminLayoutWithTheme>
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: customTheme.palette.background.default, minHeight: '100vh' }}>
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: customTheme.palette.text.primary, mb: 1 }}>
              Dashboard Overview
            </Typography>
            <Typography variant="body1" sx={{ color: customTheme.palette.text.secondary }}>
              Welcome back! Here's what's happening with your real estate business today.
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    background: customTheme.darkMode 
                      ? `linear-gradient(135deg, rgba(224, 161, 70, 0.2) 0%, rgba(224, 161, 70, 0.1) 100%)`
                      : `linear-gradient(135deg, rgba(224, 161, 70, 0.1) 0%, rgba(224, 161, 70, 0.05) 100%)`,
                    border: `2px solid ${gold}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    bgcolor: customTheme.palette.background.card,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: customTheme.darkMode 
                        ? `0 15px 30px rgba(0,0,0,0.4), 0 0 20px ${gold}30`
                        : `0 15px 30px rgba(0,0,0,0.1), 0 0 20px ${gold}30`
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
                    <Typography variant="h4" sx={{ fontWeight: 700, color: customTheme.palette.text.primary, mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: customTheme.palette.text.secondary }}>
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
                  borderRadius: 3,
                  boxShadow: customTheme.darkMode 
                    ? '0 4px 20px rgba(0,0,0,0.3)' 
                    : '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${customTheme.palette.border}`,
                  bgcolor: customTheme.palette.background.card
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: customTheme.palette.text.primary, mb: 3 }}>
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
                          color: customTheme.palette.dark,
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
                            bgcolor: `${gold}10`
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
                            bgcolor: `${gold}10`
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
                            bgcolor: `${gold}10`
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
    </AdminLayoutWithTheme>
  )
}
