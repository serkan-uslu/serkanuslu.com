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
      imgSrc:
        'https://private-user-images.githubusercontent.com/65805346/354834191-93979fee-03f4-4cba-b45e-d94420d6579c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI4NTc3MzEsIm5iZiI6MTcyMjg1NzQzMSwicGF0aCI6Ii82NTgwNTM0Ni8zNTQ4MzQxOTEtOTM5NzlmZWUtMDNmNC00Y2JhLWI0NWUtZDk0NDIwZDY1NzljLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA1VDExMzAzMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc3YTgzMzYxZTI1NzE4ZTIxZWZlYWRlNzEzODEwM2Y0ZWExN2Y3Mzk5MTM3NzcxYmM1OTRiNDg5Y2U3OTJmYjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.eEZeguobj16jUWRBSTsPLfWf1dkAl0QdICv4feoKQog',
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
      imgSrc:
        'https://private-user-images.githubusercontent.com/65805346/354834191-93979fee-03f4-4cba-b45e-d94420d6579c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI4NTc3MzEsIm5iZiI6MTcyMjg1NzQzMSwicGF0aCI6Ii82NTgwNTM0Ni8zNTQ4MzQxOTEtOTM5NzlmZWUtMDNmNC00Y2JhLWI0NWUtZDk0NDIwZDY1NzljLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA1VDExMzAzMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc3YTgzMzYxZTI1NzE4ZTIxZWZlYWRlNzEzODEwM2Y0ZWExN2Y3Mzk5MTM3NzcxYmM1OTRiNDg5Y2U3OTJmYjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.eEZeguobj16jUWRBSTsPLfWf1dkAl0QdICv4feoKQog',
      href: 'https://github.com/serkan-uslu/virtual-scroll',
    },
  ],
}

export default projectsData
