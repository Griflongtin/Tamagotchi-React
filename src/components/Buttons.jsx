import React from 'react';
import FeedButton from './FeedButton';
import MedsButton from './MedsButton';
import PlayButton from './PlayButton';
import PropTypes from 'prop-types';


function Buttons(props) {
  function FeedButtonPass(){
    props.passFeedButton();
  }
  function MedsButtonPass(){
    props.passMedsButton();
  }
  function PlayButtonPass(){
    props.passPlayButton();
  }
  return (
    <div className="buttonsDiv">
      <style jsx >{`
          .buttonsDiv{
            width: 500px;
          }
       `}</style>
      <FeedButton onClickFeedButton={FeedButtonPass}/>
      <MedsButton onClickMedsButton={MedsButtonPass}/>
      <PlayButton onClickPlayButton={PlayButtonPass}/>
    </div>
  );
}

Buttons.propTypes = {
  passFeedButton: PropTypes.func,
  passMedsButton: PropTypes.func,
  passPlayButton: PropTypes.func
};


export default Buttons;
