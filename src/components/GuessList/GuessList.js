import React from 'react';
import Guess from '../Guess';
import {range} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function GuessList({guessList, guessValidation}) {
  const guessAttempts = range(0, NUM_OF_GUESSES_ALLOWED)
  return <div className='guess-results'>
  {guessAttempts.map((attempt) => <Guess key={Math.random()} guess={guessList[attempt] ? guessList[attempt] : ''} guessValidation={guessValidation[attempt]&&guessValidation[attempt]}/>)}
  </div>;
}

export default GuessList;
