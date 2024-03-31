## Introduction

Welcome to my personal website! After a long break, I've finally taken the time to create my own space on the internet. It's a blend of professional accomplishments and personal passions, showcasing projects, writings, and ideas that I've been nurturing over time. As you explore these pages, you'll get a glimpse into the things that drive and inspire me. Feel free to reach out if you find something that resonates with you or if you're curious to learn more!

## Dependencies

### @next/bundle-analyzer

@next/bundle-analyzer npm paketi, Next.js projeleri için bir eklenti olarak işlev görür. Bu paket, projenizin JavaScript paketlerinin boyutlarını ve dağılımlarını görselleştirmek için Webpack Bundle Analyzer aracını kullanır. Görselleştirme, geliştiricilere hangi paketlerin son kullanıcıya gönderilen JavaScript boyutunu en çok artırdığını anlamada yardımcı olur. Bu bilgiyle donanmış geliştiriciler, gerekli olduğunda kodlarını optimize edebilir ve gereksiz bağımlılıkları kaldırabilirler, böylece uygulamanın yükleme süresini iyileştirebilir ve genel kullanıcı deneyimini artırabilirler.

Paketin kullanımı basittir: öncelikle projenize @next/bundle-analyzer paketini eklersiniz, ardından Next.js yapılandırma dosyanızda (next.config.js) bu eklentiyi yapılandırarak etkinleştirirsiniz. Bu yapılandırma, analiz sürecini özelleştirmenize olanak tanır, örneğin analiz raporlarının hangi modda (sunucu ya da istemci) ve ne zaman (geliştirme veya üretim yapısı sırasında) oluşturulacağını belirleyebilirsiniz. Raporlar, uygulamanızın farklı bölümlerinin nasıl birleştirildiğini ve boyutlarını bir sunucu üzerinden veya statik dosya olarak görselleştirir, böylece potansiyel optimizasyon alanlarını kolayca belirleyebilirsiniz.

package.json dosyası içerisinde scripts bölümündeki komutu çalıştırabilirsiniz.

```json
npm run analyze
```

İşlem bittiğinde .next klasörü içerisinde **analyze** isimli dosyada birden fazla html dosya oluşturulacaktır. Bunlar;

### edge.html

---

### client.html

---

### nodejs.html

---

```json
"analyze": "cross-env ANALYZE=true next build",
```

## @vercel/analytics

## @vercel/speed-insights

## autoprefixer

## contentlayer

## esbuild

## framer-motion

## github-slugger

## pliny

## postcss

## reading-time

## commitlint

## eslint

## husky

## lint-staged => lint-staged

## prettier

## prettier-plugin-tailwindcss

# scripts komutları

## Built With

- Next.js
- Tailwind CSS
- shadcn/ui
- ContentLayer
- Vercel
- i18next
- i18next-browser-languagedetector
- i18next-resources-to-backend
- React-i18next

## Features

- Next.js with App Router support
- Type checking TypeScript
- Integrate with Tailwind CSS
- Strict Mode for TypeScript and React 18
- Multi-language (i18n) with i18next and React-i18next
- Linter with ESLint
- Code Formatter with Prettier
- Husky for Git Hooks
- Lint git commit with Commitlint
- Sitemap.xml and robots.txt auto generated
- SEO-friendly
- Contents are created with Contentlayer

## Built-in feature from Next.js:

- Minify HTML & CSS
- Live reload
- Cache busting

## Requirements

- Node.js 18+ and npm

Within the app folder, all content has been placed to a new folder [locale]: this is the official way recommended by next.js. An i18n folder has also been added:

## Getting started

Run the following command on your local environment:

```
git clone https://github.com/serkan-uslu/serkanuslu.com.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.
