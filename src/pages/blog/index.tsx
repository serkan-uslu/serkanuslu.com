import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import React from 'react';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { format, parseISO } from 'date-fns';
import Divider from '@mui/material/Divider';
import useTranslation from 'next-translate/useTranslation';
import { Box, Button, Grid, Typography } from '@mui/material';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { IPageBlogDetail } from 'models';

function PageBlogDetail(props: IPageBlogDetail) {
  const { t } = useTranslation('common');

  return (
    <Box>
      <Box mb={3}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Blog
        </Typography>
      </Box>
      <Box>
        <Box>
          <Grid container spacing={2}>
            {props.blogs.map((blog: any, index: number) => {
              return (
                <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                  <Box mb={2}>
                    <Box mb={1}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        {blog.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography color="GrayText" variant="body1">
                        {format(parseISO(blog.date), 'MMMM dd, yyyy')}
                      </Typography>
                    </Box>
                    <Box mb={1}>
                      <Typography color="GrayText" variant="body2">
                        {blog.readingTime.text}
                      </Typography>
                    </Box>
                    <Box>
                      <Link href={`/blog/${blog?.link}`} passHref>
                        <Button
                          size="small"
                          variant="contained"
                          disableElevation
                        >
                          {t('readmore')}
                        </Button>
                      </Link>
                    </Box>
                    <Box my={2}>
                      <Divider></Divider>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<any> = async (
  context: GetServerSidePropsContext,
) => {
  const locale = context.locale;

  const slug = Array.isArray(context?.params?.slug)
    ? context?.params?.slug[0]
    : '';

  const articles = fs.readdirSync(path.join(process.cwd(), 'src/content/blog'));

  const blogs: any = [];

  articles.map((item) => {
    const itemPath = path.join(process.cwd(), 'src/content/blog/', item);
    const isDirectory = fs.statSync(itemPath).isDirectory();

    if (isDirectory) {
      const source = fs.readFileSync(
        path.join(itemPath, 'index-' + locale + '.mdx'),
        'utf-8',
      );
      const { data } = matter(source);
      data['readingTime'] = readingTime(source);
      blogs.push(data);
    }
  });

  return {
    props: {
      blogs: blogs,
    },
  };
};

export default PageBlogDetail;
