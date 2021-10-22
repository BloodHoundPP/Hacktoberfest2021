import { Col,Card } from "react-bootstrap"


const HotelCard = (props) => {
    return (
        <Col>
            <Card >
                {/* <Card.Img variant="top" src={props.Img}/> */}
                <img classname="card-img-top"src={props.Img} alt="hotels"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default HotelCard