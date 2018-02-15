import React from 'react';
import Level from './Level';
import Buttons from './Buttons';
import GotchiGIF from './../assets/images/gotchi.gif';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodLevel: 10,
      sickLevel: 0,
      bordLevel: 0
    };
    this.FeedButtonPass = this.FeedButtonPass.bind(this);
    this.MedsButtonPass = this.MedsButtonPass.bind(this);
    this.PlayButtonPass = this.PlayButtonPass.bind(this);
    this.handleFoodCounter = this.handleFoodCounter.bind(this);
    this.handleSickCounter = this.handleSickCounter.bind(this);
    this.handleBordCounter = this.handleBordCounter.bind(this);
    this.handleStartGame = this.handleStartGame.bind(this);
  }

  componentDidMount(){
    setTimeout(this.handleStartGame, 3000);
  }

  FeedButtonPass(){
    if(this.state.foodLevel <= 9){
      this.setState({ foodLevel: this.state.foodLevel +1});
    } else if(this.state.foodLevel >= 10) {
      this.setState({ foodLevel: 10});
    }
  }

  MedsButtonPass(){
    if(this.state.sickLevel >= 1){
      this.setState({ sickLevel: this.state.sickLevel -1});
    } else if(this.state.sickLevel <= 0) {
      this.setState({ sickLevel: 0});
    }
  }

  PlayButtonPass(){
    if(this.state.bordLevel >= 1){
      this.setState({ bordLevel: this.state.bordLevel -1});
    } else if(this.state.bordLevel <= 0) {
      this.setState({ bordLevel: 0});
    }
  }

  handleStartGame() {
    this.setFoodGame = setInterval(() =>
      this.handleFoodCounter(),
    1000
    );
    this.setSickGame = setInterval(() =>
      this.handleSickCounter(),
    1000
    );
    this.setBordGame = setInterval(() =>
      this.handleBordCounter(),
    1000
    );
  }

  handleFoodCounter(){
    this.setState({ foodLevel: this.state.foodLevel -1});
    if(this.state.foodLevel === 0) {
      clearInterval(this.setFoodGame);
    }
  }

  handleSickCounter(){
    this.setState({ sickLevel: this.state.sickLevel +1});
    if(this.state.sickLevel === 10) {
      clearInterval(this.setSickGame);
    }
  }

  handleBordCounter(){
    this.setState({ bordLevel: this.state.bordLevel +1});
    if(this.state.bordLevel === 10) {
      clearInterval(this.setBordGame);
    }
  }

  render() {
    return (
      <div className="gameBody">
        <style jsx >{`
            .gameBody{
              width: 100%;
              height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .GIFDiv {
              position: relative;
            }
            .levelDiv {
              position: relative;
              left: -20px;
            }
            `}</style>
        <div className="GIFDiv">
          <img src={GotchiGIF} />
          <Buttons passFeedButton={this.FeedButtonPass} passMedsButton={this.MedsButtonPass} passPlayButton={this.PlayButtonPass} />
        </div>
        <div className="levelDiv">
          <Level foodLevel={this.state.foodLevel} sickLevel={this.state.sickLevel} bordLevel={this.state.bordLevel} />
        </div>
      </div>
    );
  }
}

export default Game;
