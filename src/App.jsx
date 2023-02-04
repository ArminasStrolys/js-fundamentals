import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Assignments } from './Fundamentals/Assignments/Assignments';
import { Basics } from './Fundamentals/Basics/Basics';
import { Project1 } from './Fundamentals/Projects/Project1';
import { Project2 } from './Fundamentals/Projects/P2/Project2';

import './app.css';

function App() {
  return (
    <div>
      <Basics />
      <Assignments />

      <div className="navigation">
        <a className="nav-link" href="/">
          HOME
        </a>
        <a className="nav-link" href="/p1">
          P1
        </a>
        <a className="nav-link" href="/p2">
          P2
        </a>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path={'/p1'} element={<Project1 />} />
          <Route path={'/p2'} element={<Project2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
