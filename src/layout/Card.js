import { Card, Button} from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../context_store/Cart_Context";
const GenricsCard = props => {
  const ctx = useContext(CartContext)
  return (
    <div className="d-flex justify-content-around">
      <Card border="light" >
        <Card.Header className="text-center">
          {props.title}
        </Card.Header>
        <Card.Body>
          <Card.Img className=" h-50 "  src={props.imageUrl} />
          <Card.Text className="text-center">
            Price: $ {props.price}
          </Card.Text>
          
          <Button className="w-100" variant="info" onClick={()=>ctx.addItem(props)}>
              Add to Cart
            </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GenricsCard;
