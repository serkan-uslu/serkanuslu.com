interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'My Website',
    description: `My website is finally complete and ready to go live. After a long design and development process, seeing the results is incredibly exciting.`,
    imgSrc: '/serkan-uslu.png',
    href: 'https://github.com/serkan-uslu/serkanuslu.com',
  },
]

export default projectsData
