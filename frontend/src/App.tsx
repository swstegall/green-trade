import React, { Component } from "react";
import { Navbar } from "./components/navbar/navbar";
import { Body } from "./components/body/body";
import { LookingForCard } from "./components/cards/lookingForCard";
import { TradingCard } from "./components/cards/tradingCard";

class App extends Component<
  {},
  {
    collapse: boolean;
    isWideEnough: boolean;
    lookingForActive: boolean;
    tradingActive: boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      lookingForActive: false,
      tradingActive: false,
    };
    this.viewListings = this.viewListings.bind(this);
    this.lookingFor = this.lookingFor.bind(this);
    this.trading = this.trading.bind(this);
  }

  viewListings = () => {
    console.log("view listings has been clicked");
  };

  lookingFor = () => {
    console.log("looking for has been clicked");
    this.setState({
      lookingForActive: !this.state.lookingForActive,
    });
  };

  trading = () => {
    console.log("trading has been clicked");
    this.setState({
      tradingActive: !this.state.tradingActive,
    });
  };

  render() {
    return (
      <>
        <Navbar
          collapse={this.state.collapse}
          isWideEnough={this.state.isWideEnough}
          viewListings={this.viewListings}
          lookingFor={this.lookingFor}
          trading={this.trading}
        />
        <Body />
        <LookingForCard
          lookingForActive={this.state.lookingForActive}
          lookingFor={this.lookingFor}
        />
        <TradingCard
          tradingActive={this.state.tradingActive}
          trading={this.trading}
        />
      </>
    );
  }
}

export default App;
