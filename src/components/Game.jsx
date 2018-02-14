import React from 'react';
import Level from './Level';
import GotchiGIF from './../assets/images/gotchi.gif';


function Game() {
  return (
    <div>
      Game
      <img src={GotchiGIF} />
      <Level />
    </div>
  );
}

export default Game;
