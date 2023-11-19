import React from 'react';
import {range} from '../../utils';

function Guess({guess, guessValidation}) {
  const letters = range(0,5)
  console.log({guessValidation})
  return <p className='guess'>
    {letters.map((letter) => <span key={letter} className={`cell ${guessValidation &&guessValidation[letter]}`}>{guess[letter] && guess[letter]}</span>)}
  </p>;
}

export default Guess;
