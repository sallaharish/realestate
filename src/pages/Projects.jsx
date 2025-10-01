import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material'
import Navbar from '../components/Navbar'
const mock = Array.from({ length: 9 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  img: `https://picsum.photos/seed/project-${i}/600/400`
}))

export default function Projects() {
  return (
    <Box>
      <Navbar />
      <Box sx={{ py: 6, textAlign: 'center', backgroundColor: 'background.default' }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>Our Projects</Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>Premium and gated community apartments inspired by excellence.</Typography>
      </Box>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {mock.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.title}>
              <Card>
                <CardActionArea>
                  <Box sx={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: 200
                  }} />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{card.title}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}


