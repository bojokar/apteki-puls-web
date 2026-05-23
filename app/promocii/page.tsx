import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { promotions } from '@/lib/data';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Промоции',
  description: 'Актуални промоции и предложения в Денонощни аптеки Пулс в Бургас. Попитайте на място за условия и наличности.',
  path: '/promocii',
});

export default function Promotions() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Stack spacing={2} sx={{ mb: 4, maxWidth: 760 }}>
        <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>
          Промоции
        </Typography>
        <Typography component="h1" variant="h2" sx={{ fontSize: { xs: 36, md: 52 } }}>
          Актуални предложения в Аптеки Пулс
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Попитайте на място за активните условия, наличности и препоръчани продукти.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {promotions.map((promo) => (
          <Grid item xs={12} md={4} key={promo.title}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={2}>
                  <LocalOfferIcon color="secondary" />
                  <Chip label={promo.tag} color="secondary" sx={{ width: 'fit-content', fontWeight: 800 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    {promo.title}
                  </Typography>
                  <Typography color="text.secondary">{promo.text}</Typography>
                  <Button href="/kontakti" variant="outlined">
                    Свържете се с нас
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
