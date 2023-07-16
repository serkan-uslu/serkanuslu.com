import { Button, Box, Toolbar, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import setLanguage from 'next-translate/setLanguage';
import TestEN from 'content/test-en.mdx';
import TestTR from 'content/test-tr.mdx';
import Link from 'next/link';

export default function Home() {
  const { t, lang } = useTranslation('common');
  const example = t('variable-example', { count: 42 });

  return (
    <>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {t('title')}
      </Box>
    </>
  );
}
