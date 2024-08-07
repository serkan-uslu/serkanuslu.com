import Link from '@/components/Link'
import { formatDate } from 'pliny/utils/formatDate'
import { createTranslation } from './i18n/server'
import { LocaleTypes } from './i18n/settings'

interface ReadingTime {
  text: string
  time: string
  minutes: number
}
interface Post {
  slug: string
  date: string
  title: string
  summary?: string | undefined
  tags: string[]
  language: string
  draft?: boolean
  readingTime?: ReadingTime
}

interface HomeProps {
  posts: Post[]
  params: { locale: LocaleTypes }
}

const MAX_DISPLAY = 5

export default async function Home({ posts, params: { locale } }: HomeProps) {
  const { t } = await createTranslation(locale, 'home')

  const mainPosts = [
    {
      slug: 'https://medium.com/@serkan-uslu/huggingface-photo-background-generation-ile-g%C3%B6rsel-arka-plan%C4%B1-de%C4%9Fi%C5%9Ftirme-86052b5b5a68',
      date: 'Aug 2, 2024',
      title: 'HuggingFace: Photo-Background-Generation ile Görsel Arka Planı Değiştirme',
      summary:
        'Bir fotoğraftaki ana nesnenin arkaplanını kaldırıp, yeni bir arkaplan yaratacağız. Bunun için...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/frontend-g%C3%BCvenli%C4%9Fi-web-uygulamalar%C4%B1n%C4%B1z%C4%B1-koruman%C4%B1n-yollar%C4%B1-ba8585c536b6',
      date: 'May 23, 2024',
      title: 'Frontend Güvenliği: Web Uygulamalarınızı Korumanın Yolları',
      summary:
        'Frontend geliştiricileri olarak, kullanıcı arayüzlerini ve deneyimlerini iyileştirmeye odaklanırken, güvenlik bazen geri planda kalabilir. Ancak, günümüz dijital dünyasında güvenlik en az işlevsellik ve estetik kadar önemlidir....',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/secure-software-development-life-cycle-s-sdlc-580f0cf86d8e',
      date: 'May 22, 2024',
      title: 'Secure -Software Development Life Cycle(S-SDLC)',
      summary:
        'Yazılım geliştirme karmaşık ve zorlu bir süreçtir. Belirli bir plan ve yöntemle ilerlenmediği takdirde içinden çıkılmaz bir hal alması kaçınılmazdır...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/design-system-par%C3%A7alardan-b%C3%BCt%C3%BCne-0acd3d54bfcb',
      date: 'May 17, 2024',
      title: 'Design System: Parçalardan Bütüne',
      summary:
        'Bu yazıda tasarım sistemi (Design System) üzerinde duracağız. Tasarım sisteminin ne olduğunu anlayarak neden ihtiyacımız olduğunu irdeleyeceğiz...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/alice-harikalar-diyar%C4%B1nda-2b60ecdf1cb2',
      date: 'May 20, 2024',
      title: 'Alice Harikalar Diyarında',
      summary: 'Nereye gideceğini bilmiyorsan hangi yoldan gideceğinin bir önemi yok...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/docker-bu-bilgisayarda-%C3%A7al%C4%B1%C5%9Fm%C4%B1yor-sorununa-elveda-6e6ec82bfe13',
      date: 'May 17, 2024',
      title: 'Docker: “Bu Bilgisayarda Çalışmıyor!” Sorununa Elveda',
      summary:
        'Docker, yazılımlarınızı bir konteyner içinde paketlemenize olanak tanıyan bir platformdur...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/html-caching-sayfa-h%C4%B1z%C4%B1n%C4%B1z%C4%B1-art%C4%B1r%C4%B1n-fd50d104bce1',
      date: 'May 15, 2024',
      title: 'HTML Caching: Sayfa Hızınızı Artırın',
      summary:
        'Web performans optimizasyonu, kullanıcı deneyimini iyileştirmek için kritik öneme sahiptir. Bu optimizasyon yöntemlerinden biri de HTML…',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/api-i%CC%87steklerinde-ustala%C5%9F%C4%B1n-axios-interceptors-ile-etkili-y%C3%B6netim-teknikleri-d94d604d4f96',
      date: 'Apr 29, 2024',
      title: 'API İsteklerinde Ustalaşın: Axios Interceptors ile Etkili Yönetim Teknikleri',
      summary:
        'Axios, JavaScript dünyasında popüler bir HTTP istemci kütüphanesidir. React, Vue.js gibi modern frontend çerçeveleri ile uyumlu bir şekilde…',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/videolar%C4%B1n-h%C4%B1z%C4%B1na-h%C3%BCkmedin-1cbcd1855041',
      date: 'Apr 26, 2024',
      title: 'Videoların hızına hükmedin!',
      summary:
        'Çoğumuz, özellikle YouTube ve çeşitli eğitim platformlarında video izlerken, videoların hızını değiştirmek istemişizdir. Var olan hız ayarlarının yetersiz...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/cookie-g%C3%BCvenli%C4%9Fi-httponly-ve-secure-flagler-ile-veri-koruma-1bc495238468',
      date: 'Apr 15, 2024',
      title: 'Cookie Güvenliği: HttpOnly ve Secure Flag’ler ile Veri Koruma',
      summary:
        'Web güvenliği unsurlarından biri olan “cookie”ler ve bu cookie’lerin güvenliğini artırmak için kullanılan yöntemlerden “HttpOnly” ve...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/kodunuzu-konu%C5%9Fturun-jsdoc-i%CC%87le-dok%C3%BCmantasyon-yazmak-c84540971afc',
      date: 'Mar 28, 2024',
      title: 'Kodunuzu Konuşturun: JSDoc İle Dokümantasyon Yazmak',
      summary:
        'Selamlar Sizlere bu yazımda JSDoc tan bahsedeceğim. JSDoc bir JavaScript dosyasının nasıl çalıştığını ve ne yaptığını açıklamanıza yardımcı olan, kodunuzun üzerine eklediğiniz yorum bloklarından...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/yeni-ba%C5%9Flayanlar-ve-profesyoneller-i%C3%A7in-yapay-zeka-destekli-%C3%B6%C4%9Frenme-yol-haritalar%C4%B1-roadmap-sh-9a06dcf78eea',
      date: 'Mar 18, 2024',
      title:
        'Yeni Başlayanlar ve Profesyoneller için Yapay Zeka Destekli Öğrenme Yol Haritaları: Roadmap.sh ile Tanışın',
      summary: 'Teknoloji ve öğrenme dünyasında yeni başlayanlar ya da farklı bir alan...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/git-hooks-ile-conventional-commits-kullan%C4%B1m%C4%B1-11de217c412f',
      date: 'Jan 10, 2024',
      title: 'Git Hooks ile Conventional Commits Kullanımı',
      summary:
        'Giriş Modern yazılım geliştirme dünyasında, kodun okunabilirliği ve takip edilebilirliği sadece bir tercih değil, zorunluluktur. Projeler büyüdükçe ve ekipler çeşitlendikçe, kod tabanının yönetimi karmaşık..',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/githubdaki-i%CC%87lk-ad%C4%B1mlar-b%C3%BCy%C3%BCk-projelerin-i%CC%87lk-commit-lerini-ke%C5%9Ffetmek-94acb5a81814',
      date: 'Nov 21, 2023',
      title: 'GitHub’daki İlk Adımlar: Büyük Projelerin İlk Commit’lerini Keşfetmek',
      summary:
        'Herkese selamlar! Her GitHub deposu, bir hikayenin başlangıç noktasını saklar: ilk commit. Bir projenin yolculuğuna başladığı bu ilk...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/puppeteer-recording-37839e4426eb',
      date: 'Oct 25, 2023',
      title: 'Puppeteer & Recording',
      summary:
        'Herkese merhaba. Uzun bir aradan sonra bu yazımda sizlere Puppeteer kütüphanesi ve Google Chrome Developer Tools’un (DevTools) Recorder özelliği hakkında birkaç şey paylaşacağım. Ayrıca, bu iki...',
    },
    {
      slug: 'https://medium.com/@serkan-uslu/git-hook-ile-commit-mesaj-kontrol%C3%BC-e064a814d250',
      date: 'Sep 22, 2023',
      title: 'Git Hook ile Commit Mesaj Kontrolü',
      summary:
        'Merhaba, ben Serkan USLU. Bu benim ilk Medium yazım ve heyecanlıyım çünkü sizinle paylaşacak çok şeyim var. Frontend developer olarak çalışıyorum ve kod yazmak benim için sadece bir iş...',
    },
  ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10">
            {t('aboutMe')}
          </h2>
          <p>{t('aboutMeDescription')}</p>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10">
            {t('greeting')}
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!mainPosts.length && t('noposts')}
          {mainPosts.map((post) => {
            const { slug, date, title, summary } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">{t('pub')}</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`${slug}`} className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`${t('more')}"${title}"`}
                        >
                          {t('more')} &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
