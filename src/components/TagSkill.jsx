import {Component} from "react";

class TagSkill extends Component {
    render() {
        return (
            <div className={"pc-skill"}>
                <span>{this.props.name}&nbsp;</span>
                <span className={"pc-skill__level"}>
                  <i className={"far fa-star"}/> {this.props.level}
                </span>
            </div>
        )
    }
}

export default TagSkill;
