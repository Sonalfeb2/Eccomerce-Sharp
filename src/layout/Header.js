import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import Cart from "../Cart";
import { useContext, useState } from "react";
import CartContext from "../context_store/Cart_Context";
import { Link } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  const cartHandler = () => {
    setShow(!show);
  };
  const ctx = useContext(CartContext);
  const ctxCount = ctx.items.reduce((curr,item)=>{
    return curr = curr + item.quantity
  },0)
  return (
    < >
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Generics</Navbar.Brand>
        <Nav className="d-flex justify-content-center">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/" className="text-white">
            Store
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
        </Nav>
        <Button
          variant="outline-primary"
          onClick={cartHandler}
          className="position-relative"
        >
          Cart
          <Badge pill bg="success" className="position-absolute top-0 start-100 translate-middle">
            {ctxCount}
          </Badge>
        </Button>
        <Cart show={show} handleClose={cartHandler} />
      </Container>
    </Navbar>
    
    <h1 className=" p-5 bg-secondary text-white text-center">
    Generics Store
  </h1>
  </>
  );
};
export default Header;
