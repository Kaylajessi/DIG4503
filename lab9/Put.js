import React from "react";
import axios from "axios";

class Put extends React.Component{
    constructor(){
        this.state = {name:"", price:0, bedrooms:0, beds:0}
    }

    render(){
        return(<div>
            <input type="text" onChange={e=>this.update(e, "name")}>Name</input>
            <input type="number" onChange={e=>this.update(e, "price")}>Price</input>
            <input type="number" onChange={e=>this.update(e, "bedrooms")}>Bedrooms</input>
            <input type="number" onChange={e=>this.update(e, "beds")}>Beds</input>            
            <button onClick={e=>this.put()}>Create Lisitings!</button>
        </div>)
    }

    update=(e,key)=>{
        const value = e.target.value
        this.setState({[key]: value})
        }

    put=()=>{
        axios.put("localhost:45030/name/" + this.state.name, this.state)
    }

} 

export default Put;