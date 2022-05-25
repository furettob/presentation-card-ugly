import * as React from "react";
import { Component } from "react";

export default class TagClass extends Component {
  /*constructor(props) {
    super(props);
    // this.state = { clicked: false }
  }*/

  render() {
    return (
      <a href={this.props.link.url} className="pc-uc__link">
        {this.props.link.logo && (
          <span className={"pc-uc__link-logo"}>
            <i className={this.props.link.logo} />
          </span>
        )}
        {this.props.link.name}
      </a>
    );
  }
}
