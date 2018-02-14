import React from 'react';
// import PropTypes from 'prop-types';


class Food extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleFoodCounter = this.handleFoodCounter.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.state = {
      foodLevel: 10,
    };
  }
  handleStart() {
    this.setStart = setInterval(() =>
      this.handleFoodCounter(),
    1000
    );
  }

  handleFoodCounter(){
    this.setState({ foodLevel: this.state.foodLevel -1});
    if(this.state.foodLevel === 0) {
      clearInterval(this.setStart);
    }
  }

  render(){
    return (
      <div>
        <span>{(this.state.foodLevel === 0)? 'Died' : this.state.foodLevel}</span>
        <button onClick={this.handleStart}>Start</button>
      </div>
    );
  }
}

export default Food;
