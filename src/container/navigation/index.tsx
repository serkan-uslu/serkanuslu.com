import React from 'react';
import Link from 'next/link';
import { INavItem } from 'models';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import NavigationLink from '@/components/navigationLink';
import { NAV_ITEMS, SITE_SETTINGS } from 'config/siteSettings';

export default function Navigation() {
  const { locale } = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        height: '100%',
        justifyContent: 'center',
        width: '220px',
      }}
    >
      <Box
        sx={{
          px: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mb: 2,
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            locale={locale}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
              }}
            >
              {SITE_SETTINGS.siteName}
            </Typography>
          </Link>
        </Box>
        {NAV_ITEMS.map((item: INavItem, index: number) => {
          return (
            <Box key={index}>
              <NavigationLink item={item}></NavigationLink>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
