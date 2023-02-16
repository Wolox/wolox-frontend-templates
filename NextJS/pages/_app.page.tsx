import '../scss/index.scss';
import type { AppProps } from 'next/app';

/* eslint-disable-next-line @typescript-eslint/naming-convention */
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
