import React, { useState, useEffect } from 'react';

import './project3.css';
import dice1 from './images/dice-1.png';
import dice2 from './images/dice-2.png';
import dice3 from './images/dice-3.png';
import dice4 from './images/dice-4.png';
import dice5 from './images/dice-5.png';
import dice6 from './images/dice-6.png';

export const Project3 = () => {
  const randomDice = () => {
    return Math.floor(Math.random() * 6 + 1);
  };
  const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [rerenderer, setRerenderer] = useState(true);
  const [dice, setDice] = useState(0);
  const [p1Score, setP1Score] = useState(0);
  const [p1ScoreMax, setP1ScoreMax] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [p2ScoreMax, setP2ScoreMax] = useState(0);

  useEffect(() => {
    if (currentPlayer) {
      setP1Score(dice + p1Score);
    } else {
      setP2Score(dice + p2Score);
    }

    if (dice === 1) {
      setCurrentPlayer((prev) => !prev);
      setP1Score(0);
      setP2Score(0);
    }

    if (p1ScoreMax >= 100) {
      alert('PLAYER 1 WON THE GAME!');
    } else if (p2ScoreMax >= 100) {
      alert('PLAYER 2 WON THE GAME!');
    }
  }, [rerenderer, p2ScoreMax, p1ScoreMax]);

  const rollTheDice = () => {
    setDice(randomDice());
    setRerenderer((prev) => !prev);
  };

  const checkDiceImage = (dice) => {
    for (let i = 0; i <= dices.length; i++) {
      if (i === dice) return dices[i - 1];
    }
  };

  const hold = () => {
    if (currentPlayer) {
      setP1ScoreMax(p1ScoreMax + p1Score);
      setP1Score(0);
    } else {
      setP2ScoreMax(p2ScoreMax + p2Score);
      setP2Score(0);
    }
  };

  const switchPlayer = () => {
    setCurrentPlayer((prev) => !prev);
    hold();
  };

  const reset = () => {
    setDice(0);
    setP1ScoreMax(0);
    setP2ScoreMax(0);
    setP1Score(0);
    setP2Score(0);
    setCurrentPlayer(true);
  };

  return (
    <main className="p3">
      <section
        className={`player player--0 ${currentPlayer ? 'player--active' : ''}`}
      >
        <h2 className="name" id="name--0">
          Player 1
        </h2>
        <p className="score" id="score--0">
          {p1ScoreMax}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            {p1Score}
          </p>
        </div>
      </section>
      <section
        className={`player player--1 ${!currentPlayer ? 'player--active' : ''}`}
      >
        <h2 className="name" id="name--1">
          Player 2
        </h2>
        <p className="score" id="score--1">
          {p2ScoreMax}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--1">
            {p2Score}
          </p>
        </div>
      </section>

      {dice !== 0 && (
        <img src={checkDiceImage(dice)} alt="Playing dice" className="dice" />
      )}
      <button onClick={reset} className="btn btn--new">
        🔄 New game
      </button>
      <button onClick={rollTheDice} className="btn btn--roll">
        🎲 Roll dice
      </button>
      <button onClick={switchPlayer} className="btn btn--hold">
        📥 Hold
      </button>
    </main>
  );
};
