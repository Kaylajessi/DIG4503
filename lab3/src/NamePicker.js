import React from 'react';
import HomePage from "./HomePage.js";

class NamePicker extends React.Component {

    constructor(props){

        super(props)
        this.state={}
        this.submit=this.submit.bind(this)
    }

    submit(event) {

        event.preventDefault()
        this.setState({name: event.target[0].value})
        }

    render(){

        return(
        <div>
        <HomePage firstName={this.state.name}></HomePage>
        <form onSubmit={this.submit}>
        <label for="firstName">First Name: </label>
        <input type="text" name="firstName" id="firstName"></input>
        <input type="submit" value="Submit"></input>
        </form>
        </div>
        )
    }
}





export default NamePicker;