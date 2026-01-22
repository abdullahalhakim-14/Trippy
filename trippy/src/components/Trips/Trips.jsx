import Trip from './Trip'
import './Trips.css'
const Trips = ({title , describtion}) => {
return (
    <div className='Trips'>
        <h1> {title} </h1>
        <p> {describtion} </p>
        <div className='trip-card'>
        <Trip
            image = "/assets/img/Trips1.jpg" 
            subtitle = "Trip in Indonesia"
            details = "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."        
        />
        <Trip
            image ="/assets/img/Trips2.jpg" 
            subtitle = "Trip in Malaysia"
            details = "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia."
        />
        <Trip
            image ="/assets/img/Trips3.jpg" 
            subtitle = "Trip in France"
            details = "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
        />
        </div>
    </div>
)
}

export default Trips
