import React, { useState } from 'react';

import './project3.css';

export const Project3 = () => {
  return (
    <main className="p3">
      <section className="player player--0 player--active">
        <h2 className="name" id="name--0">
          Player 1
        </h2>
        <p className="score" id="score--0">
          66666
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            0
          </p>
        </div>
      </section>
      <section className="player player--1">
        <h2 className="name" id="name--1">
          Player 2
        </h2>
        <p className="score" id="score--1">
          999999
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--1">
            0
          </p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" className="dice" />
      <button className="btn btn--new">🔄 New game</button>
      <button className="btn btn--roll">🎲 Roll dice</button>
      <button className="btn btn--hold">📥 Hold</button>
    </main>
  );
};
