import React from "react";
import axios from "axios";

class Post extends React.Component{
    constructor(){
        this.state = {beds:0, price:0}
    }

    render(){
        return(<div>
            <input type="number" onChange={e=>this.update(e, "beds")}>Beds</input>
            <input type="number" onChange={e=>this.update(e, "price")}>Max Price</input>       
            <button onClick={e=>this.post()}>Search Listings!</button>
            <p>{this.state.results}</p>
        </div>)
    }

    update=(e,key)=>{
        const value = e.target.value
        this.setState({[key]: value})
        }

    post=()=>{
        axios.post("localhost:45030/name/search/", this.state).then(res=>this.setState({results:res.data}))
    }

} 

export default Post;