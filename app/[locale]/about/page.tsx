import { createTranslation } from '@/i18n/server'
import { LocaleTypes } from '@/i18n/settings'
import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/[locale]/seo'
import { Authors, allAuthors } from 'contentlayer/generated'
import { Metadata } from 'next'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'

type AboutProps = {
  params: { locale: LocaleTypes }
}

export async function generateMetadata({ params: { locale } }: AboutProps): Promise<Metadata> {
  const { t } = await createTranslation(locale, 'about')
  return genPageMetadata({
    title: t('about'),
    params: { locale: locale },
  })
}

export default async function Page({ params: { locale } }: AboutProps) {
  const author = allAuthors.find(
    (a) => a.slug.includes('default') && a.language === locale
  ) as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout params={{ locale: locale }} content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
