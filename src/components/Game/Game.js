import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from './GuessForm';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({addGuessToList, addToGuessValidation}) {
  return <GuessForm addGuessToList={addGuessToList} answer={answer} addToGuessValidation={addToGuessValidation}/>;
}

export default Game;
