import type { NextApiRequest, NextApiResponse } from 'next';

type AlternativeURL = {
  'tr-TR': string;
  'en-US': string;
};

type Menu = {
  name: string;
  url: string;
  alternativeURL: AlternativeURL;
};

const menuTR: Menu[] = [
  {
    name: 'Anasayfa',
    url: '/',
    alternativeURL: {
      'tr-TR': '/',
      'en-US': '/',
    },
  },
  {
    name: 'Hakkımda',
    url: '/hakkimda',
    alternativeURL: {
      'tr-TR': '/hakkimda',
      'en-US': '/aboutme',
    },
  },
  {
    name: 'Blog',
    url: '/blog',
    alternativeURL: {
      'tr-TR': '/blog',
      'en-US': '/blog',
    },
  },
  {
    name: 'İletişim',
    url: '/iletisim',
    alternativeURL: {
      'tr-TR': '/iletisim',
      'en-US': '/contact',
    },
  },
];

const menuEN: Menu[] = [
  {
    name: 'Homepage',
    url: '/',
    alternativeURL: {
      'tr-TR': '/',
      'en-US': '/',
    },
  },
  {
    name: 'About Me',
    url: '/aboutme',
    alternativeURL: {
      'tr-TR': '/hakkimda',
      'en-US': '/aboutme',
    },
  },
  {
    name: 'Blog',
    url: '/blog',
    alternativeURL: {
      'tr-TR': '/blog',
      'en-US': '/blog',
    },
  },
  {
    name: 'Contact',
    url: '/contact',
    alternativeURL: {
      'tr-TR': '/iletisim',
      'en-US': '/contact',
    },
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Menu[]>,
) {
  res.status(200).json(menuTR);
}
