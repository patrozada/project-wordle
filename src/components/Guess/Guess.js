import React from 'react';
import {range} from '../../utils';

function Guess({guess, guessValidation}) {
  console.log({guessValidation})
  const letters = range(0,5);
  return <p className='guess'>
    {letters.map((letter) => <span key={letter} className={ guessValidation ? `cell ${guessValidation[letter]}` : 'cell'}>{guess ? guess[letter] : null}</span>)}
  </p>;
}

export default Guess;
