import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface ISocialLinkItem {
  name: string;
  link: string;
  icon: React.ElementType;
}

export type ISocialLink = ISocialLinkItem[];

export interface INavItem {
  name: string;
  key: string;
  url: string;
}

export type INavItems = INavItem[];

export interface INavLink {
  item: INavItem;
}

export interface IPageAbout {
  mdxSource: MDXRemoteSerializeResult;
}

export interface IPageBlog {
  mdxSource: MDXRemoteSerializeResult;
}

export interface IBlog {
  title: string;
  date: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  link?: string;
}

export interface IPageBlogDetail {
  blogs: IBlog[];
}
