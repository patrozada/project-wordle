import React from 'react';
import Guess from '../Guess';
import {range} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function GuessList({guessList}) {
  const guessAttempts = range(0, NUM_OF_GUESSES_ALLOWED)
  return <div className='guess-results'>
  {guessAttempts.map((attempt, i ) => <Guess key={Math.random()} guess={guessList[i] &&guessList[i]}/>)}
  </div>;
}

export default GuessList;
