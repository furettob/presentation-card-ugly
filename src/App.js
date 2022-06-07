import "./styles.css";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import data from "./utils/data.json";
import Area from "./components/Area";
import TagClass from "./components/TagClass";

import {useState} from "react"
import TagFunction from "./components/TagFunction";
import TagFilter from "./components/TagFilter";


export default function App() {
    const skillArray = data.reduce((prevSkills, currElem) => prevSkills.concat(currElem.skills.map(
        (skill, index) => skill.name
    )), [])

    const [selectedSkill, setSelectedSkill] = useState(null)
    const skillSet = new Set(skillArray)

    const [selectedFilter, setSelectedFilter] = useState(null)

    const callbackSelectedSkill = (name) => {
        console.log("App says: you click on ", name)
        setSelectedSkill(name)
    }

    const callbackSelectedFilter = (filterName) => {
        console.log("App says: you click on ", filterName)
        setSelectedFilter(filterName)
    }


    return (
        <div className="App">
            <h1>Let's get to know each other (ugly version v4)</h1>
            <h2>We can build a card to present ourselves</h2>
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

            <Area title={"Show"}>
                   <TagFilter selected={0 === selectedFilter || null === selectedFilter} clickCallback={ (filterName) => { callbackSelectedFilter(filterName) }} value={0} size={"big"} icon="fa-search" filterName = {'Show All'}/>
                   <TagFilter selected={1 === selectedFilter} clickCallback={ (filterName) => { callbackSelectedFilter(filterName) }} value={1} size={"big"} icon="fa-search" filterName = {'Show Competent'}/>
                   <TagFilter selected={2 === selectedFilter} clickCallback={ (filterName) => { callbackSelectedFilter(filterName) }} value={2} size={"big"} icon="fa-search" filterName = {'Show Others'}/>
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
                    if(selectedFilter != 2){
                        return <Card key={elem.id} elem={elem} selectedSkill={selectedSkill}/>;
                    }
               })
                
                }
                        
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
                    if(selectedFilter != 1){
                        return <Card key={elem.id} elem={elem} selectedSkill={selectedSkill}/>;
                    }
                })}
            </div>
        </div>
    );
}

for (var index in data) {
    //console.log(data[index]);
} 
