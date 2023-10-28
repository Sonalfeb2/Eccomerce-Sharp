import { Card ,Button} from "react-bootstrap";
const GenricsCard = (props) =>{
    return (
        <Card className="m-5" border="light" style={{ width: '18rem' }}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
        <Card.Img variant="top" src={props.imageUrl} />
          <Card.Text>
           Price: $ {props.price}
          </Card.Text>
          <Button variant="primary">Add to Cart </Button>
        </Card.Body>
      </Card>
    )
}

export default GenricsCard;