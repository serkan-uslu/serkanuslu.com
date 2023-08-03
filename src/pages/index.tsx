import fs from 'fs';
import path from 'path';
import React from 'react';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Box, Container, Grid, Typography } from '@mui/material';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

/** for using on mdx file */
const components = { Box, Container, Grid, Typography };

interface IPageProps {
  mdxSource: MDXRemoteSerializeResult;
}

function HomePage({ mdxSource }: IPageProps) {
  return <MDXRemote components={components} {...mdxSource} />;
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  context: GetServerSidePropsContext,
) => {
  const { locale } = context;
  let fileContents;

  const filePath = path.join(
    process.cwd(),
    `/src/content/homepage/index-${locale}.mdx`,
  );

  try {
    fileContents = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    fileContents = '';
  }

  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);

  if (fileContents.length > 0) {
    return {
      props: {
        data,
        mdxSource,
      },
    };
  } else {
    //
    return {
      notFound: true,
    };
  }
};

export default HomePage;
