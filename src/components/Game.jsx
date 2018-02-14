import React from 'react';
import Level from './Level';
import Buttons from './Buttons';
import GotchiGIF from './../assets/images/gotchi.gif';


function Game() {
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
        <Buttons />
      </div>
      <div className="levelDiv">
        <Level />
      </div>
    </div>
  );
}

export default Game;
