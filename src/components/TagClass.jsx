import { Component } from "react";

class TagClass extends Component {
    render() {
        return (
            
            <span> <i className={"fa " + this.props.icon} />
            &nbsp;{this.props.name}</span>
        )
    }
  }

export default TagClass;
