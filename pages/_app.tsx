import '../styles/globals.css';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { EmotionCache } from '@emotion/utils';
import type { AppProps } from 'next/app';
import createEmotionCache from '../styles/create-emotion-cache';
import appTheme from '../styles/theme/app-theme';

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps): JSX.Element {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={appTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
