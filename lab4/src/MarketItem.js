import React from 'react';

class MarketItem extends React.Component {
  render () {

    return (
      <div><p>Item {this.props.count}</p></div>
    );
  }
}
export default MarketItem;