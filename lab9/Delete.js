import React from "react";
import axios from "axios";

class Delete extends React.Component{
    constructor(){
        this.state = {name:""}
    }

    render(){
        return(<div>
            <input type="text" onChange={e=>this.update(e, "name")}>Name</input>          
            <button onClick={e=>this.delete()}>Delete Listing!</button>
        </div>)
    }

    update=(e,key)=>{
        const value = e.target.value
        this.setState({[key]: value})
        }

    delete=()=>{
        axios.delete("localhost:45030/name/" + this.state.name)
    }

} 

export default Delete;