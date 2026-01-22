
const Destination = ({ subtitle , details , image1 , image2 , reverse}) => {
    return (
        <div>
            <div className={`first-destinations ${reverse ? "reverse" : ""}`}>
                <div className='text'>
                    <h2>{subtitle}</h2>
                    <p>{details}</p>
                </div>
                <div className='img-container'>
                    <img src={image1} id='img1' />
                    <img src={image2} id='img2' />
                </div>
            </div>
        </div>
    )
}

export default Destination
