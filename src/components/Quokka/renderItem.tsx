import React from 'react'

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
      <span className="text-custom-orange font-semibold">{label || index}:</span>{' '}
      <span className="text-custom-green whitespace-pre-wrap">{content}</span>
    </div>
  )
}
