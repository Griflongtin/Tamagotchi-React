import React from 'react';
import PropTypes from 'prop-types';

function Food(props) {
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
      <span className="foodNumber">{props.foodLevel}</span>
    </div>
  );
}
Food.propTypes = {
  foodLevel: PropTypes.number
};

export default Food;
