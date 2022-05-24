import {Component} from "react";

class TagSkill extends Component {
    render() {
        return (
            <div>
                <span>{this.props.name}&nbsp;</span>
                <span>
                  <i className={"far fa-star"}/> {this.props.level}
                </span>
            </div>
        )
    }
}

export default TagSkill;
