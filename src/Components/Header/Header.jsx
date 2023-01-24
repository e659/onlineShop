import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {AiOutlineLogout } from "react-icons/ai";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  // cartCount
  const cartLength = useSelector((state) =>
    state.cart.cart.reduce((a, b) => a + b.quantity, 0)
  );
  // console.log(cartLength)
  return (
    <>
  <Navbar  expand="lg" 
  className="fixed-top "
  style={{ backgroundColor: "white" }}
  >
      <Container>
        <Navbar.Brand href="#home"> Online Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navList">
            <Nav.Link href="#cart"
            style={{ color: "black",cursor: "pointer" }}
            >
            <AiOutlineShoppingCart
                    size={25}
                    className="mx-3 position-relative"
                    style={{ color: "black",cursor: "pointer" }}
                  />
                     Cart
                  <span className="cartLength">{cartLength}</span>
                
            </Nav.Link>
 {/* <Nav.Link href="#logOut"
 className="logOutLink ms-4 fs-6 px-3"
            style={{ color: "white",cursor: "pointer" }}
            >
                 <AiOutlineLogout
                    size={25}
                    className=" position-relative "
                    style={{ color: "white",cursor: "pointer" }}
                  />
             LogOut
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

     
    </>
  );
}
