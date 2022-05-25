import { Component } from "react";

class Area extends Component {
  render() {
    if (!this.props.title) {
      console.error("No  in area!!!");
    } else {
      console.log("Title is ", this.props.title)
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
