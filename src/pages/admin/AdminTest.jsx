import React from 'react'
import { Box, Typography, Container } from '@mui/material'

export default function AdminTest() {
  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Container>
        <Typography variant="h4" color="primary">
          Admin Test Page - This should work!
        </Typography>
        <Typography variant="body1">
          If you can see this, the basic admin routing is working.
        </Typography>
      </Container>
    </Box>
  )
}
