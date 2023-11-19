import React from 'react';

import Game from '../Game';
import Header from '../Header';
import GuessList from '../GuessList';
import {range, sample} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function App() {
  const createInitialState = numberOfAttempts => {
    const guessAttempts = range(0, numberOfAttempts);
    return guessAttempts.map(attempt => ({[attempt]:{
      guess: '',
      status: [],
    }}));
  };

  const [boardStatus, setBoardStatus] = React.useState(createInitialState(NUM_OF_GUESSES_ALLOWED));
  const [guessList, setGuessList] = React.useState([]);

  const addGuessToList = newGuess => {
    const nextGuessList = [...guessList];
    nextGuessList.push(newGuess);
    setGuessList(nextGuessList);
    const validatedGuess = checkGuess(newGuess, answer);
    const sample = nextGuessList.length - 1;
    const nextBoardStatus = {...boardStatus, [sample]: {guess: newGuess, status: Object.values(validatedGuess).map(item => item.status)}}
    setBoardStatus(nextBoardStatus);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <GuessList boardStatus={boardStatus}/>
        <Game addGuessToList={addGuessToList} />
      </div>
    </div>
  );
}

export default App;
