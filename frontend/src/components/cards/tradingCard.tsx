import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export class TradingCard extends Component<{ tradingActive: boolean, trading: any }, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <MDBContainer>
      <MDBModal isOpen={this.props.tradingActive} toggle={this.props.trading} centered>
        <MDBModalHeader toggle={this.props.trading}>TradingCard</MDBModalHeader>
        <MDBModalBody>
          There are currently no cards to trade you plebian
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.props.trading}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}
