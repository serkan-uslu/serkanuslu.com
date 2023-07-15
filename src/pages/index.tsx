import { Button, Box, Toolbar, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage';

export default function Home() {
  const { t, lang } = useTranslation('common');
  const example = t('variable-example', { count: 42 });

  const router = useRouter();
  const { locales } = router;

  console.log(locales);

  return (
    <>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {t('title')}
        <Button onClick={async () => await setLanguage('tr-TR')}>TR</Button>
        <Button onClick={async () => await setLanguage('en-US')}>EN</Button>
      </Box>
    </>
  );
}
