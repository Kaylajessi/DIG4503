import React from "react";
import axios from "axios";

class Post extends React.Component{
    constructor(){
        this.state = {title:"", author:"", results:""}
    }

    render(){
        return(<div>
            <input type="text" onChange={e=>this.update(e, "title")}>Title</input>
            <input type="text" onChange={e=>this.update(e, "author")}>Author</input>       
            <button onClick={e=>this.post()}>Search Book!</button>
            <p>{this.state.results}</p>
        </div>)
    }

    update=(e,key)=>{
        const value = e.target.value
        this.setState({[key]: value})
        }

    post=()=>{
        axios.post("localhost:45030/books/search/", this.state).then(res=>this.setState({results:res.data}))
    }

} 

export default Post;