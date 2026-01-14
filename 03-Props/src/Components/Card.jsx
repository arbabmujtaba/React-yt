const Card = (props) => {
    console.log(props);
  return (
    <div className='Parent'>
      <div className='CARD'>
        <img src={props.img} alt="IMG" />
        <h1>
            {props.Nigga}
        </h1>
        <p>Hello people my name is arbab Mujtaba I am a engineering student To know more click The button Below</p>
        <button>
          Click Me
        </button>
      </div>
    </div>
  )
}
export default Card