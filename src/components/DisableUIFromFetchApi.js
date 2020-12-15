import React, { useState } from 'react'

const DisableUIFromFetchApi = () => {
  const [Data, setDate] = useState()
  const [isShow, setIsShow] = useState(false)

  const getDataApi = () => {

    setTimeout(() => {
      setIsShow(true)
      console.log('set')
    }, 2000)

  }

  return (
    <div>
      <button className="button is-link" title="Disabled button" disabled={isShow} onClick={getDataApi}>Block Disabled
        UI
      </button>
      {isShow && <h2>call api success</h2>}

    </div>

  )
}
export default DisableUIFromFetchApi
