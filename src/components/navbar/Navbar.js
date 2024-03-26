import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import logo from "../../images/logo/ternakita-black-landscape.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          {/* <img className="logo" src={logo} alt="logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1"></Nav.Link>
            <Nav.Link href="#action1" className="px-lg-3">
              Landing Page
            </Nav.Link>
            <Nav.Link href="#action1" className="px-lg-3">
              Custom Web
            </Nav.Link>
            <Nav.Link href="#action1">
              Custom Web & Mobile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <div className="d-flex align-items-center order">
          <Button
            variant="primary"
            className="btn-primary d-none d-lg-inline-block"
          >
            Connect Wallet
          </Button>
        </div> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
