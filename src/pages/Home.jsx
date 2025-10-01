import { Box, Button, Typography, Container, Grid, Card, CardContent } from '@mui/material'
import HeroCarousel from '../components/HeroCarousel.jsx'

function HeroHeader() { return <HeroCarousel /> }

function Highlights() {
  const items = [
    { title: 'Completed Projects', value: '100+' },
    { title: 'Total Units', value: '4220' },
    { title: 'Upcoming Projects', value: '10+' },
    { title: 'Plots', value: '455' },
  ]
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={2}>
        {items.map((it) => (
          <Grid item xs={6} md={3} key={it.title}>
            <Card elevation={0} sx={{ textAlign: 'center', border: '1px solid', borderColor: 'divider' }}>
              <CardContent>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{it.value}</Typography>
                <Typography color="text.secondary">{it.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

function FeaturedProjects() {
  const projects = [
    { name: 'MVV The Peak', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop' },
    { name: 'MVV Green Gardens', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop' },
    { name: 'MVV Silver Homes', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>Featured Projects</Typography>
      <Grid container spacing={2}>
        {projects.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.name}>
            <Box sx={{
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid',
              borderColor: 'divider',
              backgroundImage: `url(${p.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 220,
              display: 'flex',
              alignItems: 'flex-end'
            }}>
              <Box sx={{ width: '100%', p: 2, background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)' }}>
                <Typography sx={{ color: 'white', fontWeight: 700 }}>{p.name}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

function RMCPlant() {
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            borderRadius: 2,
            minHeight: 260,
            backgroundImage: 'url(https://images.unsplash.com/photo-1581093458791-9d09c3e9b603?q=80&w=1200&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>Ready Mix Concrete Facility</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            In-house RMC plant with transit mixers and high-powered pumps for quality and speed.
          </Typography>
          <Box sx={{ display: 'grid', gap: 0.5, mt: 2 }}>
            <Typography>• Large site footprint</Typography>
            <Typography>• OPC-GGPS mix options</Typography>
            <Typography>• Multiple transit mixers</Typography>
            <Typography>• High-powered concrete pumps</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

function UPVCManufacturing() {
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>uPVC Manufacturing Facility</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            State-of-the-art extrusion facility with quality-focused manufacturing practices.
          </Typography>
          <Box sx={{ display: 'grid', gap: 0.5, mt: 2 }}>
            <Typography>• 100% lead-free durable profiles</Typography>
            <Typography>• Optimized for Indian climate</Typography>
            <Typography>• 80 tonnes/month capacity</Typography>
            <Typography>• 20,000 sft windows/month</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            borderRadius: 2,
            minHeight: 260,
            backgroundImage: 'url(https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </Grid>
      </Grid>
    </Container>
  )
}

function Testimonials() {
  const items = [
    { name: 'Customer A', text: 'Very peaceful environment and better experience in apartments.' },
    { name: 'Customer B', text: 'Best quality services and durable homes.' },
    { name: 'Customer C', text: 'Good quality houses at affordable prices.' },
  ]
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>What our clients say</Typography>
      <Grid container spacing={2}>
        {items.map((t) => (
          <Grid item xs={12} md={4} key={t.name}>
            <Card elevation={1}>
              <CardContent>
                <Typography>“{t.text}”</Typography>
                <Typography sx={{ mt: 1, fontWeight: 700 }}>{t.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default function Home() {
  return (
    <Box>
      <HeroHeader />
      <Highlights />
      <FeaturedProjects />
      <RMCPlant />
      <UPVCManufacturing />
      <Testimonials />
    </Box>
  )
}


