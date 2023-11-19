import React from 'react';
import PropTypes from 'prop-types';
import GuessForm from './GuessForm';

function Game({ addGuessToList, isGameOver }) {
  return <GuessForm addGuessToList={addGuessToList} isGameOver={isGameOver}/>;
}
Game.propTypes = {
  addGuessToList: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired,
}
export default Game;
