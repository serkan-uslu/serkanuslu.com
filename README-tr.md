# Kişisel Web Sitem

Kişisel web siteme hoş geldiniz! Uzun bir aradan sonra, nihayet internette kendi alanımı yaratmak için zaman ayırdım. Bu site, profesyonel başarılarım ve kişisel tutkularımın bir karışımını sunuyor, üzerinde çalıştığım projeleri, yazıları ve zamanla geliştirdiğim fikirleri sergiliyor. Bu sayfaları keşfederken, beni motive eden ve ilham veren şeyleri göreceksiniz. Eğer sizinle rezonansa giren bir şey bulursanız veya daha fazla bilgi almak isterseniz, lütfen bana ulaşın!

## İçindekiler

1. [Giriş](#giriş)
2. [Bağımlılıklar](#bağımlılıklar)
   - [@next/bundle-analyzer](#nextbundle-analyzer)
   - [@vercel/analytics](#vercelanalytics)
   - [@vercel/speed-insights](#vercelspeed-insights)
   - [autoprefixer](#autoprefixer)
   - [contentlayer](#contentlayer)
   - [esbuild](#esbuild)
   - [framer-motion](#framer-motion)
   - [github-slugger](#github-slugger)
   - [pliny](#pliny)
   - [postcss](#postcss)
   - [reading-time](#reading-time)
   - [commitlint](#commitlint)
   - [eslint](#eslint)
   - [husky](#husky)
   - [lint-staged](#lint-staged)
   - [prettier](#prettier)
   - [prettier-plugin-tailwindcss](#prettier-plugin-tailwindcss)
3. [Yapımında Kullanılanlar](#yapımında-kullanılanlar)
4. [Özellikler](#özellikler)
5. [Gereksinimler](#gereksinimler)
6. [Başlarken](#başlarken)
7. [Lisans](#lisans)
8. [İletişim](#iletişim)

## Giriş

Kişisel web siteme hoş geldiniz! Uzun bir aradan sonra, nihayet internette kendi alanımı yaratmak için zaman ayırdım. Bu site, profesyonel başarılarım ve kişisel tutkularımın bir karışımını sunuyor, üzerinde çalıştığım projeleri, yazıları ve zamanla geliştirdiğim fikirleri sergiliyor. Bu sayfaları keşfederken, beni motive eden ve ilham veren şeyleri göreceksiniz. Eğer sizinle rezonansa giren bir şey bulursanız veya daha fazla bilgi almak isterseniz, lütfen bana ulaşın!

## Bağımlılıklar

### @next/bundle-analyzer

[@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) npm paketi, Next.js projeleri için bir eklenti olarak işlev görür. Bu paket, projenizin JavaScript paketlerinin boyutlarını ve dağılımlarını görselleştirmek için Webpack Bundle Analyzer aracını kullanır. Görselleştirme, geliştiricilere hangi paketlerin son kullanıcıya gönderilen JavaScript boyutunu en çok artırdığını anlamada yardımcı olur. Bu bilgiyle donanmış geliştiriciler, gerekli olduğunda kodlarını optimize edebilir ve gereksiz bağımlılıkları kaldırabilirler, böylece uygulamanın yükleme süresini iyileştirebilir ve genel kullanıcı deneyimini artırabilirler.

```json
"analyze": "cross-env ANALYZE=true next build",
```

### @vercel/analytics

[@vercel/analytics](https://www.npmjs.com/package/@vercel/analytics) kullanıcı davranışlarını izleyerek ve analiz ederek web uygulamalarınızın performansını artırmanıza yardımcı olan bir araçtır. Bu paket, kullanıcı etkileşimlerini ve sayfa yükleme sürelerini izlemek için kullanılır.

### @vercel/speed-insights

[@vercel/speed-insights](https://www.npmjs.com/package/@vercel/speed-insights) web sayfalarınızın hız performansını analiz eden bir araçtır. Bu paket, sayfa hızını artırmak için önerilerde bulunur ve performans metriklerini raporlar.

### autoprefixer

[autoprefixer](https://www.npmjs.com/package/autoprefixer) CSS kodunuza otomatik olarak tarayıcı ön ekleri ekler, böylece CSS özelliklerinizin tüm tarayıcılarda uyumlu olmasını sağlar.

### contentlayer

[contentlayer](https://www.npmjs.com/package/contentlayer) içerik kaynaklarınızı yapılandırmak ve yönetmek için kullanılır. Bu paket, içeriklerinizi daha düzenli ve yönetilebilir hale getirir.

### esbuild

[esbuild](https://www.npmjs.com/package/esbuild) hızlı ve verimli bir JavaScript ve TypeScript bundler ve minifier'dır. Bu paket, projelerinizin derleme süresini önemli ölçüde azaltır.

### framer-motion

[framer-motion](https://www.npmjs.com/package/framer-motion) React uygulamaları için animasyon kitaplığıdır. Kullanıcı etkileşimlerine duyarlı animasyonlar oluşturmak için kullanılır.

### github-slugger

[github-slugger](https://www.npmjs.com/package/github-slugger) başlıkları URL dostu biçimde slug'lara dönüştüren bir araçtır. Bu paket, başlıkların URL'lerde düzgün görünmesini sağlar.

### pliny

[pliny](https://www.npmjs.com/package/pliny) Next.js projeleri için bir başlangıç şablonu ve yapılandırma aracıdır. Projelerinizde hızlı başlangıç yapmanıza yardımcı olur.

### postcss

[postcss](https://www.npmjs.com/package/postcss) CSS kodunu işlemek ve dönüştürmek için kullanılır. Bu paket, CSS yazma sürecinizi daha verimli hale getirir.

### reading-time

[reading-time](https://www.npmjs.com/package/reading-time) metinlerin okunma süresini tahmin eden bir araçtır. Bu paket, kullanıcılarınıza içeriklerinizi ne kadar sürede okuyacaklarını gösterir.

### commitlint

[commitlint](https://www.npmjs.com/package/commitlint) commit mesajlarınızı belirli kurallara göre kontrol eder ve standartlaştırır. Bu paket, proje iş akışınızın düzenli olmasını sağlar.

### eslint

[eslint](https://www.npmjs.com/package/eslint) JavaScript ve TypeScript kodunuzda hataları bulup düzeltmenize yardımcı olan bir linter'dır. Kod kalitenizi artırmak için kullanılır.

### husky

[husky](https://www.npmjs.com/package/husky) Git hook'larını yönetmek için kullanılır. Bu paket, commit ve push işlemlerinizde otomatik kontroller yapar.

### lint-staged

[lint-staged](https://www.npmjs.com/package/lint-staged) sadece git'e eklenen (staged) dosyaları lint eden bir araçtır. Bu paket, kodunuzun kalite kontrolünü yaparken zamandan tasarruf etmenizi sağlar.

### prettier

[prettier](https://www.npmjs.com/package/prettier) kod formatlama aracıdır. Bu paket, kodunuzun tutarlı ve okunabilir olmasını sağlar.

### prettier-plugin-tailwindcss

[prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) Tailwind CSS sınıflarınızı otomatik olarak sıralar ve düzenler. Bu paket, Tailwind CSS ile yazılmış kodunuzu daha temiz hale getirir.

## Yapımında Kullanılanlar

- Next.js
- Tailwind CSS
- shadcn/ui
- ContentLayer
- Vercel
- i18next
- i18next-browser-languagedetector
- i18next-resources-to-backend
- React-i18next

## Özellikler

- App Router desteği ile Next.js
- TypeScript için tür kontrolü
- Tailwind CSS ile entegrasyon
- TypeScript ve React 18 için katı mod
- i18next ve React-i18next ile çoklu dil desteği (i18n)
- ESLint ile Linter
- Prettier ile kod formatlama
- Git Hook'ları için Husky
- Commitlint ile git commit kontrolü
- Otomatik oluşturulan Sitemap.xml ve robots.txt
- SEO dostu
- Contentlayer ile oluşturulan içerikler

## Next.js'in yerleşik özellikleri:

- HTML ve CSS minifikasyonu
- Canlı yeniden yükleme
- Önbellek temizleme

## Gereksinimler

- Node.js 18+ ve npm

Uygulama klasörü içinde, tüm içerikler yeni bir [locale] klasörüne yerleştirilmiştir: bu, Next.js tarafından önerilen resmi yoldur. Ayrıca bir i18n klasörü de eklenmiştir.

## Başlarken

Yerel ortamınızda aşağıdaki komutları çalıştırın:

```
git clone https://github.com/serkan-uslu/serkanuslu.com.git my-project-name
cd my-project-name


npm install
```

Ardından, canlı yeniden yükleme ile yerel olarak geliştirme modunda çalıştırabilirsiniz:

```
npm run dev
```

Projenizi görmek için favori tarayıcınızla http://localhost:3000 adresini açın.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için LICENSE dosyasına bakın.
