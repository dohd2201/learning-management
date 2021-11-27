import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logoNeu from "../../assets/Logo-NEU.png";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const NavbarMenu = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow topBar">
      <Navbar.Brand className="font-weight-bolder webName">
        <img src={logoNeu} alt="Logo" width="40" height="40" className="mr-2" />
        NEU COURSES
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/dashboard"
            as={Link}
          >
            DASHBOARD
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            ABOUT ME
          </Nav.Link>
          <Nav.Link className="font-weight-bolder text-white" to="/" as={Link}>
            TIME TABLE
          </Nav.Link>
          <Nav.Link className="font-weight-bolder text-white" to="/" as={Link}>
            MY DRIVER
          </Nav.Link>
        </Nav>

        <Nav className="ml-5">
          <Button
            className="font-weight-bolder text-white"
            variant="danger"
            onClick={logout}
          >
            <img
              src={logoutIcon}
              alt="logoutIcon"
              width="15"
              height="15"
              className="mr-2"
            />
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
