import React from 'react';

class Bord extends React.Component {

  constructor(props) {
    super(props);
    this.handleBordCounter = this.handleBordCounter.bind(this);
    this.handleBordStart = this.handleBordStart.bind(this);
    this.state = {
      bordLevel: 0,
    };
  }

  handleBordStart() {
    this.setBordStart = setInterval(() =>
      this.handleBordCounter(),
    1000
    );
  }

  handleBordCounter(){
    this.setState({ bordLevel: this.state.bordLevel +1});
    if(this.state.bordLevel === 10) {
      clearInterval(this.setBordStart);
    }
  }

  render(){
    return (
      <div className="numberCounterDisplay">
        <style jsx >{`
            .numberCounterDisplay {
              text-align: center;
              background-color: pink;
              margin: 10px;
              padding: 5px 10px;
            }
            .bordNumber {
              font-size: 30px;
              font-family: monospace;
            }
         `}</style>
        <span>Bord Level</span>
        <br />
        <span className="bordNumber">{(this.state.bordLevel === 10)? 'Died' : this.state.bordLevel}</span>
        <button onClick={this.handleBordStart}>Start</button>
      </div>
    );
  }
}

export default Bord;
