import { POSTS_PER_PAGE } from '@/data/postsPerPage'
import { createTranslation } from '@/i18n/server'
import { LocaleTypes } from '@/i18n/settings'
import ListLayout from '@/layouts/ListLayoutBookmarks'
import { genPageMetadata } from 'app/[locale]/seo'
import { allBookmarks } from 'contentlayer/generated'
import { Metadata } from 'next'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

type BlogPageProps = {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: BlogPageProps): Promise<Metadata> {
  return genPageMetadata({
    title: 'Blog',
    params: { locale: locale },
  })
}

export default async function BlogPage({ params: { locale } }: BlogPageProps) {
  const { t } = await createTranslation(locale, 'home')
  const posts = allCoreContent(sortPosts(allBookmarks))
  // Filter posts based on the current locale
  const filteredPosts = posts.filter((post) => post.language === locale)
  const pageNumber = 1
  const initialDisplayPosts = filteredPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
    params: { locale: locale },
  }

  return (
    <>
      <ListLayout
        params={{ locale: locale }}
        posts={filteredPosts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={t('all')}
      />
    </>
  )
}
