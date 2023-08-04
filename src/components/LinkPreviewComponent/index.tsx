import { Box, Typography } from '@mui/material';
import useSWR from 'swr';
import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Preview {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface Props {
  url: string;
}

export default function LinkPreviewComponent({ url }: Props) {
  const {
    data: preview,
    error,
    isValidating,
  } = useSWR(`/api/preview?url=${encodeURIComponent(url)}`, fetcher);

  if (isValidating) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return preview ? (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={preview.images[0]}
        alt={preview.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {preview.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {preview.description}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Box>{url}</Box>
  );
}
