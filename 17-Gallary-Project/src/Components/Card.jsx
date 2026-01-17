import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url}>
      <div>
      <div key={props.idx} className="w-44 h-48 overflow-hidden rounded-xl" >
      <img src={props.elem.download_url} alt="random images" className="w-full h-full object-cover"/>
    </div>
    <h2 className='font-bold text-lg'>{props.elem.author}</h2>
    </div>
    </a>
    </div>
  )
}

export default Card
