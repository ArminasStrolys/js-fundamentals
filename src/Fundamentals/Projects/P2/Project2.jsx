import React, { useState, useEffect } from 'react';

import './project2.css';

export const Project2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const keyListener = ({ key }) => {
      if (key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', keyListener, false);

    return () => document.removeEventListener('keydown', keyListener);
  }, []);

  const handleOpen = () => {
    setIsOpen(() => true);
  };

  return (
    <div className="p2">
      <button onClick={handleOpen} class="show-modal">
        Show modal 1
      </button>
      <button onClick={handleOpen} class="show-modal">
        Show modal 2
      </button>
      <button onClick={handleOpen} class="show-modal">
        Show modal 3
      </button>

      <div class={!isOpen ? 'modal hidden' : 'modal'}>
        <button onClick={() => setIsOpen(false)} class="close-modal">
          &times;
        </button>
        <h1>I'm a modal window</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        class={isOpen ? 'overlay' : 'overlay hidden'}
      ></div>

      <script src="script.js"></script>
    </div>
  );
};
