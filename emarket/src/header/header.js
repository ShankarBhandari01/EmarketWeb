
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';

const Header = () => {
  if (window.location.pathname == "/dashboard") {
    var menu =
      <>
        <Navbar.Brand href="/">
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginLeft: '10px', fontFamily: "roboto", fontSize: "29px" }}>E-<span style={{ color: "#51227F" }}>Market</span></h3>
        </Navbar.Brand>


        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard"> Home</Nav.Link>
            <Nav.Link href="/dashboard/shopping" >Shopping</Nav.Link>
            <Nav.Link href="/contactus">Register</Nav.Link>
            <Nav.Link href="/contactus"> AboutUS</Nav.Link>
            <Nav.Link href="/cart">Your Cart</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item href={"/profile"}> My Profile</NavDropdown.Item>
              <NavDropdown.Item href={"/changepassword/"}>Change Password</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
        <Button style={{ backgroundColor: "#51227F", border: 'none', height: '39px', marginTop: '3px', marginRight: '10px' }} href="/login" >Logout</Button>
      </>



  }

  else if (window.location.pathname == "/profile" || (window.location.pathname == '/cart') || (window.location.pathname == '/dashboard/shopping')) {
    var menu =
      <>
        <Navbar.Brand href="/">
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginLeft: '10px', fontFamily: "roboto", fontSize: "29px" }}>E-<span style={{ color: "#51227F" }}>Market</span></h3>
        </Navbar.Brand>


        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard"> Home</Nav.Link>
            <Nav.Link href="/dashboard/shopping" >Shopping</Nav.Link>
            <Nav.Link href="/contactus">Register</Nav.Link>
            <Nav.Link href="/contactus"> AboutUS</Nav.Link>
            <Nav.Link href="/cart">Your Cart</Nav.Link>

            <NavDropdown title="Profile" id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item href="/profile"> My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/changepassword">Change Password</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
        <Button style={{ backgroundColor: "#51227F", border: 'none', height: '39px', marginTop: '3px', marginRight: '10px' }} href="/login" >Logout</Button>
      </>



  }
  else if (window.location.pathname == "/Farmerprofile" || window.location.pathname == '/Order' || window.location.pathname == '/report' || window.location.pathname == '/farmer/dashboard' || window.location.pathname == '/farmer/dashboard/shopping') {
    menu =
      <>
        <Navbar.Brand href="/">
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginLeft: '10px', fontFamily: "roboto", fontSize: "29px" }}>E-<span style={{ color: "#51227F" }}>Market</span></h3>
        </Navbar.Brand>


        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/farmer/dashboard"> Home</Nav.Link>
            <Nav.Link href="/farmer/dashboard/shopping" >Shopping</Nav.Link>
            <Nav.Link href="/signup">Register</Nav.Link>
            <Nav.Link href="/contactus"> AboutUS</Nav.Link>
            <Nav.Link href="/Order">Orders</Nav.Link>

            <NavDropdown title="Profile" id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item href="/Farmerprofile"> My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/changepassword">Change Password</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
        <Button style={{ backgroundColor: "#51227F", border: 'none', height: '39px', marginTop: '3px', marginRight: '10px' }} href="/login" >Logout</Button>
      </>



  }
  else {
    menu =
      <>
        <Navbar.Brand href="/">
          <h3 style={{ color: "#a018a0", fontWeight: "bolder", marginLeft: '10px', fontFamily: "roboto", fontSize: "29px" }}>E-<span style={{ color: "#51227F" }}>Market</span></h3>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/home"> Home</Nav.Link>
            <Nav.Link href="/shopping" >Shopping</Nav.Link>
            <Nav.Link href="/signup">Register</Nav.Link>
            <Nav.Link href="/"> AboutUS</Nav.Link>
          </Nav>

        </Navbar.Collapse>
        <Button style={{ backgroundColor: "#51227F", border: 'none', height: '39px', marginTop: '3px', marginRight: '10px' }} href="/login" >login</Button>
      </>



  }



  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" className="shadow sticky-top " >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {menu}
      </Navbar>

    </div>
  )
}
export default Header;
