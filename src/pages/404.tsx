import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import { NextSeo } from 'next-seo';

export default function Error() {
  <NextSeo nofollow={true} noindex={true} />;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box mb={2}>
        <Typography variant="h1">404</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h6">
          The page you’re looking for doesn’t exist.
        </Typography>
      </Box>
      <Box mb={2}>
        <Button variant="contained">Back Home</Button>
      </Box>
    </Box>
  );
}
