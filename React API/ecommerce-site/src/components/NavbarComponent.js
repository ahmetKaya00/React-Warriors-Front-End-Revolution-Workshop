import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">MyStore</NavbarBrand>
      <Nav className="ms-auto" navbar> {}
        <NavItem>
          <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/cart">Cart - {cartItemCount}</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;
