import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default function MainNavbar() {
    return (
        <Navbar style={stylesheet} bg="dark" variant='dark'>
        <Container>
            <Navbar.Brand style={{fontSize: "30px"}} href="./">Finanças</Navbar.Brand>
        </Container>
      </Navbar>
        )
}

const stylesheet = {
    fontFamily: "'IBM Plex Serif', serif",
    position: "fixed",
    top: "0",
    height: "65px",
    zIndex: "10",
    width: "100%"
}