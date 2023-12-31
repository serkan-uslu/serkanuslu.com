import fs from 'fs';
import path from 'path';
import React from 'react';
import matter from 'gray-matter';
import { Box } from '@mui/material';
import { IPageBlog } from 'models';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

function MyPage({ mdxSource }: IPageBlog) {
  return (
    <Box>
      <MDXRemote {...mdxSource} />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<IPageBlog> = async (
  context: GetServerSidePropsContext,
) => {
  const locale = context.locale;

  const slug = Array.isArray(context?.params?.slug)
    ? context?.params?.slug[0]
    : '';

  const filePath = path.join(
    process.cwd(),
    `/src/content/blog/${slug}/index-${locale}.mdx`,
  );

  let fileContents;
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
    // Dosyanın içeriğini sayfa bileşenine aktarın
    return {
      notFound: true,
    };
  }
};

export default MyPage;
