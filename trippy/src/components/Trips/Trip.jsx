const Trip = ({image , subtitle , details}) => {
  return (
        <div className='trips-cards'>
                <div className={'trip'}>
                    <div className='trip-img'>
                    <img src={image}  />
                    </div>
                    <div className='text'>
                        <h2>{subtitle}</h2>
                        <p>{details}</p>
                    </div>
                </div>
        </div>
  )
}
export default Trip


