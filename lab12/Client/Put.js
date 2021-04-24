import React from "react";
import axios from "axios";

class Put extends React.Component{
    constructor(){
        this.state = {ISBN:"", title:"", author:"", description:""}
    }

    render(){
        return(<div>
            <input type="text" onChange={e=>this.update(e, "ISBN")}>ISBN</input>
            <input type="text" onChange={e=>this.update(e, "title")}>Title</input>
            <input type="text" onChange={e=>this.update(e, "author")}>Author</input>
            <input type="text" onChange={e=>this.update(e, "desccription")}>Description</input>            
            <button onClick={e=>this.put()}>Update Book!</button>
        </div>)
    }

    update=(e,key)=>{
        const value = e.target.value
        this.setState({[key]: value})
        }

    put=()=>{
        axios.put("localhost:45030/books/" + this.state.ISBN, this.state)
    }

} 

export default Put;