type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'My Website',
      description: `My website is finally complete and ready to go live. After a long design and development process, seeing the results is incredibly exciting.`,
      imgSrc: '/serkan-uslu.png',
      href: '/blog/posts/my-website',
    },
  ],

  tr: [
    {
      title: 'Websitem',
      description: `Web sitem nihayet tamamlandı ve yayına girmeye hazır. Uzun bir tasarım ve geliştirme sürecinin ardından sonuçları görmek inanılmaz heyecan verici.`,
      imgSrc: '/serkan-uslu.png',
      href: '/blog/articles/yeni-websitem',
    },
  ],
}

export default projectsData
