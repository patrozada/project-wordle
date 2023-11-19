import React from 'react';
import PropTypes from 'prop-types';
import Guess from '../Guess';

function GuessList({ boardStatus }) {
  const guessAttempts = Object.values(boardStatus).map(guess => guess.guess);
  const guessValidation = Object.values(boardStatus).map(guess => guess.status);
  return <div className='guess-results'>
  {guessAttempts.map((attempt, i) => <Guess key={Math.random()} guess={attempt} guessValidation={guessValidation[i]}/>)}
  </div>;
}
Guess.propTypes = {
  boardStatus: PropTypes.arrayOf(PropTypes.shape({
    guess: PropTypes.string, 
    status: PropTypes.arrayOf(PropTypes.string)
  })).isRequired,
}
export default GuessList;
