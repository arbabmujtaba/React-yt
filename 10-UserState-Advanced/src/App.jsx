import React, { useState } from 'react'

const App = () => {
  const [Num,setNum] = useState(10)
 const fnc = () => {
    setNum(prev => prev+1)
     setNum(prev => prev+1)
      setNum(prev => prev+1)
  }
  return (
    <div>
    <button onClick={fnc}>ClickMe</button>
    <h1>The Result is: {Num}</h1>
    </div>
  )
}

export default App
