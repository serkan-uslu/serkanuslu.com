import React from 'react';
import Link from 'next/link';
import { INavLink } from 'models';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

export default function NavigationLink(props: INavLink) {
  const { item } = props;

  const { asPath } = useRouter();

  const { t } = useTranslation('common');

  const isUrlContainedInPath = asPath.includes(item.url);

  return (
    <Box>
      <Link
        href={item.url}
        style={{
          textDecoration: isUrlContainedInPath ? 'underline' : 'none',
          color: 'inherit',
          padding: 0,
          paddingBottom: '6px',
          paddingTop: '6px',
          display: 'block',
        }}
      >
        <Typography
          sx={{
            fontWeight: isUrlContainedInPath ? 'bold' : 'none',
            textDecoration: 'none',
          }}
        >
          {t(item.key)}
        </Typography>
      </Link>
    </Box>
  );
}
