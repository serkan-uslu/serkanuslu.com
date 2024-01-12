interface Post {
  title: string
  date: string
  description: string
  link: string
}

const PostList: Post[] = [
  {
    title: 'GitHub’daki İlk Adımlar: Büyük Projelerin İlk Commit’lerini Keşfetmek',
    date: 'Nov 21, 2023',
    description: 'Description of blog post 1',
    link: 'https://medium.com/@serkan-uslu/githubdaki-i%CC%87lk-ad%C4%B1mlar-b%C3%BCy%C3%BCk-projelerin-i%CC%87lk-commit-lerini-ke%C5%9Ffetmek-94acb5a81814',
  },
  {
    title: 'Git Hook ile Commit Mesaj Kontrolü',
    date: 'Sep 22, 2023',
    description: 'Description of blog post 1',
    link: 'https://medium.com/@serkan-uslu/git-hook-ile-commit-mesaj-kontrol%C3%BC-e064a814d250',
  },
  {
    title: 'Puppeteer & Recording',
    date: 'Oct 25, 2023',
    description: 'Description of blog post 2',
    link: 'https://medium.com/@serkan-uslu/puppeteer-recording-37839e4426eb',
  },
]

export default PostList
