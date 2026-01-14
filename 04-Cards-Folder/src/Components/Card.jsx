import { Bookmark } from 'lucide-react'
const Card = (props, index) => {
  console.log(props);
  
  return (
            <div className='card'>
        <div className='top'>
          <img src={props.brandLogo} alt={props.company} />
          <button>Save<Bookmark size={8} />
          </button>
        </div>
        <div className='center'>
          <h3>{props.company}<span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className='tags'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <div>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card
