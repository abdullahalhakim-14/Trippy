import Hero from "../components/Hero/Hero"
import Trips from "../components/Trips/Trips"
const Services = () => {
    return (
        <div>
            <Hero
            bgImage = "/assets/img/services.jpg"
            title= "Services"
            />
            <Trips
            title="Recent Trips"
            describtion= "You can discover unique destination using Google Maps."
            />
        </div>
    )
}

export default Services
