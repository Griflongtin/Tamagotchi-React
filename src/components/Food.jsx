import React from 'react';


class Food extends React.Component {

  constructor(props) {
    super(props);
    this.handleFoodCounter = this.handleFoodCounter.bind(this);
    this.handleFoodStart = this.handleFoodStart.bind(this);
    this.state = {
      foodLevel: 10,
    };
  }

  handleFoodStart() {
    this.setStart = setInterval(() =>
      this.handleFoodCounter(),
    1000
    );
  }

  handleFoodCounter(){
    this.setState({ foodLevel: this.state.foodLevel -1});
    if(this.state.foodLevel === 0) {
      clearInterval(this.setFoodStart);
    }
  }

  render(){
    return (
      <div className="numberCounterDisplay">
        <style jsx >{`
            .numberCounterDisplay{
              text-align: center;
              background-color: pink;
              margin: 10px;
              padding: 5px 10px;
            }
            .foodNumber {
              font-size: 30px;
              font-family: monospace;
            }
         `}</style>
        <span>Food Level</span>
        <br />
        <span className="foodNumber">{(this.state.foodLevel === 0)? 'Died' : this.state.foodLevel}</span>
      </div>
    );
  }
}
// <button onClick={this.handleFoodStart}>Start</button>

export default Food;
