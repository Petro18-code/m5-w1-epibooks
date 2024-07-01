import { Container, Nav, Navbar } from 'react-bootstrap';
function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0 z-3" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;