import React from "react";
import axios from "axios";

class Get extends React.Component{
    constructor(){
        this.state = {ISBN:""}
    }

    render(){
        return(<div>
            <input type="text" onChange={e=>this.update(e, "name")}>Name</input>          
            <button onClick={e=>this.get()}>Get Listing!</button>
            <p>{this.state.results}</p>
        </div>)
    }

    update=(e,key)=>{
        const value = e.target.value
        this.setState({[key]: value})
        }

    get=()=>{
        axios.get("localhost:45030/name/" + this.state.name).then(res=>this.setState({results:res.data}))
    }

} 

export default Get;