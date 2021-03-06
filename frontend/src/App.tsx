import React, { Component } from "react";
import { Navbar } from "./components/navbar/navbar";
import { Body } from "./components/body/body";
import { AddNewCard } from "./components/cards/addNewCard";
import items from "./defaultItems.json";
import { TradingCard } from "./components/cards/tradingCard";

class App extends Component<
  {},
  {
    collapse: boolean;
    isWideEnough: boolean;
    addNewActive: boolean;
    tradingActive: boolean;
    tradePayload: any;
    items: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      addNewActive: false,
      tradingActive: false,
      tradePayload: {},
      items,
    };
    this.addNew = this.addNew.bind(this);
    this.trade = this.trade.bind(this);
    this.closeTrade = this.closeTrade.bind(this);
    this.completeTrade = this.completeTrade.bind(this);
    this.addANewItem = this.addANewItem.bind(this);
  }

  addNew = () => {
    this.setState({
      addNewActive: !this.state.addNewActive,
      tradingActive: false,
    });
  };

  closeTrade = () => {
    this.setState({
      tradingActive: !this.state.tradingActive,
    });
  };

  completeTrade = async (event: any) => {
    let arr: any = this.state.items.items;
    if (arr === undefined) {
      arr = this.state.items;
    }
    const arrElemRemoved: Array<any> = arr.filter(
      (elem: any) =>
        !(
          elem.name === event.name &&
          elem.location === event.location &&
          elem.lookingFor === event.lookingFor &&
          elem.trading === event.trading &&
          elem.completed === event.completed
        )
    );
    const newEvent = {
      name: event.name,
      location: event.location,
      lookingFor: event.lookingFor,
      trading: event.trading,
      completed: true,
    };
    await this.setState({
      items: [...arrElemRemoved, newEvent],
      tradingActive: !this.state.tradingActive,
    });
  };

  trade = (event: any) => {
    if (event.completed === false) {
      this.setState({
        tradePayload: event,
        tradingActive: !this.state.tradingActive,
      });
    }
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
        <Body items={this.state.items} trade={this.trade} />
        <AddNewCard
          addNewActive={this.state.addNewActive}
          items={this.state.items}
          addNew={this.addNew}
          addANewItem={this.addANewItem}
        />
        <TradingCard
          tradingActive={this.state.tradingActive}
          closeTrade={this.closeTrade}
          completeTrade={this.completeTrade}
          trade={this.trade}
          tradePayload={this.state.tradePayload}
        />
      </>
    );
  }
}

export default App;
