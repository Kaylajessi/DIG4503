import React from "react";
import axios from "axios";

class Delete extends React.Component{
    constructor(){
        this.state = {ISBN:""}
    }

    render(){
        return(<div>
            <input type="text" onChange={e=>this.update(e, "ISBN")}>ISBN</input>          
            <button onClick={e=>this.delete()}>Delete Book!</button>
        </div>)
    }

    update=(e,key)=>{
        const value = e.target.value
        this.setState({[key]: value})
        }

    delete=()=>{
        axios.delete("localhost:45030/books/" + this.state.ISBN)
    }

} 

export default Delete;