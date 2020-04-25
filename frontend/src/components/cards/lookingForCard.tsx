import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export class LookingForCard extends Component<
  { lookingForActive: boolean, lookingFor: any },
  {}
> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <MDBContainer>
      <MDBModal isOpen={this.props.lookingForActive} toggle={this.props.lookingFor} centered>
        <MDBModalHeader toggle={this.props.lookingFor}>LookingForCard</MDBModalHeader>
        <MDBModalBody>
          (...)
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.props.lookingFor}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}
