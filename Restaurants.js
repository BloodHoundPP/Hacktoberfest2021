import { Row} from "react-bootstrap"
import HotelCard from "./HotelCard"
import HotelList from "./HotelList"

const hotel = (HotelList) =>{
    return (
        <HotelCard 
            Img = {HotelList.Image}
            title = {HotelList.title}
            text = {HotelList.text}
        />
    )
}

const Restaurants =() =>{
    return (
        <div class="hotels">
            <h2>Best Restaurents For You</h2>
            <Row >
                {HotelList.map(hotel)}
            </Row>
        </div>
    )
}
export default Restaurants