import React from 'react';

import Game from '../Game';
import Header from '../Header';
import GuessList from '../GuessList';
import Banner from '../Banner'
import {range, sample} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';


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
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [isGameOver, setIsGameOver] = React.useState({gameEnded: false,
  userWon: false});

  const addGuessToList = newGuess => {
    const nextGuessList = [...guessList];
    nextGuessList.push(newGuess);
    setGuessList(nextGuessList);
    const validatedGuess = checkGuess(newGuess, answer);
    const sample = nextGuessList.length - 1;
    const nextBoardStatus = {
      ...boardStatus, 
      [sample]: { 
        guess: newGuess, 
        status: Object.values(validatedGuess).map(item => item.status)
      },
    };
    setBoardStatus(nextBoardStatus);
    const isUserOutOfAttempts = nextGuessList.length === NUM_OF_GUESSES_ALLOWED;
    const isGuessCorrect = newGuess === answer;
    if (isGuessCorrect) {
      const newIsGameOver = {
        gameEnded: true,
        userWon: true,
      }
      setIsGameOver(newIsGameOver);
    } 
    if (isUserOutOfAttempts && !isGuessCorrect) {
      const newIsGameOver = {
        gameEnded: true,
        userWon: false,
      }
      setIsGameOver(newIsGameOver);
    }
  };


  const resetGame = () => {
    setGuessList([]);
    setBoardStatus(createInitialState(NUM_OF_GUESSES_ALLOWED));
    setAnswer(sample(WORDS));
    setIsGameOver({gameEnded: false,
      userWon: false})
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <GuessList boardStatus={boardStatus}/>
        <Game addGuessToList={addGuessToList} isGameOver={isGameOver.gameEnded} />
        {isGameOver.gameEnded ? 
          <Banner 
            userWon={isGameOver.userWon} 
            answer={answer} 
            attempts={guessList.length} 
            resetGame={resetGame}
          /> : null}
      </div>
    </div>
  );
}

export default App;
