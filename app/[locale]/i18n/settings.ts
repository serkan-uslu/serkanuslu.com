import { fallbackLng, secondLng } from '@/i18n/locales'
import type { InitOptions } from 'i18next'

export const locales = [fallbackLng, secondLng] as const
export type LocaleTypes = (typeof locales)[number]
export const defaultNS = 'common'

export function getOptions(locale = fallbackLng, ns = defaultNS): InitOptions {
  return {
    debug: true,
    supportedLngs: locales,
    fallbackLng,
    lng: locale,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
