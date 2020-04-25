import React, { Component } from "react";

export class Body extends Component<
  { items: any },
  { loading: boolean; tableItems: Array<any> }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      tableItems: [],
    };
  }

  componentDidMount() {
    if (this.props.items.length !== 0) {
      const arr: any = Object.values(this.props.items)[0];
      const tempRows = arr.map((item: any, index: number) => {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.lookingFor}</td>
            <td>{item.trading}</td>
            <td>
              {item.completed ?
              <i style={{color: "#BBFFBB"}} className={"fas fa-check"}></i> :
              <i style={{color: "#FFBBBB"}} className={"far fa-times-circle"}></i>}
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
                  <th className={"th-sm"}>Name</th>
                  <th className={"th-sm"}>Looking For</th>
                  <th className={"th-sm"}>Trading</th>
                  <th className={"th-sm"}>Completed</th>
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