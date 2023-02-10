import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import reactLogo from '@/assets/react.svg'
import styles from './styles.module.scss'

function Home() {
  const { t } = useTranslation('')
  
  return (
    <div className={styles.container}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className={cn(styles.logo, styles.react)} alt="React logo" />
        </a>
      </div>
      <h1>{t('About:route')}</h1>
      <p className={styles.readTheDocs}>
        {t('Global:click')}
      </p>
    </div>
  )
}

export default Home;
