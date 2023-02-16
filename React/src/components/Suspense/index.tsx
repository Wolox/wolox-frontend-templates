import { ReactNode, Suspense as ReactSuspense } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

function Suspense({ fallback, children }: Props) {
  const { t } = useTranslation('')

  return (
    <ReactSuspense fallback={fallback || <h1>{t('Suspense:loading')}</h1>}>
      {children}
    </ReactSuspense>
  )
}

export default Suspense;
