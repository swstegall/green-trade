import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { Map } from "../map/map";

export class TradingCard extends Component<
  {
    tradingActive: boolean;
    trade: any;
    closeTrade: any;
    completeTrade: any;
    tradePayload: any;
  },
  { previousItem: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      previousItem: {},
    };
  }

  componentDidMount() {
    this.setState({
      previousItem: this.props.tradePayload,
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.props.tradingActive}
          toggle={this.props.closeTrade}
          centered
        >
          <MDBModalHeader toggle={this.props.closeTrade}>
            Confirm Trade?
          </MDBModalHeader>
          <MDBModalBody>
            <div>
              <Map
                location={this.props.tradePayload.location}
                name={this.props.tradePayload.name}
              />
            </div>
            <dl className={"row"}>
              <dt className={"col-sm-3"}>Name</dt>
              <dd className={"col-sm-9"}>{this.props.tradePayload.name}</dd>
              <dt className={"col-sm-3"}>Location</dt>
              <dd className={"col-sm-9"}>{this.props.tradePayload.location}</dd>
              <dt className={"col-sm-3"}>Looking For</dt>
              <dd className={"col-sm-9"}>
                {this.props.tradePayload.lookingFor}
              </dd>
              <dt className={"col-sm-3"}>Trading</dt>
              <dd className={"col-sm-9"}>{this.props.tradePayload.trading}</dd>
            </dl>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="default" onClick={this.props.closeTrade}>
              Close
            </MDBBtn>
            <MDBBtn
              color="light-blue"
              onClick={() => {
                this.props.completeTrade(this.props.tradePayload);
              }}
            >
              Trade
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
