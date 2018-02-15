import React from 'react';
import PropTypes from 'prop-types';

function Bord(props) {
  return (
    <div className="numberCounterDisplay">
      <style jsx >{`
          .numberCounterDisplay{
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
      <span className="bordNumber">{props.bordLevel}</span>
    </div>
  );
}
Bord.propTypes = {
  bordLevel: PropTypes.number
};

export default Bord;
