import Head from 'next/head';
import * as React from 'react';
import Script from 'next/script';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Layout from 'container/layout';
import createCache from '@emotion/cache';
import createMyTheme from 'config/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ColorModeContext } from 'context/themeColorMode';
import createEmotionCache from 'config/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';

// css
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const cacheRTL = createCache({
    key: 'muicache',
    stylisPlugins: [],
  });

  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => createMyTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CacheProvider value={cacheRTL}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />

        <Script id="google-analytics-script" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });
    `}
        </Script>
        <DefaultSeo
          title="Default Title"
          description="Default description"
          openGraph={{
            type: 'website',
            locale: 'tr-TR',
            url: 'https://www.serkanuslu.com/',
            site_name: 'SiteName',
          }}
        />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  );
}
