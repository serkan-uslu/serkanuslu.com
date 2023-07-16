import fs from 'fs';
import path from 'path';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MyPageProps {
  mdxSource: MDXRemoteSerializeResult;
}

function MyPage({ mdxSource }: MyPageProps) {
  return (
    <div>
      <h1>My Page</h1>
      {/* <p>{mdxSource}</p> */}
      <MDXRemote {...mdxSource} />;
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<MyPageProps> = async (
  context: GetServerSidePropsContext,
) => {
  const locale = context.locale || 'tr-TR'; // Eğer locale bilgisi yoksa, 'en' varsayılan olacak.
  const slug = Array.isArray(context?.params?.slug)
    ? context?.params?.slug[0]
    : '';

  // Dosyanın tam yolunu belirleyin
  const filePath = path.join(
    process.cwd(),
    `/src/content/${slug}-${locale}.mdx`,
  );

  // Dosyayı okuyun
  let fileContents;
  try {
    fileContents = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    // Dosya okunamazsa, boş string döndür
    fileContents = '';
  }

  // console.log('content', fileContents?.content);

  // const { content, data } = matter(fileContents);

  // // const mdxSource = content; //await serialize(content);
  // const mdxSource = await serialize(content);

  const mdxSource = await serialize(fileContents);

  // Dosyanın içeriğini sayfa bileşenine aktarın
  return {
    props: {
      mdxSource,
    },
  };
};

export default MyPage;
