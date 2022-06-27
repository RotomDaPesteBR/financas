import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default function MainNavbar() {
    return (
        <Navbar style={stylesheet} bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand style={{display: "flex", fontSize: "30px", alignItems: "center"}} href="./">
                    <img
                    src="/icon.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    style={{marginRight: "10px"}}
                    />
                    Finanças
                </Navbar.Brand>
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