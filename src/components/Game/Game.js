import React from 'react';
import GuessForm from './GuessForm';

function Game({addGuessToList}) {
  return <GuessForm addGuessToList={addGuessToList}/>;
}

export default Game;
