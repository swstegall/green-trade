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
    this.addANewItem = this.addANewItem.bind(this);
  }

  addNew = () => {
    this.setState({
      addNewActive: !this.state.addNewActive,
    });
  };

  addANewItem = async (item: any) => {
    if (this.state.items.items !== undefined) {
      const arr: Array<any> = [...this.state.items.items, item];
      await this.setState({
        items: arr,
      });
    } else {
      const arr: Array<any> = [...this.state.items, item];
      await this.setState({
        items: arr,
      });
    }
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
          addANewItem={this.addANewItem}
        />
      </>
    );
  }
}

export default App;
