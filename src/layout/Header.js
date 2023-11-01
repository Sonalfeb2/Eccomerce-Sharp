import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import Cart from "../Cart";
import { useContext, useState } from "react";
import CartContext from "../context_store/Cart_Context";
import { NavLink } from "react-router-dom";
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
        <Nav className="d-flex justify-content-between w-25" style={{fontWeight:'200', fontSize:'18px', textDecoration:'none'}}>
          <NavLink to="/home" className={({isActive})=>isActive?'text-info':'text-white'}>
            HOME
          </NavLink>
          <NavLink to="/" className={({isActive})=>isActive?'text-info':'text-white'} end>
            STORE
          </NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?'text-info':'text-white'}>
            ABOUT
          </NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?'text-info':'text-white'}>
            Contact-Us
          </NavLink>
        </Nav>
        <Button
          variant="outline-info"
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
    
    <p className=" text-center pb-5 bg-secondary text-white" style={{fontSize:'100px' ,fontWeight:'bold'}}>
    The Generics
  </p>
  </>
  );
};
export default Header;
