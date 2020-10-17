import cx from 'classcat'
import React from 'react'

import { items } from './items'
import { renderItem } from './renderItem'
import styles from './styles.module.css'

export function Quokka() {
  return (
    <div className={cx(['grid p-6 bg-custom-dark', styles.root])}>
      {items.map(renderItem)}
    </div>
  )
}
