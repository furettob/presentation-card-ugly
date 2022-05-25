import {Component} from "react";

class Grid extends Component {
    render() {
        return (
            <div className={"pc-grid"}>
                {this.props.children}
            </div>
        )
    }
}

export default Grid;
