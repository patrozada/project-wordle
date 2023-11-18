import React from 'react';
import {range} from '../../utils';

function Guess({guess}) {
  const letters = range(0,5)
  return <p className='guess'>
    {letters.map((letter, index) => <span key={index} className="cell">{guess && guess[index]}</span>)}
  </p>;
}

export default Guess;
