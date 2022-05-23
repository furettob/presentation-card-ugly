import { Component } from "react";

class Area extends Component {
  render() {
    if (!this.props.title) {
      console.error("No title in area!!!");
    } else {
      console.log("Title is ", this.props.title)
    }
    return (
      <div className="pc-area">
        <h3>{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Area;
