import { Component } from "react";

import TagClass from "./TagClass";
import TagSkill from "./TagSkill";
import Area from "./Area";
import Header from "./Header";
import Link from "./Link";
import Grid from "./Grid";

class Card extends Component {
  constructor(props) {
    super(props)
  }

  getEmph = () => {
      var isEmph = false;

      for (let i in this.props.elem.skills) {
            if (this.props.elem.skills[i].name === this.props.selectedSkill) {
                isEmph = true
            }
      }

      return isEmph
  }

  render() {
    return (
      <div className={"pc-card" + (this.getEmph() ? " pc-card--skill_emp" : " ")}
      >
          <Header
              name={this.props.elem.name}
              lastname={this.props.elem.lastname}
              avatar={this.props.elem.avatar}
              jobPosition={this.props.elem.jobPosition}
              company={this.props.elem.company}
              isEmph={this.getEmph()}
          />

          <Area title="About">
              {this.props.elem.description}
          </Area>

        <Area title="Skills">
            <Grid>
                {this.props.elem.skills.map((skill, index) => {
                  return (
                      <TagSkill key={index}
                                name={skill.name}
                                level={skill.level}
                                selected={skill.name === this.props.selectedSkill  }
                      />
                  );
                })}
            </Grid>
        </Area>


        <Area title="Favourites">
         
            {Object.keys(this.props.elem.favourites).map((favName, index) => {
              return (
                <TagClass key={index}
                  name={this.props.elem.favourites[favName].name}
                  icon={this.props.elem.favourites[favName].icon}
                />
              );
            })}
         
        </Area>

        <Area title="Links">
            {this.props.elem.links.map((link, index) => {
                return <Link key={link.name + "_" + index} link={link} />;
            })}
        </Area>
      </div>
    );
  }
}

export default Card;
