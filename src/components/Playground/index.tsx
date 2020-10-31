import React, { useState } from 'react'

export function Playground() {
  const [count, setCount] = useState(100)

  return (
    <>
      <div
        className="mt-6 mx-auto py-3 border border-gray-500 cursor-pointer w-24 text-center"
        onClick={() => setCount(s => s + 1)}
      >
        {count}
      </div>
    </>
  )
}
