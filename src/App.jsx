import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Assignments } from './Fundamentals/Assignments/Assignments';
import { Basics } from './Fundamentals/Basics/Basics';
import { Project1 } from './Fundamentals/Projects/Project1';

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
          APP1
        </a>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path={'/p1'} element={<Project1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
