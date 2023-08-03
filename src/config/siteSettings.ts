import { INavItems } from 'models';

/** to do create Interface */
export const SITE_SETTINGS = {
  drawerWidth: 240,
  siteName: 'SERKAN USLU',
};

export const NAV_ITEMS: INavItems = [
  {
    name: 'Blog',
    key: 'blog',
    url: '/blog',
  },
  {
    name: 'About',
    key: 'about',
    url: '/about',
  },
  {
    name: 'Portfolio',
    key: 'portfolio',
    url: '/portfolio',
  },
  {
    name: 'Bookmarks',
    url: '/bookmarks',
    key: 'bookmarks',
  },
];
