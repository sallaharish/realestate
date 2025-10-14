import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from '@mui/material'
import AdminLayout from './AdminLayout'

export default function AdminDashboardMinimal() {
  const gold = '#e0a146'
  const dark = '#181c22'

  return (
    <AdminLayout>
      <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
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
        </Container>
      </Box>
    </AdminLayout>
  )
}
