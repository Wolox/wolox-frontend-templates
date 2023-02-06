import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import styles from './styles.module.scss'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

function App() {
  const [count, setCount] = useState(0)
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
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          {t('Global:count', { value: count })}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        {t('Global:click')}
      </p>
    </div>
  )
}

export default App
