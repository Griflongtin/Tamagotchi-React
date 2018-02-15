import React from 'react';
import PropTypes from 'prop-types';

function Sick(props) {
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
      <span className="sickNumber">{props.sickLevel}</span>
    </div>
  );
}
Sick.propTypes = {
  sickLevel: PropTypes.number
};

export default Sick;
