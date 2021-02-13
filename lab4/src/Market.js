import MarketItem from "./MarketItem.js";
import React from 'react';

class Market extends React.Component{

    constructor(props){
        super(props)
        this.state={items:[]}
    }

    render(){
        console.log (this.state)
    return (
      <div >
        {
        this.state.items.map(renderMarketItem)
        }
        <button onClick={()=>this.add()}>Click me</button>
      </div>
    );
    }

    add() {
        var variables = this.state.items
        variables.push(<MarketItem count={variables.length} key={variables.length}></MarketItem>)
        this.setState({items:variables})
    }
  }

function renderMarketItem(Item, index){
    return(
        Item 
    );
}


  
  export default Market;
