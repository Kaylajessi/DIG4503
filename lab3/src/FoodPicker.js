import React from 'react';

class FoodPicker extends React.Component {

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
        <p>your favorite food is {this.state.name}!</p>
        <form onSubmit={this.submit}>
        <label for="food">Favorite Food: </label>
        <input type="text" name="food" id="food"></input>
        <input type="submit" value="Submit"></input>
        </form>
        </div>
        )
    }
}





export default FoodPicker;