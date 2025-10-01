import { Box, Button, Typography, Container, Grid, Card, CardContent } from '@mui/material'
import HeroCarousel from '../components/HeroCarousel.jsx'

function HeroHeader() { return <HeroCarousel /> }

function Highlights() {
  // Gold color and dark background from screenshot
  const gold = '#e0a146';
  const dark = '#181c22';
  return (
    <Box sx={{ bgcolor: dark, color: 'white', py: { xs: 6, md: 8 } }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left: Text Content */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ color: gold, fontWeight: 700, mb: 2, letterSpacing: 1 }}>
              WELCOME TO SWARGASEEMA
            </Typography>
            <Typography sx={{ mb: 3, maxWidth: 600 }}>
              Since 2017, Swargaseema Sandalwood Farms Pvt Ltd has established itself as a trusted open plot real estate developer in Telangana. We offer DTCP Approved & RERA registered open plots in well-connected locations across Shadnagar, South Hyderabad.
            </Typography>
            <Typography variant="h6" sx={{ color: gold, fontWeight: 700, mb: 1.5 }}>
              Why Invest in Our Open Plots?
            </Typography>
            <Box component="ul" sx={{ pl: 0, mb: 3, listStyle: 'none' }}>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ color: gold, mr: 1, fontSize: 22 }}>✔️</Box>
                <Typography>100% DTCP Approved & RERA Registered Properties.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ color: gold, mr: 1, fontSize: 22 }}>✔️</Box>
                <Typography>High-Growth Locations – Well-connected areas with increasing land value.</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ color: gold, mr: 1, fontSize: 22 }}>✔️</Box>
                <Typography>Transparent Transactions – Hassle-free documentation & ownership process.</Typography>
              </Box>
            </Box>
            <Typography variant="h6" sx={{ color: gold, fontWeight: 700, mb: 1.5 }}>
              Meet Our Founder – Mr. Chandra Chandrasekhar
            </Typography>
            <Typography sx={{ mb: 2, maxWidth: 600 }}>
              With over 20 years of experience in the real estate industry, Mr. Chandra Chandrasekhar has transformed Swargaseema Sandalwood Farms Pvt Ltd into a reputed name in open plot development. From being a successful builder to a visionary land developer, he brings a deep-rooted passion for greenery, nature, traditional living, and a sustainable environment, which is reflected in every project he envisions. His expertise, dedication, and customer-first approach continue to drive our success in creating thriving communities.
            </Typography>
            <Typography sx={{ mb: 2, maxWidth: 600 }}>
              Beyond real estate, Mr. Chandrasekhar shares his knowledge and life philosophies through his YouTube channel, where he talks about day-to-day living, financial and personality development, building the right attitude, and leading a safe, secure, healthy, and happy life. Watch on <Box component="a" href="#" sx={{ color: gold, textDecoration: 'underline', fontWeight: 500, ml: 0.5, display: 'inline' }}>YouTube</Box>.
            </Typography>
            {/* <Typography sx={{ mb: 2 }}>Let's Help You Find Your Perfect Plot!</Typography>
            <Typography sx={{ mb: 3 }}>Contact us today to explore our premium properties!</Typography>
            <Button variant="contained" sx={{ bgcolor: gold, color: dark, fontWeight: 700, borderRadius: 2, px: 3, py: 1.2, mb: 4, '&:hover': { bgcolor: '#c98b36' } }}>
              BOOK SITE VISIT
            </Button> */}
            {/* Stats Row */}
             <Button variant="contained" sx={{ bgcolor: gold, color: dark, fontWeight: 700, borderRadius: 2, px: 3, py: 1.2, mb: 4, '&:hover': { bgcolor: '#c98b36' } }}>
              Know More..
            </Button>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={6} md={4}>
                <Typography variant="h3" sx={{ color: gold, fontWeight: 800, lineHeight: 1 }}>20+</Typography>
                <Typography sx={{ color: 'white', opacity: 0.8, fontWeight: 500, fontSize: 16 }}>YEARS OF EXPERIENCE</Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="h3" sx={{ color: gold, fontWeight: 800, lineHeight: 1 }}>2000+</Typography>
                <Typography sx={{ color: 'white', opacity: 0.8, fontWeight: 500, fontSize: 16 }}>HAPPY CUSTOMERS</Typography>
              </Grid>
             
            </Grid>
          </Grid>
          {/* Right: Image */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="https://i.imgur.com/0y8Ftya.png"
              alt="Founder"
              sx={{
                width: { xs: '70%', md: '100%' },
                maxWidth: 370,
                borderRadius: 3,
                boxShadow: 6,
                objectFit: 'cover',
                background: 'linear-gradient(180deg, #23272f 0%, #181c22 100%)',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
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


