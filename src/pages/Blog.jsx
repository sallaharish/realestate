import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material'
import Navbar from '../components/Navbar'

const posts = [
  { title: 'Checklist: Ready-to-Move vs Under-Construction Flats in Vizag', date: '16 September 2025' },
  { title: 'Flats vs Independent Houses in Vizag – Which is Better?', date: '14 August 2025' },
  { title: "First-Time Home Buyer? Here's why to choose MVV Builders", date: '18 July 2025' },
]


export default function Blog() {
  return (
    <Box>
      <Navbar />
      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={2}>
          {posts.map((p) => (
            <Grid item xs={12} md={4} key={p.title}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{p.title}</Typography>
                    <Typography color="text.secondary" sx={{ mt: 0.5 }}>{p.date}</Typography>
                    <Typography sx={{ mt: 1.5 }}>
                      Short excerpt goes here. Click to read more.
                    </Typography>
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


