import React from 'react';
import Food from './Food';
import Sick from './Sick';
import Bord from './Bord';
import PropTypes from 'prop-types';


function Level(props) {
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
      <Food foodLevel={props.foodLevel}/>
      <Sick sickLevel={props.sickLevel}/>
      <Bord bordLevel={props.bordLevel}/>
    </div>
  );
}
Level.propTypes = {
  foodLevel: PropTypes.number,
  sickLevel: PropTypes.number,
  bordLevel: PropTypes.number
};

export default Level;
