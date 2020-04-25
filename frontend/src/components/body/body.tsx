import React, { Component } from "react";

export class Body extends Component<
  { items: any },
  { numItems: number; loading: boolean; tableItems: Array<any> }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      numItems: 0,
      loading: true,
      tableItems: [],
    };
  }

  componentDidMount() {
    if (this.props.items.length !== 0) {
      this.setState({
        numItems: this.props.items.length,
      });
      const arr: any = Object.values(this.props.items)[0];
      const tempRows = arr.map((item: any, index: number) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.lookingFor}</td>
            <td>{item.trading}</td>
            <td>
              {item.completed ? (
                <i style={{ color: "#BBFFBB" }} className={"fas fa-check"}></i>
              ) : (
                <i
                  style={{ color: "#FFBBBB" }}
                  className={"far fa-times-circle"}
                ></i>
              )}
            </td>
          </tr>
        );
      });
      this.setState({
        tableItems: tempRows,
        loading: false,
      });
    }
  }

  componentDidUpdate() {
    if (this.state.numItems !== this.props.items.length) {
      this.setState({
        loading: true,
        numItems: this.props.items.length,
      });
      console.log(this.props.items);
      const arr = this.props.items;
      const tempRows = arr.map((item: any, index: number) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.lookingFor}</td>
            <td>{item.trading}</td>
            <td>
              {item.completed ? (
                <i style={{ color: "#BBFFBB" }} className={"fas fa-check"}></i>
              ) : (
                <i
                  style={{ color: "#FFBBBB" }}
                  className={"far fa-times-circle"}
                ></i>
              )}
            </td>
          </tr>
        );
      });
      this.setState({
        tableItems: tempRows,
        loading: false,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.loading ? (
          <div>
            <table
              id="dtDynamicVerticalScrollExample"
              className={
                "table table-striped table-hover table-bordered table-sm"
              }
              cellSpacing="0"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th className={"th-sm"} style={{color: "#000000", backgroundColor: "#dcedc8", fontFamily: "Raleway", fontWeight: "bold", fontSize: "large"}}>Name</th>
                  <th className={"th-sm"} style={{color: "#000000", backgroundColor: "#dcedc8", fontFamily: "Raleway", fontWeight: "bold", fontSize: "large" }}>Looking For</th>
                  <th className={"th-sm"} style={{color: "#000000", backgroundColor: "#dcedc8", fontFamily: "Raleway", fontWeight: "bold", fontSize: "large"}}>Trading</th>
                  <th className={"th-sm"} style={{color: "#000000",backgroundColor: "#dcedc8", fontFamily: "Raleway", fontWeight: "bold", fontSize: "large"}}>Completed</th>
                </tr>
              </thead>
              <tbody>{this.state.tableItems}</tbody>
            </table>
          </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    );
  }
}
