import {Component} from "react"
import {getLocalStorageData, setLocalStorageItem} from "../utils/storage";

class CardClassFormShared extends Component {

    initialState = {description:""}

    constructor() {
        super();
        this.state = this.initialState

        this.handleDescriptionChange = this.handleDescriptionCallback.bind(this)
    }

    handleDescriptionCallback = event => {
        this.setState( (prevState) => {return {...prevState, description: event.target.value}});
    }

    handleSubmit = async event => {
        event.preventDefault();
        console.log("Local storage data: ", getLocalStorageData())
        console.log('State on submission: ', this.state);
        setLocalStorageItem(this.state.name + "_" + this.state.lastname, {
            name:this.state.name,
            lastname:this.state.lastname,
            description: this.state.description
        })
        this.props.callback && this.props.callback()
    }

    render() {
        return <form>
            <textarea id={"pc-description"} placeholder={"Inserisci una nuova descrizione"} value={this.state.description} onChange={this.handleDescriptionChange}/>
            <input type="submit" value="Submit" />
        </form>
    }
}

export default CardClassFormShared