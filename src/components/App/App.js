import React from 'react';

import Game from '../Game';
import Header from '../Header';
import GuessList from '../GuessList';


function App() {
  const [guessList, setGuessList] = React.useState([]);
  const [guessValidation, setGuessValidation] = React.useState([])
  const addGuessToList = newGuess => {
    const nextGuessList = [...guessList];
    nextGuessList.push(newGuess);
    setGuessList(nextGuessList)
  }
  const addToGuessValidation = validatedGuess => {
    const validationArr = Object.values(validatedGuess).map(item => item.status);
    const nextGuessValidation = [...guessValidation];
    nextGuessValidation.push(validationArr);
    console.log({validationArr, nextGuessValidation})
    setGuessValidation(nextGuessValidation)
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <GuessList guessList={guessList} guessValidation={guessValidation}/>
        <Game addGuessToList={addGuessToList} addToGuessValidation={addToGuessValidation}/>
      </div>
    </div>
  );
}

export default App;
