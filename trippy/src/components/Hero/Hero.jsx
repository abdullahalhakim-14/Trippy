import './Hero.css'
const Hero = ({bgImage , title , describtion , btn}) => {
  return (
    <div className='hero'>
      <img src={bgImage} alt="" />
      <h1>{title}</h1>
      { describtion && <p>{describtion}</p>}
      { btn && <button>{btn}</button>}
    </div>
  )
}

export default Hero
