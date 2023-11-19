import React from 'react';
import {checkGuess} from '../../../game-helpers';

function GuessForm({addGuessToList, answer, addToGuessValidation}) {
  const [guess, setGuess] = React.useState('');
  const handleInputChange = value => {
    const uppercasedValue = !!value.length && value.toUpperCase();
    setGuess(uppercasedValue);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addGuessToList(guess);
    addToGuessValidation(checkGuess(guess, answer))
    setGuess('');
  }
  return <form className="guess-input-wrapper" onSubmit={(e) => handleFormSubmit(e)}>
    <label htmlFor='guess-input'>Enter guess</label>
    <input id='guess-input' type="text" value={guess} onChange={e => handleInputChange(e.target.value)} maxLength={5} minLength={5} required={true}  pattern="[a-zA-Z]{5}"/>
  </form>;
}

export default GuessForm;
