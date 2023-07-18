import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { githubLink, linkedinLink } from 'config/content';

const WebDevelopmentNotes = () => {
  return (
    <Container maxWidth={'md'}>
      <Box my={2}>
        <Divider></Divider>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Box>
          <IconButton target="_blank" href={linkedinLink}>
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton target="_blank" href={githubLink}>
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default WebDevelopmentNotes;
