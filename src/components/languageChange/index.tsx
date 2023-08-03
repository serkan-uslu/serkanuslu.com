import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TranslateIcon from '@mui/icons-material/Translate';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';

export default function Connection() {
  const router = useRouter();

  const { locales } = router;

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <Box>
      <IconButton size="large" onClick={handleMenu} color="inherit">
        <TranslateIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {locales?.map((localeName: string, index: number) => {
          return (
            <MenuItem key={index} onClick={handleClose}>
              <Link
                href={'/'}
                style={{
                  display: 'block',
                  color: 'inherit',
                  textDecoration: 'none',
                  width: '100%',
                  fontSize: '12px',
                }}
                passHref
                locale={localeName}
              >
                {localeName}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
