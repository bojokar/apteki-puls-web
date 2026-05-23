import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { pharmacies, promotions } from '@/lib/data';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Денонощни аптеки Пулс в Бургас',
  description: 'Аптеки Пулс в Бургас предлагат денонощно ниски цени, фармацевтична консултация и удобни локации в Изгрев и Славейков.',
});

export default function Home() {
  return (
    <>
      <Box
        className="hero"
        sx={{
          minHeight: { xs: 620, md: 640 },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        <Box className="heroImage" sx={{ backgroundImage: 'url(/pharmacy-hero.png)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 7, md: 10 } }}>
          <Stack spacing={3} sx={{ width: { xs: '100%', md: '54%' } }}>
            <Chip label="Денонощно ниски цени!" color="secondary" sx={{ width: 'fit-content', fontWeight: 800 }} />
            <Typography component="h1" variant="h1" sx={{ fontSize: { xs: 42, md: 68 }, lineHeight: 1 }}>
              Аптеки Пулс
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: 640 }}>
              Професионална консултация, подбрани продукти и удобни локации в Изгрев и Славейков.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button href="/produkti" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
                Разгледайте продукти
              </Button>
              <Button href="/kontakti" variant="outlined" color="inherit" size="large">
                Намерете аптека
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Grid container spacing={3}>
          {[
            { icon: <HealthAndSafetyIcon />, title: 'Консултация', text: 'Съвет от фармацевт за ежедневна грижа и правилен избор.' },
            { icon: <Inventory2Icon />, title: 'Богат избор', text: 'Лекарства без рецепта, козметика, витамини и медицински изделия.' },
            { icon: <VolunteerActivismIcon />, title: 'Близо до вас', text: 'Две удобни локации с бърза връзка по телефон.' },
          ].map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 1 }}>{item.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">{item.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'background.paper', py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
            <Box sx={{ flex: 1 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, mb: 2 }}>
                Актуални предложения
              </Typography>
              <Typography color="text.secondary">
                Следете нашите промоции на място в аптеките и се свържете с удобния за вас обект.
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ flex: 2 }}>
              {promotions.slice(0, 2).map((promo) => (
                <Grid item xs={12} sm={6} key={promo.title}>
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent>
                      <Chip label={promo.tag} color="secondary" sx={{ mb: 2, fontWeight: 800 }} />
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                        {promo.title}
                      </Typography>
                      <Typography color="text.secondary">{promo.text}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: 32, md: 44 }, mb: 3 }}>
          Нашите аптеки
        </Typography>
        <Grid container spacing={3}>
          {pharmacies.map((pharmacy) => (
            <Grid item xs={12} md={6} key={pharmacy.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    {pharmacy.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                    {pharmacy.address}
                  </Typography>
                  <Button href="/kontakti" variant="outlined">
                    Контакти
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
