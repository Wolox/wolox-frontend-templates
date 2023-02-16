import Link from 'next/link';
import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Layout from '~components/Layout';
import { PATHS } from '~constants/paths';

function Example() {
  const { t } = useTranslation('example');
  const [foo, setFoo] = useState('');

  // Hooks works
  useEffect(() => {
    setFoo(t('title'));
  }, [t]);

  return (
    <Layout title="Example" className="column center middle">
      <span className="m-bottom-2">{foo}</span>
      <Link href={PATHS.home} passHref>
        <a href="replace" className="link">
          {t('backButton')}
        </a>
      </Link>
    </Layout>
  );
}

export default Example;
