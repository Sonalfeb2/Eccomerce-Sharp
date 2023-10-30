import { Navbar ,Container,Nav,Button} from "react-bootstrap";
import Cart from "../Cart";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false)
  const cartHandler = () =>{
          setShow(!show);
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container  fluid>
        <Navbar.Brand href="#">Generics</Navbar.Brand>
        <Nav className="d-flex justify-content-center">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#store" className="text-white">Store</Nav.Link>
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
          </Nav>
          <Button variant="outline-primary" className="me-2" onClick={cartHandler}>Cart</Button>
          <Cart show={show} handleClose = {cartHandler}/>
      </Container>
    </Navbar>
  );
};
export default Header;
