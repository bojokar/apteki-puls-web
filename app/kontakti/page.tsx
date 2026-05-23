import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MapIcon from '@mui/icons-material/Map';
import PlaceIcon from '@mui/icons-material/Place';
import { pharmacies } from '@/lib/data';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Контакти',
  description: 'Контакти, адреси, телефони и работно време 24/7 на Денонощни аптеки Пулс в Изгрев и Славейков, Бургас.',
  path: '/kontakti',
});

export default function Contacts() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Stack spacing={2} sx={{ mb: 4, maxWidth: 760 }}>
        <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>
          Контакти
        </Typography>
        <Typography component="h1" variant="h2" sx={{ fontSize: { xs: 36, md: 52 } }}>
          Намерете удобната за вас аптека Пулс
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Изберете обект и се свържете директно по телефон за въпроси относно продукти и наличности.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {pharmacies.map((pharmacy) => (
          <Grid item xs={12} md={6} key={pharmacy.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={2.2}>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    {pharmacy.name}
                  </Typography>
                  <Stack direction="row" spacing={1.2} alignItems="flex-start">
                    <PlaceIcon color="primary" />
                    <BoxedText label="Адрес" value={pharmacy.address} />
                  </Stack>
                  <Stack direction="row" spacing={1.2} alignItems="flex-start">
                    <AccessTimeIcon color="primary" />
                    <BoxedText label="Работно време" value={pharmacy.workingHours} />
                  </Stack>
                  <Stack direction="row" spacing={1.2} alignItems="flex-start">
                    <LocalPhoneIcon color="primary" />
                    <Stack spacing={0.5}>
                      <Typography sx={{ fontWeight: 800 }}>Телефони</Typography>
                      {pharmacy.phones.map((phone) => (
                        <Link key={phone} href={`tel:${phone.replaceAll(' ', '')}`} underline="hover">
                          {phone}
                        </Link>
                      ))}
                    </Stack>
                  </Stack>
                  <Button
                    variant="contained"
                    startIcon={<MapIcon />}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pharmacy.address + ' Бургас')}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Отвори в Google Maps
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

type BoxedTextProps = {
  label: string;
  value: string;
};

function BoxedText({ label, value }: BoxedTextProps) {
  return (
    <Stack spacing={0.5}>
      <Typography sx={{ fontWeight: 800 }}>{label}</Typography>
      <Typography color="text.secondary">{value}</Typography>
    </Stack>
  );
}
