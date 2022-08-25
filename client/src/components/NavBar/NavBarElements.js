import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const NavBarElements = ({ logOutHandler, isLogin }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CodeBeginners</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Article">Article</Nav.Link>
            <Nav.Link href="/NFT">NFT</Nav.Link>
          </Nav>
          {isLogin ? (
            <Nav>
              <Nav.Link href="/Mypage">Mypage</Nav.Link>
              <Button variant="primary" onClick={logOutHandler}>
                Logout
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Signup">Signup</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarElements;
