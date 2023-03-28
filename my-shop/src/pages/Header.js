import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand onClick={() => {navigate('/') }}>쁘띠샵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}>홈</Nav.Link>
              <Nav.Link onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;