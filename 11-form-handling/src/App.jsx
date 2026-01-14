import React from 'react'

const App = () => {
const FMS = (e) =>{
  e.preventDefault()
  console.log("Form is Submitted")
}


  return (
    <form onSubmit={(e)=>{
      FMS(e)
    }}>
      <input type="text" placeholder='Enter Your Name' />
      <button>Submit</button>
    </form>
  )
}

export default App
