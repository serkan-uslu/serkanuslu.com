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
      href: 'https://github.com/serkan-uslu/serkanuslu.com',
    },
    {
      title: 'Virtual Scrolling',
      description: `This project demonstrates a virtual scroll component implemented with React. The VirtualScroll component renders a large list of items efficiently, rendering only visible items and a small buffer.`,
      imgSrc: '/virtual-scrolling.png',
      href: 'https://github.com/serkan-uslu/virtual-scroll',
    },
  ],

  tr: [
    {
      title: 'Websitem',
      description: `Web sitem nihayet tamamlandı ve yayına girmeye hazır. Uzun bir tasarım ve geliştirme sürecinin ardından sonuçları görmek inanılmaz heyecan verici.`,
      imgSrc: '/serkan-uslu.png',
      href: 'https://github.com/serkan-uslu/serkanuslu.com',
    },
    {
      title: 'Virtual Scrolling',
      description: `Bu proje, React ile uygulanmış bir sanal kaydırma bileşenini gösterir. VirtualScroll bileşeni, yalnızca görünen öğeleri ve küçük bir tamponu render ederek büyük bir öğe listesini verimli bir şekilde render eder.`,
      imgSrc: '/virtual-scrolling.png',
      href: 'https://github.com/serkan-uslu/virtual-scroll',
    },
  ],
}

export default projectsData
