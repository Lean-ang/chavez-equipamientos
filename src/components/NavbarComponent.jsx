import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo-chavez.png'


function NavbarComponent() {

    return (
        <>
            <Navbar expand='lg' bg="light" data-bs-theme="light">
                <Container>
                    <img src={logo} alt="Logo Chavez" style={{width:"110px"}}/>                 
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;