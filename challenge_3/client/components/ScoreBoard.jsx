import React, {Component} from 'react';

const ScoreBoard = function(props) {
  if (props.score.frame === 2) {
    return (
      <div>
        <div>Bowl: {props.score.firstBowl}</div>
        <div>Frame: {props.score.frame}</div>
        <div>Total Score: {props.score.score}</div>
      </div>
    )
  } else {
    return (
      <div>
        <div>Bowl: {props.score.secondBowl}</div>
        <div>Frame: {props.score.frame}</div>
        <div>Total Score: {props.score.score}</div>
      </div>
    )
  }
}

export default ScoreBoard;
