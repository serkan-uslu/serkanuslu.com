import React from 'react';
import { ISocialLinkItem } from 'models';
import { Box, IconButton } from '@mui/material';
import { socialMediaLinks } from 'config/content';

export default function Connection() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      {socialMediaLinks.map((item: ISocialLinkItem, index: number) => {
        return (
          <Box key={index}>
            <IconButton target="_blank" href={item.link}>
              <item.icon color="dark.main" />
            </IconButton>
          </Box>
        );
      })}
    </Box>
  );
}
