import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Tools from './Tools'
import Posts from './Posts'
import Introduction from './Introduction'
import ToolList from '@/data/tools'
import PostList from '@/data/posts'

export default async function Page() {
  return (
    <>
      <Introduction />
      <Posts posts={PostList} />
      <Tools tools={ToolList} />
    </>
  )
}
