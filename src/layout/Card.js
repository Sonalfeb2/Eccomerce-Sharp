import { Card, Button } from "react-bootstrap";
const GenricsCard = props => {
  const StyleCard = props.id % 2 == 0 ? true : false;
  console.log(StyleCard,props.id)
  return (
    <div className={`d-flex ${StyleCard ? "justify-content-end" : ""} p-5`}>
      <Card border="light" style={{ width: "18rem" }}>
        <Card.Header className="text-center">
          {props.title}
        </Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={props.imageUrl} />
          <Card.Text className="d-flex justify-content-around">
            Price: $ {props.price}
            <Button variant="primary">Add to Cart </Button>
          </Card.Text>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default GenricsCard;
