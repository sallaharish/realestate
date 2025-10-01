import { Box, Container, Grid } from '@mui/material'

const images = Array.from({ length: 12 }).map((_, i) => `https://picsum.photos/seed/gallery-${i}/600/400`)

export default function Gallery() {
  return (
    <Box>
      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={1}>
          {images.map((src, idx) => (
            <Grid item xs={6} sm={4} md={3} key={idx}>
              <Box sx={{
                borderRadius: 1,
                overflow: 'hidden',
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 140
              }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}


