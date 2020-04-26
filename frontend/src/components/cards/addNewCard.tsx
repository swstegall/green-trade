import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { MDBInput } from "mdbreact";

export class AddNewCard extends Component<
  { addNewActive: boolean; items: any; addNew: any; addANewItem: any },
  {
    editName: string;
    editLocation: string;
    editLookingFor: string;
    editTrading: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      editName: "",
      editLocation: "",
      editLookingFor: "",
      editTrading: "",
    };
    this.submitChange = this.submitChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleLookingForChange = this.handleLookingForChange.bind(this);
    this.handleTradingChange = this.handleTradingChange.bind(this);
  }

  handleNameChange = (event: any) => {
    this.setState({ editName: event.target.value });
  };

  handleLocationChange = (event: any) => {
    this.setState({ editLocation: event.target.value });
  };

  handleLookingForChange = (event: any) => {
    this.setState({ editLookingFor: event.target.value });
  };

  handleTradingChange = (event: any) => {
    this.setState({ editTrading: event.target.value });
  };

  submitChange = () => {
    const change = {
      name: this.state.editName,
      location: this.state.editLocation,
      lookingFor: this.state.editLookingFor,
      trading: this.state.editTrading,
      completed: false,
    };
    this.props.addANewItem(change);
    this.props.addNew();
  };

  render() {
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.props.addNewActive}
          toggle={this.props.addNew}
          centered
        >
          <MDBModalHeader toggle={this.props.addNew}>Add New</MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label={"Name"}
              icon={"user"}
              value={this.state.editName}
              onChange={this.handleNameChange}
            />
            <MDBInput
              label={"Location"}
              icon={"house-user"}
              value={this.state.editLocation}
              onChange={this.handleLocationChange}
            />
            <MDBInput
              label={"Looking For"}
              icon={"binoculars"}
              value={this.state.editLookingFor}
              onChange={this.handleLookingForChange}
            />
            <MDBInput
              label={"Trading"}
              icon={"gift"}
              value={this.state.editTrading}
              onChange={this.handleTradingChange}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="default" onClick={this.props.addNew}>
              Close
            </MDBBtn>
            <MDBBtn color="light-blue" onClick={this.submitChange}>
              Add
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
