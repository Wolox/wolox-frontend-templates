import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import Layout from '~components/Layout';
import { PATHS } from '~constants/paths';

interface Props {
  data: { id: string };
}

// Example dynamic route component
function ExampleDetail({ data }: Props) {
  const { query } = useRouter();
  const { t } = useTranslation('dynamic');
  const queryShow = query && Object.entries(query).find((key) => key[0] === 'foo');

  return (
    <Layout title={`Example ${data.id}`} className="column center middle">
      <h1>{t('title', { id: data.id })}</h1>
      {queryShow && <h2>{t('text', { query: queryShow[0], value: queryShow[1] })}</h2>}
      <Link href={PATHS.home} passHref>
        <a href="replace" className="link">
          {t('backButton')}
        </a>
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Replace with your api call obtaining a /get list to know the possible ids
  const paths: { params: { id: string } }[] = await new Promise((resolve) => {
    resolve(
      [1, 2].map((item) => ({
        params: {
          id: `${item}`
        }
      }))
    );
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Replace with your api call obtaining the possibly /get/{id} item
  const data = await new Promise((resolve) => {
    resolve(context.params);
  });
  return {
    props: {
      data
    }
  };
};

export default ExampleDetail;
