import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [api, setApi] = useState([])
  const ap = async () => {
  const DATA = await axios.get('https://picsum.photos/v2/list')
  setApi(DATA.data)
  console.log(api)
  }
  return (
    <div>
      <h1>This is a simple api call</h1>
      <button onClick={ap}> Fetch </button>
      <div>
        {api.map(function(){
          return "hello"
        })}
      </div>
    </div>
  )
}

export default App