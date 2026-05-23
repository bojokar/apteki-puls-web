import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'За нас',
  description: 'Научете повече за Денонощни аптеки Пулс в Бургас - грижа, консултация, работа с НЗОК и подбрани продукти.',
  path: '/za-nas',
});

const values = ['Отговорна консултация', 'Внимание към всеки клиент', 'Подбрани продукти', 'Удобни локации'];

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>
            За нас
          </Typography>
          <Typography component="h1" variant="h2" sx={{ fontSize: { xs: 36, md: 52 }, mb: 2 }}>
            Грижа, която започва с добър съвет
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Аптеки Пулс са създадени като надеждни точки за здраве, профилактика и ежедневна грижа близо до вас.
          </Typography>
          <Typography color="text.secondary">
            Изпълняваме рецепти, предписани от вашия лекар. Аптеките работят с НЗОК. Нашият екип помага с информация
            за продукти без рецепта, избор на витамини, дермокозметика и медицински изделия. Работим с внимание към
            детайла и с уважение към времето на всеки клиент.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              minHeight: 360,
              borderRadius: 2,
              bgcolor: 'background.paper',
              backgroundImage: 'linear-gradient(135deg, rgba(197,31,36,.18), rgba(244,234,216,.26)), url(/pharmacy-hero.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: 6,
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: 5 }}>
        {values.map((value) => (
          <Grid item xs={12} sm={6} md={3} key={value}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={1.5}>
                  <CheckCircleIcon color="primary" />
                  <Typography sx={{ fontWeight: 800 }}>{value}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
