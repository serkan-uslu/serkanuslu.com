# Personal Website

Welcome to my personal website! After a long hiatus, I finally took the time to create my own space on the internet. This site offers a blend of my professional achievements and personal passions, showcasing the projects I'm working on, my writings, and the ideas I've developed over time. As you explore these pages, you'll see what motivates and inspires me. If you find something that resonates with you or if you want to know more, please feel free to reach out!

## Table of Contents

1. [Introduction](#introduction)
2. [Dependencies](#dependencies)
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
3. [Built With](#built-with)
4. [Features](#features)
5. [Requirements](#requirements)
6. [Getting Started](#getting-started)
7. [License](#license)
8. [Contact](#contact)

## Introduction

Welcome to my personal website! After a long hiatus, I finally took the time to create my own space on the internet. This site offers a blend of my professional achievements and personal passions, showcasing the projects I'm working on, my writings, and the ideas I've developed over time. As you explore these pages, you'll see what motivates and inspires me. If you find something that resonates with you or if you want to know more, please feel free to reach out!

## Dependencies

### @next/bundle-analyzer

The [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) npm package functions as a plugin for Next.js projects. This package uses the Webpack Bundle Analyzer tool to visualize the sizes and distributions of your project's JavaScript bundles. Visualization helps developers understand which packages contribute the most to the JavaScript size sent to end-users. Armed with this information, developers can optimize their code and remove unnecessary dependencies if needed, thus improving the application's load time and enhancing the overall user experience.

```json
"analyze": "cross-env ANALYZE=true next build",
```

### @vercel/analytics

The [@vercel/analytics](https://www.npmjs.com/package/@vercel/analytics) package helps improve the performance of your web applications by tracking and analyzing user behaviors. This package is used to monitor user interactions and page load times.

### @vercel/speed-insights

The [@vercel/speed-insights](https://www.npmjs.com/package/@vercel/speed-insights) package analyzes the speed performance of your web pages. This package provides recommendations for increasing page speed and reports performance metrics.

### autoprefixer

[autoprefixer](https://www.npmjs.com/package/autoprefixer) automatically adds browser prefixes to your CSS code, ensuring that your CSS features are compatible with all browsers.

### contentlayer

[contentlayer](https://www.npmjs.com/package/contentlayer) is used to configure and manage your content sources. This package makes your content more organized and manageable.

### esbuild

[esbuild](https://www.npmjs.com/package/esbuild) is a fast and efficient JavaScript and TypeScript bundler and minifier. This package significantly reduces the build time of your projects.

### framer-motion

[framer-motion](https://www.npmjs.com/package/framer-motion) is an animation library for React applications. It is used to create animations responsive to user interactions.

### github-slugger

[github-slugger](https://www.npmjs.com/package/github-slugger) is a tool that converts headings into URL-friendly slugs. This package ensures that the headings look proper in URLs.

### pliny

[pliny](https://www.npmjs.com/package/pliny) is a starter template and configuration tool for Next.js projects. It helps you quickly start your projects.

### postcss

[postcss](https://www.npmjs.com/package/postcss) is used to process and transform CSS code. This package makes your CSS writing process more efficient.

### reading-time

[reading-time](https://www.npmjs.com/package/reading-time) is a tool that estimates the reading time of texts. This package shows your users how long it will take to read your content.

### commitlint

[commitlint](https://www.npmjs.com/package/commitlint) checks and standardizes your commit messages based on certain rules. This package keeps your project workflow organized.

### eslint

[eslint](https://www.npmjs.com/package/eslint) is a linter that helps you find and fix errors in your JavaScript and TypeScript code. It is used to improve your code quality.

### husky

[husky](https://www.npmjs.com/package/husky) is used to manage Git hooks. This package performs automatic checks during your commit and push processes.

### lint-staged

[lint-staged](https://www.npmjs.com/package/lint-staged) is a tool that lints only the staged files in Git. This package saves time while ensuring the quality control of your code.

### prettier

[prettier](https://www.npmjs.com/package/prettier) is a code formatting tool. This package ensures that your code is consistent and readable.

### prettier-plugin-tailwindcss

[prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) automatically sorts and organizes your Tailwind CSS classes. This package makes your code written with Tailwind CSS cleaner.

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
- Type checking for TypeScript
- Integration with Tailwind CSS
- Strict mode for TypeScript and React 18
- Multilingual support with i18next and React-i18next (i18n)
- Linter with ESLint
- Code formatting with Prettier
- Git hooks with Husky
- Commit message checking with Commitlint
- Automatically generated Sitemap.xml and robots.txt
- SEO-friendly
- Content created with Contentlayer

## Next.js built-in features:

- HTML and CSS minification
- Live reloading
- Cache invalidation

## Requirements

- Node.js 18+ and npm

Within the application folder, all contents are placed in a new [locale] folder: this is the official recommended way by Next.js. An i18n folder has also been added.

## Getting Started

Run the following commands in your local environment:

```
git clone https://github.com/serkan-uslu/serkanuslu.com.git my-project-name
cd my-project-name

npm install
```

Then, you can run it locally in development mode with live reloading:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
