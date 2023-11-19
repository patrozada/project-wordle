import React from 'react';
import PropTypes from 'prop-types';
import {range} from '../../utils';

function Guess({guess, guessValidation}) {
  const letters = range(0,5);
  return <p className='guess'>
    {letters.map((letter) => <span key={letter} className={ guessValidation ? `cell ${guessValidation[letter]}` : 'cell'}>{guess ? guess[letter] : null}</span>)}
  </p>;
}
Guess.propTypes = {
  guess: PropTypes.string,
  guessValidation: PropTypes.arrayOf(PropTypes.string)
}
Guess.defaultProps = {
  guess: '',
  guessValidation: []
}
export default Guess;
