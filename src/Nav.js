import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Franchine Ninh</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Navigation;
// import React, { Component } from "react";
// import { Navbar, NavDropdown, NavItem, MenuItem } from "react-bootstrap";

// class Nav extends Component {
//   render() {
//     const nav = (
//       <div><Navbar>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <a href="#home">Franchine Ninh</a>
//           </Navbar.Brand>
//         </Navbar.Header>
//         <Nav>
//           <NavItem eventKey={1} href="#">
//             Link
//           </NavItem>
//           <NavItem eventKey={2} href="#">
//             Link
//           </NavItem>
//           <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//             <MenuItem eventKey={3.1}>Action</MenuItem>
//             <MenuItem eventKey={3.2}>Another action</MenuItem>
//             <MenuItem eventKey={3.3}>Something else here</MenuItem>
//             <MenuItem divider />
//             <MenuItem eventKey={3.4}>Separated link</MenuItem>
//           </NavDropdown>
//         </Nav>
//       </Navbar></div>
//     );
//     return {nav};
//   }
// }

// export default Nav;


