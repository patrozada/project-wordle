import React from 'react';
import Guess from '../Guess';

function GuessList({boardStatus}) {
  const guessAttempts = Object.values(boardStatus).map(guess => guess.guess);
  const guessValidation = Object.values(boardStatus).map(guess => guess.status);
  console.log({guessValidation})
  return <div className='guess-results'>
  {guessAttempts.map((attempt, i) => <Guess key={Math.random()} guess={attempt} guessValidation={guessValidation[i]}/>)}
  </div>;
}

export default GuessList;
