import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
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
    const bgPink = {backgroundColor: '#388e3c'}
    return (
      <div>
        <Router>
          <MDBNavbar style={bgPink} dark scrolling expand="md">
            <MDBContainer>
              <MDBNavbarBrand href="/">
                <strong style={{color: "#000000", fontSize:"x-large", fontFamily: "Montserrat", fontWeight:"bold"}}>GreenTrade</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler />
              <MDBCollapse isOpen={this.props.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem onClick={this.props.addNew}>
                    <MDBNavLink to="#">Add New</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </Router>
      </div>
    );
  }
}
