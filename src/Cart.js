import { Offcanvas } from "react-bootstrap";
import { TableComponent } from "./layout/Table";
const Cart = props => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1
    }
  ];

  return (
    <Offcanvas show={props.show} onHide={props.handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>CART</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <TableComponent data={cartElements}>
        <thead >
            <th class="text-center">Image</th>
            <th class="text-center">Title</th>
            <th class="text-center">Price</th>
            <th class="text-center">Quantity</th>
        </thead>
        </TableComponent>
       
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default Cart;
