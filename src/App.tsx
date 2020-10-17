import cx from 'classcat'
import React, { useEffect, useState } from 'react'

import { Playground } from './components/Playground'
import { Quokka } from './components/Quokka'
import { getOppositeStatus, Status } from './utils'

function App() {
  const [status, setStatus] = useState<Status>(
    (localStorage.getItem('status') as Status) || 'playground'
  )

  useEffect(() => {
    localStorage.setItem('status', status)
  }, [status])

  return (
    <div className="grid app-rows h-full">
      <div
        className={cx([
          'flex flex-none justify-center',
          status === 'quokka' && 'bg-custom-dark',
        ])}
      >
        <button
          className={
            'inline-flex my-4 mx-auto bg-gray-200 py-1 px-2 text-lg focus:outline-none focus:shadow-outline'
          }
          onClick={() => setStatus(getOppositeStatus)}
        >
          show {getOppositeStatus(status)}
        </button>
      </div>
      {status === 'playground' ? <Playground /> : <Quokka />}
    </div>
  )
}

export default App
