import React from 'react';
import PropTypes from 'prop-types';
import GuessForm from './GuessForm';

function Game({ addGuessToList }) {
  return <GuessForm addGuessToList={addGuessToList}/>;
}
Game.propTypes = {
  addGuessToList: PropTypes.func.isRequired,
}
export default Game;
