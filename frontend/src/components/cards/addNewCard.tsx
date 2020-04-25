import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export class AddNewCard extends Component<
  { addNewActive: boolean, items: any, addNew: any },
  {}
> {
  constructor(props: any) {
    super(props);
    console.log(this.props.items.items);
  }

  render() {
    return (
      <MDBContainer>
      <MDBModal isOpen={this.props.addNewActive} toggle={this.props.addNew} centered>
        <MDBModalHeader toggle={this.props.addNew}>AddNewCard</MDBModalHeader>
        <MDBModalBody>
          (...)
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.props.addNew}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}
