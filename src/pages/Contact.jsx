import { Box, Container, Grid, TextField, Button, Typography } from '@mui/material'
import Navbar from '../components/Navbar'


export default function Contact() {

  return (
    <Box>
      <Navbar />
      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Contact Us</Typography>
            <Typography color="text.secondary">Corporate Office: D.No. 4-62-1, Plot No. 21, Lawsons Bay Colony, Visakhapatnam - 530017</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography>Email: info@mvvbuilders.com</Typography>
              <Typography>Phone: +91 95179 91799</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={(e) => e.preventDefault()} sx={{ display: 'grid', gap: 2 }}>
              <TextField label="Name" size="medium" required />
              <TextField label="Email" type="email" required />
              <TextField label="Phone" />
              <TextField label="Message" multiline rows={4} />
              <Button type="submit" variant="contained">Send</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}


