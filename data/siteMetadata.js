const siteMetadata = {
  title: 'Serkan USLU | Frontend Developer',
  author: 'Serkan USLU',
  headerTitle: 'Serkan USLU',
  description: 'Serkan USLU - Frontend Developer | Javascript, Typescript, React.js, React Native',
  language: 'tr',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.serkanuslu.com',
  siteRepo: 'https://www.github.com/serkan-uslu/serkanuslu.com',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'info@serkanuslu.com',
  github: 'https://github.com/serkan-uslu',
  medium: 'https://medium.com/@serkan-uslu',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/serkan-uslu',
  locale: 'tr',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
