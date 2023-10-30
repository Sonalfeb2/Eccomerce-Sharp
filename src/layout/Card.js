import { Card, Button} from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../context_store/Cart_Context";
const GenricsCard = props => {
  const StyleCard = props.id % 2 === 0 ? true : false;
  const ctx = useContext(CartContext)
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
            <Button variant="primary" onClick={()=>ctx.addItem(props)}>
              Add to Cart
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GenricsCard;
