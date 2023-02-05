import React, { useState } from 'react';

import './project1.css';

export const Project1 = () => {
  const initialScore = 20;

  const [score, setScore] = useState(initialScore);
  const [highscore, setHighscore] = useState(0);
  const [userValue, setUserValue] = useState(0);
  const [victory, setVictory] = useState(false);
  const [message, setMessage] = useState('Start guessing...');

  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * 20 + 1)
  );

  const handleValueCheck = () => {
    console.log(userValue);
    handleGuessCheck();
  };

  const handleReset = () => {
    setScore(20);
    setRandomNum(Math.floor(Math.random() * 20 + 1));
    setVictory(false);
    setMessage('Start guessing...');
  };

  if (score === 0) {
    setMessage('You lost!');
    alert('Game lost :(');
    handleReset();
  }

  const handleGuessCheck = () => {
    if (userValue === randomNum) {
      setMessage('Congrats!');
      setVictory(true);
      highscore < score && setHighscore(score);
    } else if (userValue < randomNum) {
      setMessage('Higher!');
      setScore(score - 1);
    } else {
      setMessage('Lower!');
      setScore(score - 1);
    }
  };

  return (
    <div className="p1">
      <header className={!victory ? 'header' : 'header--win'}>
        <h1>{!victory ? 'Guess My Number!' : 'Winner!'}</h1>
        <p className="between">(Between 1 and {initialScore})</p>
        <div className="number">{victory ? randomNum : '?'}</div>
      </header>
      <main className="main-theme">
        <section className="left">
          <input
            type="number"
            className="guess"
            value={userValue}
            onChange={(e) => setUserValue(+e.target.value)}
          />
          {victory ? (
            <button onClick={handleReset} className="btn again">
              Again!
            </button>
          ) : (
            <button className="btn check" onClick={handleValueCheck}>
              Check!
            </button>
          )}
        </section>
        <section className="right">
          <p className="message">{message}</p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
};
