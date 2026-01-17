import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(1)
  const [b, setB] = useState(100)
  function onA(){
    setA(a+1)
  }
  function onB(){
    setB(b-1)
  }
  useEffect(()=>{
    console.log("A has been changed")
  },[a])
  useEffect(()=>{
    console.log("B has been changed")
  },[b])
  return (
    <div>
      <h1>A Has been changed : {a} </h1>
      <h2>B Has been changed : {b} </h2>
      <button className='b1' onClick={()=>{
        onA()
      }}>
        Click Me!
      </button>
      <button className='b2' onClick={()=>{
        onB()
      }}>
        Click Me!
      </button>
    </div>
  )
}

export default App
