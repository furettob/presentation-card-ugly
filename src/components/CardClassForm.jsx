import React from "react"
import {getLocalStorageData, setLocalStorageItem} from "../utils/storage";

class CardClassForm extends React.Component {
    initialState = {description:"", skill:"",name:"",lastname:""}

    constructor(props) {
        super(props);
        this.state = {...this.initialState};

        this.handleDescriptionChange = this.handleDescriptionCallback.bind(this)
        this.handleSkillChange = this.handleSkillCallback.bind(this)
        this.handleNameChange = this.handleNameCallback.bind(this)
        this.handleLastnameChange = this.handleLastnameCallback.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleDescriptionCallback(event) {
        this.setState( (prevState) => {return {...prevState, description: event.target.value}});
    }
    handleSkillCallback(event) {
        this.setState( (prevState) => {return {...prevState, skill: event.target.value}});
    }
    handleNameCallback(event) {
        this.setState( (prevState) => {return {...prevState, name: event.target.value}});
    }
    handleLastnameCallback(event) {
        this.setState( (prevState) => {return {...prevState, lastname: event.target.value}});
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log("Local storage data: ", getLocalStorageData())
        console.log('State on submission: ', this.state);
        setLocalStorageItem(this.state.name + "_" + this.state.lastname, {
            name:this.state.name,
            lastname:this.state.lastname,
            skill:this.state.skill,
            description: this.state.description
        })
        this.props.callback && this.props.callback()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Nome:
                        <input value={this.state.name} onChange={this.handleNameChange} placeholder={"Nome"} />
                    </label>
                    <label>
                        Cognome:
                        <input value={this.state.lastname} onChange={this.handleLastnameChange} placeholder={"Cognome"} />
                    </label>
                </div>
                <label>
                    Description:
                    <textarea value={this.state.description} onChange={this.handleDescriptionChange} placeholder={"Inserisci una descrizione"}/>
                </label>
                <label>
                    Skill:
                    <input value={this.state.skill} onChange={this.handleSkillChange} placeholder={"Scegli una skill"} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CardClassForm