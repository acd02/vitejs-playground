import React from 'react'

import styles from './styles.module.scss'

export type Props = {
  label?: string
  value: Record<string | number, unknown> | string | boolean | number | unknown[]
}

export function renderItem(
  { label, value = 'the value is undefined' }: Props,
  index: number
) {
  const content =
    typeof value === 'function' ? String(value) : JSON.stringify(value, null, 2)

  return (
    <div key={index}>
      <span className={styles.label}>{label || index}:</span>{' '}
      <span className={styles.value}>{content}</span>
    </div>
  )
}
