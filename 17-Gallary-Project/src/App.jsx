import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'
const App = () => {
  const [index, setIndex] = useState(1)
  const [uData, setuData] = useState([])
  const handleClick = async () => {
const Data = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
setuData(Data.data)
  }
  useEffect(() => {
    handleClick()
  },[index])
let alt = "Random Image Gallery"
if(alt.length>0){
  alt = uData.map(function(elem,idx){
    return <div>
      <Card elem={elem} key={idx}/>
    </div>
  })
}
  return (
    <div className="bg-black h-screen text-white p-4">
       <div className='flex flex-wrap overflow-auto gap-3'>
        {alt}
       </div>
       <div className='flex justify-center items-center gap-2'>
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }} className='h-10 w-20 bg-green-600 font-bold rounded-lg active:scale-95 active:bg-green-400'>
          Prev
        </button>
        <h1>Page{index}</h1>
        <button onClick={()=>{
          setIndex(index+1)
        }} className='h-10 w-20 bg-green-600 font-bold rounded-lg active:scale-95 active:bg-green-400'>
          Next
        </button>
       </div>
    </div>
  )
}

export default App
