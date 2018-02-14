import React from 'react';

class Sick extends React.Component {

  constructor(props) {
    super(props);
    this.handleSickCounter = this.handleSickCounter.bind(this);
    this.handleSickStart = this.handleSickStart.bind(this);
    this.state = {
      sickLevel: 0,
    };
  }

  handleSickStart() {
    this.setSickStart = setInterval(() =>
      this.handleSickCounter(),
    1000
    );
  }

  handleSickCounter(){
    this.setState({ sickLevel: this.state.sickLevel +1});
    if(this.state.sickLevel === 10) {
      clearInterval(this.setSickStart);
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
            .sickNumber {
              font-size: 30px;
              font-family: monospace;
            }
         `}</style>
        <span>Sick Level</span>
        <br />
        <span className="sickNumber">{(this.state.sickLevel === 10)? 'Died' : this.state.sickLevel}</span>
        <button onClick={this.handleSickStart}>Start</button>
      </div>
    );
  }
}

export default Sick;
