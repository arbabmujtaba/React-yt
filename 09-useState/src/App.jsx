import React, { useState } from 'react'

const App = () => {
  const [num, setnum]=useState(0)
  function increase(){
    setnum(num+1)
  }
  function decrease(){
    setnum(num-1)
  }
  function incby5(){
    setnum(num+5)
  }
  return (
    <div className='bxx'>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={incby5}>Jump by 5</button>
    </div>
  )
}

export default App
