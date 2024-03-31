'use client'

import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import { useTranslation } from 'app/[locale]/i18n/client'
import type { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useParams, usePathname } from 'next/navigation'
import LangSwitch from './LangSwitch'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './search/SearchButton'

const Header = () => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, '')
  // Get current page path
  const pathname = usePathname()

  return (
    <header>
      <div className="flex items-center justify-between py-10">
        <div>
          <Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
              <div className="h-6 text-2xl font-semibold sm:hidden">S.U</div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => {
              const isSelected = pathname.includes(link.href)
              return (
                <Link
                  key={link.title}
                  href={link.outlink ? link.href : `/${locale}${link.href}`}
                  className={`hidden font-medium ${
                    isSelected ? 'text-primary-500' : 'text-gray-900 dark:text-gray-100'
                  }  sm:block`}
                >
                  {t(`${link.title.toLowerCase()}`)}
                </Link>
              )
            })}
          <SearchButton />
          <ThemeSwitch />
          <LangSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
