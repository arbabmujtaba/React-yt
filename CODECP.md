<!-- 

const App = () => {

      function Btnclicked() {
      console.log("wassupbaby")
    }
    function mouseetr(){
      console.log("mouseenter")
    }
  return (

    < div >
    <button onMouseEnter={mouseetr} onClick={Btnclickedo}>Click Me!</button>
    </div >
  )
}

export default App -->


<!-- 
import React from 'react'

const App = () => {

  function lucky(val){
    console.log(val)
  }
  return (
    <div>
      <input onChange={(Elem)=>{
        lucky(Elem.target.value)
      }} type="text" placeholder='Enter the Name'/>
    </div>
  )
}

export default App
 -->
<!-- import React from 'react'

const App = () => {
  let a = 0;
  function inc (){
    console.log(a)
    a++
    console.log(a)
  }
  return (
    <button onMouseMove={inc}>Click To Increase!</button>
  )
}

export default App --> -->




import React, { useState } from 'react'

const App = () => {
  const [num, Newmum] = useState({name:"arbab",age:24})
  let second = {...num}
  const Cha =() =>{
    second.age=22
    second.name="lucky"
    Newmum(second)
  }
  return (
    <div>
      <button onClick={Cha}>
        Click
      </button>
      <h1>Name is :{num.name}, Age is :{num.age}</h1>
    </div>
  )
}

export default App