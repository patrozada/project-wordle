import React from 'react';

function GuessList({guessList}) {
  return <div>
  {guessList.map(guess => <p key={Math.random()}>{guess}</p>)}
  </div>;
}

export default GuessList;
