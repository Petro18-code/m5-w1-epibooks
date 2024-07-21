import { Container, Nav, Navbar, InputGroup, Form, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';
function MyNav({handleSearch, handleCategoryChange}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Navbar expand="lg" className={theme === 'light' ? "bg-body-tertiary position-sticky top-0 z-3" : "bg-body-tertiary position-sticky top-0 z-3 bg-dark"} data-bs-theme={theme}>
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
            <Button className='mx-2' variant="primary" onClick={() => toggleTheme()}>{theme === 'light' ? 'Dark' : 'Light'}</Button>
          </Nav>
        </Navbar.Collapse>
        <InputGroup>
          <Form.Control
            placeholder="Search any book"
            aria-label="Search any book"
            aria-describedby="basic-addon2"
            onChange={handleSearch}
          />
          <Form.Control as="select" onChange={handleCategoryChange} className="mr-sm-2">
            <option value="romance">Romance</option>
            <option value="history">History</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="scifi">Scifi</option>
          </Form.Control>
        </InputGroup>
      </Container>
    </Navbar>
  );
}

export default MyNav;