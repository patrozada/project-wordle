import React from 'react';

import Game from '../Game';
import Header from '../Header';
import GuessList from '../GuessList';


function App() {
  const [guessList, setGuessList] = React.useState([]);
  const addGuessToList = newGuest => {
    const nextGuessList = [...guessList];
    nextGuessList.push(newGuest);
    setGuessList(nextGuessList)
  }
 
  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <GuessList guessList={guessList}/>
        <Game addGuessToList={addGuessToList}/>
      </div>
    </div>
  );
}

export default App;
