import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import { pharmacies } from '@/lib/data';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 4, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
          <Box>
            <Box
              component="img"
              src="/logo-heart.png"
              alt="Аптеки Пулс"
              sx={{ width: 74, height: 74, objectFit: 'contain', mb: 1 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 800 }}>Аптеки Пулс</Typography>
            <Typography color="text.secondary">Грижа близо до вас.</Typography>
          </Box>
          <Stack spacing={1.2}>
            {pharmacies.map((pharmacy) => (
              <Stack key={pharmacy.id} spacing={0.5}>
                <Typography sx={{ fontWeight: 700 }}>{pharmacy.shortName}</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PlaceIcon fontSize="small" color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    {pharmacy.address}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocalPhoneIcon fontSize="small" color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    {pharmacy.phones.map((phone, index) => (
                      <span key={phone}>
                        <Link href={`tel:${phone.replaceAll(' ', '')}`} color="inherit" underline="hover">
                          {phone}
                        </Link>
                        {index < pharmacy.phones.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
