import { Component } from "react";

import TagClass from "./TagClass";
import TagSkill from "./TagSkill";
import Area from "./Area";

class Card extends Component {
  constructor(props) {
    super(props)
    console.log("Building a card!!");
  }

  render() {
    return (
      <div key={this.props.elem.id}>
        <Area>
          <div>
            <img
              src={"./img/" + this.props.elem.avatar}
              width="60px"
              alt={this.props.elem.name}
            />
            <h3>
              {this.props.elem.name} {this.props.elem.lastname}
            </h3>
          </div>
          <div>
            {this.props.elem.jobPosition} @ {this.props.elem.company}
          </div>
          <div>{this.props.elem.description}</div>
        </Area>

        <Area title="Skills">
            {this.props.elem.skills.map((skill, index) => {
                console.log('skill' , skill);
              return (
                  <TagSkill key={index}
                            name={skill.name}
                            level={skill.level}
                  />
              );
            })}
        </Area>


        <Area title="Favourites">
         
            {Object.keys(this.props.elem.favourites).map((favName, index) => {
              console.log('favName' , favName);
              return (
                <TagClass key={index}
                  name={this.props.elem.favourites[favName].name}
                  icon={this.props.elem.favourites[favName].icon}
                />
              );
            })}
         
        </Area>

        <Area title="Links">
          <div>
            {this.props.elem.links.map((link, index) => {
              return (
                <span key={link.name + "_" + index}>
                  <a href={link.url}>{link.name}</a>{" "}
                </span>
              );
            })}
          </div>
        </Area>
      </div>
    );
  }
}

export default Card;
