import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./css/MainNav.css";

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">franchine ninh</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className="navItemContainer">
          <NavItem eventKey={1} href="#aboutme" onClick={this.handleClick}>
          about
          </NavItem>
          <NavItem eventKey={2} href="#photography"onClickF={this.handleClick}>
            photography
          </NavItem>
          <NavItem eventKey={3} href="#cs"onClick={this.handleClick}>
            visualizations
          </NavItem>
          <NavItem eventKey={4} href="#contact"onClick={this.handleClick}>
            contact
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default MainNav;