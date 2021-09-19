import React, { useState } from 'react'
import { Button } from '/@components/atoms/Button'

export function Playground() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div className="mt-4 mx-auto py-3 border border-gray-500 w-24 text-center">
        {count}
      </div>
      <Button className="mx-auto mt-4" onClick={() => setCount(s => s + 1)}>
        increment
      </Button>
    </>
  )
}
