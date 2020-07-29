import cx from 'classcat'
import React, { useEffect, useState } from 'react'

import { Playground } from './components/Playground'
import { Quokka } from './components/Quokka'
import styles from './styles/root.module.scss'
import { getOppositeStatus } from './utils'

function App() {
  const [status, setStatus] = useState<'playground' | 'quokka'>(
    (localStorage.getItem('status') as any) || 'playground'
  )

  useEffect(() => {
    localStorage.setItem('status', status)
  }, [status])

  return (
    <div className={styles.root}>
      <div className={cx([styles.toggleBlock, status === 'quokka' && styles.isQuokka])}>
        <button className={styles.button} onClick={() => setStatus(getOppositeStatus)}>
          show {getOppositeStatus(status)}
        </button>
      </div>
      {status === 'playground' ? <Playground /> : <Quokka />}
    </div>
  )
}

export default App
