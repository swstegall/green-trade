import React, { Component } from "react";

export class Body extends Component<
  { items: any; trade: any },
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
          <tr
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => this.props.trade(item)}
          >
            <td
              style={{
                color: "#000000",
                fontFamily: "Raleway",
                fontSize: "regular",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {item.name}
            </td>
            <td
              style={{
                color: "#000000",
                fontFamily: "Raleway",
                fontSize: "regular",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {item.lookingFor}
            </td>
            <td
              style={{
                color: "#000000",
                fontFamily: "Raleway",
                fontSize: "regular",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {item.trading}
            </td>
            <td style={{ textAlign: "center", fontSize: "30px", verticalAlign: "middle" }}> 
              {item.completed ? (
                <i
                  style={{ color: "#e53935" }}
                  className={"fas fa-check"}
                ></i>
              ) : (
                  <i
                    style={{ color: "#e53935" }}
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
      const arr = this.props.items;
      const tempRows = arr.map((item: any, index: number) => {
        return (
          <tr
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => this.props.trade(item)}
          >
            <td
              style={{
                color: "#000000",
                fontFamily: "Raleway",
                fontSize: "regular",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {item.name}
            </td>
            <td
              style={{
                color: "#000000",
                fontFamily: "Raleway",
                fontSize: "regular",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {item.lookingFor}
            </td>
            <td
              style={{
                color: "#000000",
                fontFamily: "Raleway",
                fontSize: "regular",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {item.trading}
            </td>
            <td style={{ textAlign: "center", fontSize: "30px", verticalAlign: "middle" }}>
              {item.completed ? (
                <i
                  style={{ color: "#e53935" }}
                  className={"fas fa-check"}
                ></i>
              ) : (
                  <i
                    style={{ color: "#e53935" }}
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
                  <th
                    className={"th-sm"}
                    style={{
                      color: "#000000",
                      backgroundColor: "#dcedc8",
                      fontFamily: "Raleway",
                      fontWeight: "bold",
                      fontSize: "large",
                      textAlign: "center",
                    }}
                  >
                    Name
                  </th>
                  <th
                    className={"th-sm"}
                    style={{
                      color: "#000000",
                      backgroundColor: "#dcedc8",
                      fontFamily: "Raleway",
                      fontWeight: "bold",
                      fontSize: "large",
                      textAlign: "center",
                    }}
                  >
                    Looking For
                  </th>
                  <th
                    className={"th-sm"}
                    style={{
                      color: "#000000",
                      backgroundColor: "#dcedc8",
                      fontFamily: "Raleway",
                      fontWeight: "bold",
                      fontSize: "large",
                      textAlign: "center"
                    }}
                  >
                    Trading
                  </th>
                  <th
                    className={"th-sm"}
                    style={{
                      color: "#000000",
                      backgroundColor: "#dcedc8",
                      fontFamily: "Raleway",
                      fontWeight: "bold",
                      fontSize: "large",
                      textAlign: "center"
                    }}
                  >
                    Completed
                  </th>
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
