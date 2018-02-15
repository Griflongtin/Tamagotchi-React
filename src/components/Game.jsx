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
      bordLevel: 10
    };
    this.FeedButtonPass = this.FeedButtonPass.bind(this);
    this.MedsButtonPass = this.MedsButtonPass.bind(this);
    this.PlayButtonPass = this.PlayButtonPass.bind(this);
  }
  FeedButtonPass(){
    this.setState({ foodLevel: this.state.foodLevel +1});
  }
  MedsButtonPass(){
    this.setState({ sickLevel: this.state.sickLevel -1});
  }
  PlayButtonPass(){
    this.setState({ bordLevel: this.state.bordLevel -1});
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
          <Level />
        </div>
      </div>
    );
  }
}

export default Game;
