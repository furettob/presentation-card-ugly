import { Component } from "react";

class TagClass extends Component {

    constructor(props) {
        super(props);
        this.state = {selected:false, color:"red"};
    }

    onTagClicked = () => {
        console.log("Clicked on ", this.props.name)
        this.setState({selected: !this.state.selected})
    }

    render() {

        return (
            <span className={"pc-tag" +
                ( this.state.selected ? " pc-tag--selected" : "") +
                (this.props.size === "big" ? " pc-tag--big" : "")
            } onClick={ () => { this.onTagClicked() } }>
                <i className={"fa " + this.props.icon} />
            &nbsp;{this.props.name}</span>
        )
    }
  }

export default TagClass;