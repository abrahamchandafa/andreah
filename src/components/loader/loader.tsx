import React from 'react'

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black w-full h-dvh">
      <div className="loader"></div>
    </div>
  )
}

export default Loader