import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Button,
  Divider,
  LinearProgress
} from '@mui/material'
import {
  Dashboard as DashboardIcon,
  TrendingUp,
  TrendingDown,
  People,
  Home,
  AttachMoney,
  Notifications,
  MoreVert,
  Add,
  Visibility,
  Edit,
  Delete
} from '@mui/icons-material'
import AdminLayout from '../admin/AdminLayout'

export default function AdminDashboard() {
  const gold = '#e0a146'
  const dark = '#181c22'

  // Mock data - replace with real data from your backend
  const stats = [
    {
      title: 'Total Properties',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: <Home />,
      color: '#2196f3'
    },
    {
      title: 'Active Listings',
      value: '18',
      change: '+5%',
      trend: 'up',
      icon: <Visibility />,
      color: '#4caf50'
    },
    {
      title: 'Total Revenue',
      value: '₹2.4M',
      change: '+18%',
      trend: 'up',
      icon: <AttachMoney />,
      color: '#ff9800'
    },
    {
      title: 'Registered Users',
      value: '156',
      change: '+8%',
      trend: 'up',
      icon: <People />,
      color: '#9c27b0'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'property_added',
      message: 'New property "Green Valley Plot 45" added',
      time: '2 hours ago',
      user: 'John Doe'
    },
    {
      id: 2,
      type: 'inquiry',
      message: 'New inquiry for Suketana project',
      time: '4 hours ago',
      user: 'Jane Smith'
    },
    {
      id: 3,
      type: 'user_registered',
      message: 'New user registration',
      time: '6 hours ago',
      user: 'Mike Johnson'
    },
    {
      id: 4,
      type: 'payment',
      message: 'Payment received for Royal Gardens',
      time: '8 hours ago',
      user: 'Sarah Wilson'
    }
  ]

  const recentProperties = [
    {
      id: 1,
      name: 'Green Valley Plot 45',
      location: 'Hyderabad',
      price: '₹45,00,000',
      status: 'Available',
      type: 'Residential Plot',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Suketana Premium Villa',
      location: 'Hyderabad',
      price: '₹85,00,000',
      status: 'Sold',
      type: 'Villa',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Royal Gardens Plot 12',
      location: 'Hyderabad',
      price: '₹52,00,000',
      status: 'Under Negotiation',
      type: 'Residential Plot',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=300&auto=format&fit=crop'
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
                          bgcolor: stat.trend === 'up' ? '#4caf50' : '#f44336',
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

          {/* Main Content Grid */}
          <Grid container spacing={3}>
            {/* Recent Activities */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  background: 'white',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: dark }}>
                      Recent Activities
                    </Typography>
                    <Button size="small" sx={{ color: gold }}>
                      View All
                    </Button>
                  </Box>
                  <List sx={{ p: 0 }}>
                    {recentActivities.map((activity, index) => (
                      <ListItem key={activity.id} sx={{ px: 0, py: 1.5 }}>
                        <ListItemAvatar>
                          <Avatar
                            sx={{
                              bgcolor: gold,
                              width: 40,
                              height: 40
                            }}
                          >
                            <Notifications />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {activity.message}
                            </Typography>
                          }
                          secondary={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography variant="caption" color="text.secondary">
                                {activity.user}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {activity.time}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Recent Properties */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  background: 'white',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: `1px solid ${gold}20`
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: dark }}>
                      Recent Properties
                    </Typography>
                    <Button size="small" sx={{ color: gold }}>
                      View All
                    </Button>
                  </Box>
                  <List sx={{ p: 0 }}>
                    {recentProperties.map((property, index) => (
                      <ListItem key={property.id} sx={{ px: 0, py: 1.5 }}>
                        <ListItemAvatar>
                          <Avatar
                            variant="rounded"
                            src={property.image}
                            sx={{ width: 60, height: 60 }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {property.name}
                            </Typography>
                          }
                          secondary={
                            <Box>
                              <Typography variant="caption" color="text.secondary" display="block">
                                {property.location} • {property.type}
                              </Typography>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 600, color: gold }}>
                                  {property.price}
                                </Typography>
                                <Chip
                                  label={property.status}
                                  size="small"
                                  sx={{
                                    bgcolor: property.status === 'Available' ? '#4caf50' : 
                                            property.status === 'Sold' ? '#f44336' : '#ff9800',
                                    color: 'white',
                                    fontSize: '10px',
                                    height: 20
                                  }}
                                />
                              </Box>
                            </Box>
                          }
                        />
                        <IconButton size="small">
                          <MoreVert />
                        </IconButton>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Quick Actions */}
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
                        startIcon={<Dashboard />}
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
