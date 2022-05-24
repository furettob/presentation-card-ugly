import { Component } from "react";

class TagClass extends Component {
    render() {
        return (
            
            <span className={"pc-tag"}><i className={"fa " + this.props.icon} />
            &nbsp;{this.props.name}</span>
        )
    }
  }

export default TagClass;
