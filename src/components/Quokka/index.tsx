import React from 'react'

import { items } from './items'
import { renderItem } from './renderItem'
import styles from './styles.module.scss'

export function Quokka() {
  return <div className={styles.root}>{items.map(renderItem)}</div>
}
