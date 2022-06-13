import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export default function MainNavbar() {
    return (
        <Navbar style={stylesheet} bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="./">Finanças</Navbar.Brand>
            
        </Container>
      </Navbar>
        )
}

const stylesheet = {
    position: "fixed",
    top: "0",
    height: "65px",
    zIndex: "10",
    width: "100%"
}