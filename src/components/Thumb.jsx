import * as React from "react";
import { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div className="pc-thumb-container">
        <div
          className="pc-thumb"
          style={{
            backgroundImage: `url(/img/${this.props.avatar})`
          }}
          alt={this.props.name}
        />
      </div>
    );
  }
}

export default Image;
