import { Component } from "react";

class Area extends Component {
  render() {
    if (!this.props.title) {
      console.warn("No title in area!!!");
    }
    return (
      <div className="pc-area">
        <h3 className={"pc-area__title"}>{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Area;
