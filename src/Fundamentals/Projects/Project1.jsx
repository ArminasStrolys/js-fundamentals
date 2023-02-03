import React, { useState } from 'react';

import './project1.css';

export const Project1 = () => {
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [userValue, setUserValue] = useState(null);
  const [victory, setVictory] = useState(false);
  const [message, setMessage] = useState('Start guessing...');

  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * 10 + 1)
  );

  console.log(randomNum);

  const handleValueCheck = () => {
    console.log(userValue);
    handleGuessCheck();
  };

  const handleReset = () => {
    setScore(20);
    setRandomNum(Math.floor(Math.random() * 10 + 1));
    setVictory(false);
  };

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
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and {score})</p>
        <button onClick={handleReset} className="btn again">
          Again!
        </button>
        <div className="number">{victory ? randomNum : '?'}</div>
      </header>
      <main className="main-theme">
        <section className="left">
          <input
            type="number"
            className="guess"
            onChange={(e) => setUserValue(+e.target.value)}
          />
          <button className="btn check" onClick={handleValueCheck}>
            Check!
          </button>
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
    </>
  );
};
