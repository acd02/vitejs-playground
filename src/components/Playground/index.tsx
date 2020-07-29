import React, { useState } from 'react'

import styles from './styles.module.scss'

export function Playground() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className={styles.count} onClick={() => setCount(s => s + 1)}>
        {count}
      </div>
    </div>
  )
}
