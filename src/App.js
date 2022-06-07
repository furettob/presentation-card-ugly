import "./styles.css";
import Card from "./components/Card";
import initialData from "./utils/data.json";
import Area from "./components/Area";
import CardClassForm from "./components/CardClassForm";
import CardFunctionalForm from "./components/CardFunctionalForm";
import CardFormikForm from "./components/CardFormikForm";
import CardClassFormShared from "./components/CardClassFormShared"
import CardFunctionalFormShared from "./components/CardFunctionalFormShared"
import {getLocalStorageData} from "./utils/storage";

import {useState} from "react"
import TagFunction from "./components/TagFunction";

export default function App() {
    const mixData = () => {
        let newData = initialData
        const localStorageData = getLocalStorageData()
        for (const id in localStorageData) {
            const i = newData.findIndex( item => item.id === id)
            if (i > -1) {
                newData[i] = {...newData[i], ...localStorageData[id]}
            }
        }
        return newData
    }

    let [data, setData] = useState(mixData())

    const dataUpdateCallback = () => {
        const d = mixData()
        setData([...d])
    }

    const skillArray = data.reduce((prevSkills, currElem) => prevSkills.concat(currElem.skills.map(
        skill => skill.name
    )), [])

    const [selectedSkill, setSelectedSkill] = useState(null)

    const skillSet = new Set(skillArray)

    const callbackSelectedSkill = (name) => {
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
                    Questi professionisti hanno lavorato insieme su più di {
                        data.reduce(
                            (prevElem, currElem) => {
                                return prevElem + currElem.shippedProject
                            },
                            0
                        )
                } progetti.
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

            <Area title={"Modifica info"}>
                <CardFormikForm callback={dataUpdateCallback}/>
            </Area>

            <Area title={"Cards"}>
            <div className="pc-card-container">
                {
                    data.filter(elem => {
                    var isEmph = false;

                    for (let i in elem.skills) {
                        if (elem.skills[i].name === selectedSkill) {
                            isEmph = true
                        }
                    }

                    return isEmph
                } ).sort(
                        (elem1, elem2) => {
                            const x = (elem2.shippedProject || 0) - (elem1.shippedProject || 0)
                            return x}
                    ).map((elem) => {
                    return <Card key={elem.id} elem={elem} selectedSkill={selectedSkill}/>;
                })}
                
                {
                    data.filter((elem) => {
                    var isEmph = false;

                    for (let i in elem.skills) {
                        if (elem.skills[i].name === selectedSkill) {
                            isEmph = true
                        }
                    }

                    return !isEmph
                } ).map(elem => {
                    return <Card key={elem.id} elem={elem} selectedSkill={selectedSkill}/>;
                })}
            </div>
            </Area>
        </div>
    );
}
