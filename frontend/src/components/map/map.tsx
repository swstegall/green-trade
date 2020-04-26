import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";
import { apiKey } from "../..";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export class Map extends Component<
  { location: string; name: string },
  { defaultCenter: any; center: any; zoom: number; previousLocation: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      defaultCenter: { lat: 48.8583701, lng: 2.2922926 },
      center: { lat: 48.8583701, lng: 2.2922926 },
      zoom: 11,
      previousLocation: "",
    };
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
  }

  componentDidMount() {
    this.setState({
      previousLocation: this.props.location,
    });
    Geocode.fromAddress(this.props.location).then((response: any) => {
      const { lat, lng } = response.results[0].geometry.location;
      this.setState({
        center: {
          lat,
          lng,
        },
      });
    });
  }

  componentDidUpdate() {
    if (this.props.location !== this.state.previousLocation) {
      this.setState({
        previousLocation: this.props.location,
      });
      Geocode.fromAddress(this.props.location).then((response: any) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          center: {
            lat,
            lng,
          },
        });
      });
    }
  }

  render() {
    return (
      <div style={{ height: "40vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={this.state.defaultCenter}
          defaultZoom={this.state.zoom}
          center={this.state.center}
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text={this.props.name}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
