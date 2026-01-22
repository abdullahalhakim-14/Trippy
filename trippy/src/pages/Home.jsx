import Hero from "../components/Hero/Hero"
import Destinations from "../components/Destinations/Destinations"
import Trips from "../components/Trips/Trips"

const Home = () => {
  return (
    <div>
      <Hero
        bgImage="/assets/img/HomeBack.jpg"
        title="Your Journey Your Story"
        describtion="Choose Your Favourite Destination."
        btn="Travel Now"
      />
      <Destinations
        title="Popular Destinations"
        describtion=" Tours dive you the opportunity to see a lot, within a time frame. "
      />
      <Trips
        title="Recent Trips"
        describtion="You can discover unique destination using Google Maps."
      />
    </div>
  )
}

export default Home
