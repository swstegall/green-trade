import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

export class Navbar extends Component<
  {
    collapse: boolean;
    isWideEnough: boolean;
    addNew: any;
  },
  {}
> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const bgGreen = { backgroundColor: "#388e3c" };
    return (
      <div>
        <Router>
          <MDBNavbar style={bgGreen} dark scrolling expand="md">
            <MDBNavbarNav left>
              <MDBNavbarBrand href="/">
                <strong
                  style={{
                    color: "#000000",
                    fontSize: "xx-large",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                  }}
                >
                  <i className="fas fa-leaf" style={{ fontSize: "45px" }}></i>
                  GreenTrade
                </strong>
              </MDBNavbarBrand>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavbarToggler />
              <MDBCollapse isOpen={this.props.collapse} navbar>
                <MDBNavItem onClick={this.props.addNew}>
                  <MDBNavLink
                    to="#"
                    style={{
                      color: "#000000",
                      fontSize: "xx-large",
                      fontFamily: "Montserrat",
                      fontWeight: "regular",
                    }}
                  >
                    Add New
                  </MDBNavLink>
                </MDBNavItem>
              </MDBCollapse>
            </MDBNavbarNav>
          </MDBNavbar>
        </Router>
      </div>
    );
  }
}
