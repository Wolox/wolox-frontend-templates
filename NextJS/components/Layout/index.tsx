import { ReactNode } from 'react';
import Head from 'next/head';

import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  title: string;
}

// Example component reused among the app
function Layout({ children, className = '', title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <div className={`full-width column ${styles.containerApp} ${className}`}>{children}</div>
    </>
  );
}

export default Layout;
