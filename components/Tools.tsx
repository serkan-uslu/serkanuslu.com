'use client'

import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'

export default function Tools({ tools }) {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'about')

  return (
    <>
      <h4 className="mb-4 text-center text-xl font-semibold md:text-left">
        {t('languagesAndTools')}
      </h4>
      <div className="flex flex-wrap gap-4">
        {tools.map((item, index) => (
          <a
            href={item.link}
            key={index}
            title={item.altText}
            className="fl20 h-20 w-20 items-center justify-center border-2 bg-white p-4"
          >
            <Image
              width={18}
              height={18}
              src={item.logo}
              alt={item.altText}
              className="h-full w-full object-cover"
            />
          </a>
        ))}
      </div>
    </>
  )
}
