'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useTranslation } from 'app/[locale]/i18n/client'
import { fallbackLng } from 'app/[locale]/i18n/locales'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import type { Bookmark } from 'contentlayer/generated'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'

interface PaginationProps {
  totalPages: number
  currentPage: number
  params: { locale: LocaleTypes }
}

interface ListLayoutProps {
  params: { locale: LocaleTypes }
  posts: CoreContent<Bookmark>[]
  title: string
  link?: string
  initialDisplayPosts?: CoreContent<Bookmark>[]
  pagination?: PaginationProps
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -25, y: 0 },
  show: { opacity: 1, x: 0, y: 0 },
}

function Pagination({ totalPages, currentPage, params: { locale } }: PaginationProps) {
  const { t } = useTranslation(locale, 'home')
  const pathname = usePathname()
  const basePath =
    locale === fallbackLng ? pathname.split('/')[1] : pathname.split('/').slice(1, 3).join('/')
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            {t('prevp')}
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            {t('prevp')}
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            {t('nextp')}
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            {t('nextp')}
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  params: { locale },
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const { t } = useTranslation(locale, 'home')

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div>
            <motion.ul variants={container} initial="hidden" animate="show">
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags, language, link } = post
                if (language === locale) {
                  return (
                    <motion.li variants={item} key={path} className="py-5">
                      <article className="flex flex-col space-y-2 xl:space-y-0">
                        <div className="space-y-3">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              {link ? (
                                <Link
                                  target="_blank"
                                  href={link}
                                  className="text-gray-900 dark:text-gray-100"
                                  aria-labelledby={title}
                                >
                                  {title}
                                </Link>
                              ) : (
                                <Link
                                  href={`/${locale}/${path}`}
                                  className="text-gray-900 dark:text-gray-100"
                                  aria-labelledby={title}
                                >
                                  {title}
                                </Link>
                              )}
                            </h2>
                            <div className="flex flex-wrap">
                              {tags?.map((tag) => (
                                <Tag key={tag} text={tag} params={{ locale: locale }} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary!.length > 149 ? `${summary!.substring(0, 149)}...` : summary}
                          </div>
                          {link && (
                            <Link
                              href={link}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label={`${t('goToLink')}"${title}"`}
                            >
                              {t('goToLink')} &rarr;
                            </Link>
                          )}
                        </div>
                      </article>
                    </motion.li>
                  )
                }
              })}
            </motion.ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                params={{ locale: locale }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
