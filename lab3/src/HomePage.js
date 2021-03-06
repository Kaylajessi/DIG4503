import React from 'react';
import FoodPicker from "./FoodPicker.js";

class HomePage extends React.Component {
  render () {

    return (
      <div>
      <p>Welcome {this.props.firstName},</p>
      <FoodPicker></FoodPicker>
      </div>
    );
  }
}

export default HomePage;