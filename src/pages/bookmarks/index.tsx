import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
} from '@mui/material';
import LinkPreviewComponent from '@/components/LinkPreviewComponent';

const bookmarksList = [
  {
    id: 0,
    link: 'https://million.dev',
    category: ['React', 'Javascript'],
  },
  {
    id: 0,
    link: 'https://www.npmjs.com/package/link-preview-js',
    category: ['npm', 'link'],
  },
  {
    id: 0,
    link: 'https://lit.dev/',
    category: ['npm', 'server-component'],
  },

  // {
  //   id: 1,
  //   link: 'https://nodejs.org/',
  //   category: ['Node.js'],
  // },
  {
    id: 2,
    link: 'https://reactnative.dev',
    category: ['React-Native', 'React'],
  },
  {
    id: 3,
    link: 'https://react.dev',
    category: ['React', 'Javascript'],
  },
];

export default function PageBookmarks() {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [filteredBookmarks, setFilteredBookmarks] = useState(bookmarksList);
  const [open, setOpen] = useState(false);
  const [selectedBookmark, setSelectedBookmark] = useState<any>(null);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredBookmarks(
        bookmarksList.filter((b) => b.category.includes(selectedCategory)),
      );
    } else {
      setFilteredBookmarks(bookmarksList);
    }
  }, [selectedCategory]);

  const categories = Array.from(
    new Set(bookmarksList.flatMap((b) => b.category)),
  );

  const handleClickOpen = (bookmark: any) => {
    setSelectedBookmark(bookmark);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box mb={2}>
        {categories.map((category) => (
          <Button
            color="primary"
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={category === selectedCategory ? 'contained' : 'outlined'}
          >
            {category}
          </Button>
        ))}
        <Button
          color="primary"
          onClick={() => setSelectedCategory(null)}
          variant={!selectedCategory ? 'contained' : 'outlined'}
        >
          All
        </Button>
      </Box>
      <Grid container spacing={2}>
        {filteredBookmarks.map((bookmark, index) => (
          <Grid key={index} item xs={3}>
            <LinkPreviewComponent key={index} url={bookmark?.link} />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Link Preview</DialogTitle>
        <DialogContent>
          <LinkPreviewComponent url={selectedBookmark?.link} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
