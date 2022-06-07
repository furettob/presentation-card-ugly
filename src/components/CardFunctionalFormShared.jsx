import {useState} from "react"
import {getLocalStorageData, setLocalStorageItem} from "../utils/storage";

function CardFunctionalForm({callback}) {
    const initialState = {description:"", skill:"",name:"",lastname:""}

    const [name, setName] = useState(initialState.name)
    const [lastname, setLastname] = useState(initialState.lastname)
    const [skill, setSkill] = useState(initialState.skill)
    const [description, setDescription] = useState(initialState.description)

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }
    const handleSkillChange = (event) => {
        setSkill(event.target.value);
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleLastnameChange = (event) => {
        setLastname(event.target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault();
        console.log("Local storage data: ", getLocalStorageData())
        setLocalStorageItem(name + "_" + lastname, {
            name:name,
            lastname:lastname,
            skill:skill,
            description: description
        })
        callback && typeof callback === "function" && callback()
    }

     return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome:
                        <input value={name} onChange={handleNameChange} placeholder={"Nome"} />
                    </label>
                    <label>
                        Cognome:
                        <input value={lastname} onChange={handleLastnameChange} placeholder={"Cognome"} />
                    </label>
                </div>
                <label>
                    Description:
                    <textarea value={description} onChange={handleDescriptionChange} placeholder={"Inserisci una descrizione"}/>
                </label>
                <label>
                    Skill:
                    <input value={skill} onChange={handleSkillChange} placeholder={"Scegli una skill"} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
}

export default CardFunctionalForm