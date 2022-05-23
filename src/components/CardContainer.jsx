import { Component } from "react";
import data from "../utils/data.json";

class CardContainer extends Component {
  componentDidMount() {
    const target = document.getElementById("card-container");
    target.innerHTML = "";
    for (var index in data) {
      const elem = data[index];
      const domElem = "<div>" + elem.name + " " + elem.lastname + "</div>";
      target.innerHTML = target.innerHTML + domElem;
    }
  }

  render() {
    return <div className="card-container" id="card-container" />;
  }
}

export default CardContainer;
