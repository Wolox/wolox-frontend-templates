import Link from 'next/link';
import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import getT from 'next-translate/getT';

import Layout from '~components/Layout';
import { PATHS } from '~constants/paths';
import { APP_NAME } from '~constants/general';

import styles from './styles.module.scss';

interface Props {
  foo: string;
}

function Home({ foo }: Props) {
  const { t } = useTranslation('home');

  return (
    <Layout title={APP_NAME} className="column center middle">
      <main className="column center m-bottom-2">
        <h2 className={`m-bottom-2 ${styles.title}`}>{t('title')}</h2>
        <Link href={PATHS.example} passHref>
          <a href="replace" data-testid="example-link" className="link m-bottom-2">
            {t('simple', { value: foo })}
          </a>
        </Link>
        <Link href={`${PATHS.example}/1`} passHref>
          <a href="replace" className="link m-bottom-2">
            {t('dynamic', { value: foo })}
          </a>
        </Link>
        <Link href={`${PATHS.example}/2?foo=bar`} passHref>
          <a href="replace" className="link m-bottom-2">
            {t('query', { value: foo })}
          </a>
        </Link>
        <p className={`${styles.message} m-bottom-2`}>
          {t('getStarted')} <code>{t('getStartedDir')}</code>
        </p>
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link m-bottom-2">{t('more')}</span>
        </a>
      </main>
      <footer className="row">
        <img src="/assets/wolox.svg" alt={t('woloxAlt')} className={`${styles.logo} m-right-2`} />
        <img src="/assets/fea.png" alt={t('feAlt')} className={`${styles.logo} m-right-2`} />
      </footer>
    </Layout>
  );
}

// Example pre-fetch request in page using SERVER-SIDE-RENDERING, this will be fetched in every request.
// If your data doesn't change constantly you should use `getStaticProps` to fetch data on BUILD time
// context argument of `getServerSideProps` contains utilities like getting the query params
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const t = await getT(locale, 'home');

  // replace promise for your service
  const foo = await new Promise((resolve) => {
    resolve(t('foo'));
  });
  return { props: { foo } };
};

export default Home;
