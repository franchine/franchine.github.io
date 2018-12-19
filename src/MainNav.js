import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./css/MainNav.css";

class MainNav extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">franchine ninh</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className="navItemContainer">
          <NavItem eventKey={1} href="#aboutme">
            about
          </NavItem>
          <NavItem eventKey={2} href="#photography">
            photography
          </NavItem>
          <NavItem eventKey={3} href="#cs">
            visualizations
          </NavItem>
          <NavItem eventKey={4} href="#contact">
            contact
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default MainNav;