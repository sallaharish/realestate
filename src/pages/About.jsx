import { Box, Container, Grid, Typography } from '@mui/material'

export default function About() {
  return (
    <Box>
      <Box sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>About Us</Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>We understand the importance of innovation and professionalism.</Typography>
      </Box>
      <Container sx={{ pb: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>
              MVV Builders, Visakhapatnam, Andhra Pradesh, India, started its operations in the 90s, headed by young,
              dynamic, and innovative self-driven entrepreneur Mr. Mullapudi Veera Venkata Satyanarayana.
            </Typography>
            <Typography>
              Over more than two decades, we have grown exponentially, establishing a strong foundation in residential development
              in Visakhapatnam and extending our presence to Hyderabad.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              borderRadius: 2,
              minHeight: 260,
              backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}


