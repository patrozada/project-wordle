import React from 'react';

function GuessForm({addGuessToList}) {
  const [guess, setGuess] = React.useState('');
  const handleInputChange = value => {
    const uppercasedValue = !!value.length && value.toUpperCase();
    setGuess(uppercasedValue);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addGuessToList(guess);
    console.log(guess);
    setGuess('');
  }
  return <form onSubmit={(e) => handleFormSubmit(e)}>
    <label htmlFor='guess-input'>Enter guess</label>
    <input id='guess-input' type="text" value={guess} onChange={e => handleInputChange(e.target.value)} maxLength={5} minLength={5} required={true}  pattern="[a-zA-Z]{5}"/>
  </form>;
}

export default GuessForm;
