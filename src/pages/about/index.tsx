import fs from 'fs';
import path from 'path';
import React from 'react';
import matter from 'gray-matter';
import { IPageAbout } from 'models';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

function PageAbout({ mdxSource }: IPageAbout) {
  return <MDXRemote {...mdxSource} />;
}

export const getServerSideProps: GetServerSideProps<IPageAbout> = async (
  context: GetServerSidePropsContext,
) => {
  const locale = context.locale;

  const filePath = path.join(
    process.cwd(),
    `/src/content/about/index-${locale}.mdx`,
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
    return {
      notFound: true,
    };
  }
};

export default PageAbout;
