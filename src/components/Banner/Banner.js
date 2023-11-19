import React from 'react';
import PropTypes from 'prop-types';


function Banner({ userWon, attempts, answer, resetGame }) {
  return <div className={userWon ? 'happy banner' : 'sad banner'}>
    
    {userWon ? (
        <p>
          <strong>Congratulations!</strong>
         {' Got it in '}
          <strong>{`${attempts} guesses`}</strong>.
      </p>
    ) : (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    )}
    <button onClick={resetGame}>Restart game</button>
  </div>;
}
Banner.propTypes = {
  userWon: PropTypes.bool.isRequired, 
  attempts: PropTypes.number, 
  answer: PropTypes.string,
  resetGame: PropTypes.func,
}
export default Banner;
