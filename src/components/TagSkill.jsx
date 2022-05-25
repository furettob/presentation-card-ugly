import {Component} from "react";

class TagSkill extends Component {
    render() {
        return (
            <div className={"pc-skill" + ( this.props.selected ? " pc-skill__level--color" : " ")}>
                <span>{this.props.name}&nbsp;</span>
                <span className={"pc-skill__level" + ( this.props.selected ? " pc-skill__level--color" : " ")}>
                  <i className={"far fa-star"}/> {this.props.level}
                </span>
            </div>
        )
    }
}

export default TagSkill;
