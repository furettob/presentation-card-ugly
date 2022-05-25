import {Component} from "react";

class TagSkill extends Component {
    render() {
        return (
            <div className={"pc-skill"}>
                <span>{this.props.name}&nbsp;</span>
                <span className={this.props.level > 3 ? "pc-skill__level pc-skill__level--green" : "pc-skill__level"}>
                  <i className={"far fa-star"}/> {this.props.level}
                </span>
            </div>
        )
    }
}

export default TagSkill;
