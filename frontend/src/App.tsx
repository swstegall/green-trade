import React, { Component } from "react";
import { Navbar } from "./components/navbar/navbar";
import { Body } from "./components/body/body";
import { AddNewCard } from "./components/cards/addNewCard";
import items from "./defaultItems.json";

class App extends Component<
  {},
  {
    collapse: boolean;
    isWideEnough: boolean;
    addNewActive: boolean;
    items: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      addNewActive: false,
      items,
    };
    this.addNew = this.addNew.bind(this);
  }

  addNew = () => {
    this.setState({
      addNewActive: !this.state.addNewActive,
    });
  };

  render() {
    return (
      <>
        <Navbar
          collapse={this.state.collapse}
          isWideEnough={this.state.isWideEnough}
          addNew={this.addNew}
        />
        <Body items={this.state.items}/>
        <AddNewCard
          addNewActive={this.state.addNewActive}
          items={this.state.items}
          addNew={this.addNew}
        />
      </>
    );
  }
}

export default App;
