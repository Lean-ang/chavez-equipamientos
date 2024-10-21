import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarProducts() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary products-navbar">
            <Container>
                <Navbar.Toggle aria-controls="products-navbar-nav" />
                <Navbar.Collapse id="products-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='#herramientas'>Herramientas</Nav.Link>
                        <Nav.Link href='#equipamiento-taller'>Equipamiento de Taller</Nav.Link>
                        <Nav.Link href='#soldadura'>Soldadura</Nav.Link>
                        <Nav.Link href='#construccion'>Construcción</Nav.Link>
                        <Nav.Link href='#jardineria'>Jardineria</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarProducts;