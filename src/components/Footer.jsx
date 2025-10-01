import { Box, Container, Grid, Typography, Link as MuiLink, Divider } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, backgroundColor: 'grey.100', color: 'text.primary' }}>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Your Realty Brand</Typography>
            <Typography color="text.secondary">
              Corporate Office: Lawsons Bay Colony, Visakhapatnam - 530017
            </Typography>
            <Typography color="text.secondary">Email: info@example.com</Typography>
            <Typography color="text.secondary">Phone: +91 90000 00000</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>Main Menu</Typography>
            <Box sx={{ display: 'grid', gap: 0.5 }}>
              <MuiLink component={Link} to="/" underline="none">Home</MuiLink>
              <MuiLink component={Link} to="/about" underline="none">About Us</MuiLink>
              <MuiLink component={Link} to="/projects" underline="none">Projects</MuiLink>
              <MuiLink component={Link} to="/gallery" underline="none">Gallery</MuiLink>
              <MuiLink component={Link} to="/blog" underline="none">Blog</MuiLink>
              <MuiLink component={Link} to="/contact" underline="none">Contact Us</MuiLink>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>Follow Us</Typography>
            <Box sx={{ display: 'grid', gap: 0.5 }}>
              <MuiLink href="#" underline="none">YouTube</MuiLink>
              <MuiLink href="#" underline="none">Twitter</MuiLink>
              <MuiLink href="#" underline="none">Facebook</MuiLink>
              <MuiLink href="#" underline="none">Instagram</MuiLink>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2">© {new Date().getFullYear()} All rights reserved</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <MuiLink href="#" underline="none">Privacy Policy</MuiLink>
            <MuiLink href="#" underline="none">Terms and Conditions</MuiLink>
            <MuiLink href="#" underline="none">Disclaimer</MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}


