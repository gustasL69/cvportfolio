import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function NavBar({ onNavClick }) {
  return (
    <Navbar bg="secondary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => onNavClick('/')}>Homepage</Nav.Link>
          <Nav.Link onClick={() => onNavClick('/about')}>About me</Nav.Link>
          <Nav.Link onClick={() => onNavClick('/contacts')}>Contacts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}