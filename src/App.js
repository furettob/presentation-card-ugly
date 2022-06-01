import "./styles.css";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import data from "./utils/data.json";
import Area from "./components/Area";
import TagClass from "./components/TagClass";

import {useState} from "react"
import TagFunction from "./components/TagFunction";

export default function App() {
    const skillArray = data.reduce((prevSkills, currElem) => prevSkills.concat(currElem.skills.map(
        (skill, index) => skill.name
    )), [])

    const [selectedSkill, setSelectedSkill] = useState(null)

    const skillSet = new Set(skillArray)

    const callbackSelectedSkill = (name) => {
        console.log("App says: you click on ", name)
        setSelectedSkill(name)
    }

    return (
        <div className="App">
            <h1>Let's get to know each other (ugly version v4)</h1>


            <Area title={"Our team"}>
                <p>
                Il nostro team giovane e dinamico è composto da: {"       "}
                {
                    data.map( (elem, index, arr) => {
                        return <span key={elem.id}>{elem.name}{
                            index < arr.length - 1 ? index === arr.length -2 ? " e " : "," : "."
                        } </span>
                    })
                }
                </p>
                <p>
                    Questi professionisti hanno lavorato su più di {

                } progetti
                </p>
            </Area>

            {/* example of imperative approach <CardContainer />*/}
            <Area title={"Overall skills"}>
                {Array.from(skillSet).map((skill, index) => {
                    return <TagFunction
                        key={index}
                        name={skill}
                        icon={"fa-light fa-atom"}
                        size={"big"}
                        clickCallback={ (name) => { callbackSelectedSkill(name) }}
                        selected={skill === selectedSkill}
                    />
                })}
            </Area>
            <div className="pc-card-container">
                {
                    data.filter((elem, index) => { 
                    var isEmph = false;

                    for (let i in elem.skills) {
                        if (elem.skills[i].name === selectedSkill) {
                            isEmph = true
                        }
                    }

                    return isEmph
                } ).map((elem, index) => {
                    return <Card key={elem.id} elem={elem} selectedSkill={selectedSkill}/>;
                })}
                
                {
                    data.filter((elem, index) => { 
                    var isEmph = false;

                    for (let i in elem.skills) {
                        if (elem.skills[i].name === selectedSkill) {
                            isEmph = true
                        }
                    }

                    return !isEmph
                } ).map((elem, index) => {
                    return <Card key={elem.id} elem={elem} selectedSkill={selectedSkill}/>;
                })}
            </div>
        </div>
    );
}

for (var index in data) {
    //console.log(data[index]);
} 
