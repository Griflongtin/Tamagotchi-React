import React from 'react';
import Food from './Food';
import Sick from './Sick';
import Bord from './Bord';

function Level() {
  return (
    <div className="numberCounterDisplay">
      <style jsx >{`
          .numberCounterDisplay{
            background-color: red;
            width: 500px;
            height: 80px;
            display: flex;
            justify-content: space-around;
          }
       `}</style>
      <Food />
      <Sick />
      <Bord />
    </div>
  );
}

export default Level;
