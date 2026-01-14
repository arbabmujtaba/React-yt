import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const fnc = (e) => {
    e.preventDefault()
    console.log("Form is Submitted by :", title)
    setTitle('')
  }
  return (
  <div>
    <form onSubmit={(e)=>{
      fnc(e)
    }}>
      <input type="text" placeholder='Enter the Name' value={title} onChange={(e) => {
        setTitle(e.target.value)
      }} />
    <button>
      Submit
    </button>
    </form>
  </div>
)

}

export default App
