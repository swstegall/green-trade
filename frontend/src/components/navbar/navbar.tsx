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
    viewListings: any;
    lookingFor: any;
    trading: any;
  },
  {}
> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <MDBNavbar color="black" dark expand="md">
            <MDBContainer>
              <MDBNavbarBrand href="/">
                <strong>GreenTrade</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler />
              <MDBCollapse isOpen={this.props.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem onClick={this.props.lookingFor}>
                    <MDBNavLink to="#">Looking For</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={this.props.trading}>
                    <MDBNavLink to="#">Trading</MDBNavLink>
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
