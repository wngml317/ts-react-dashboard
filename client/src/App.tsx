import React from 'react';
import Counter from './page/Counter';
import { Routes, Route, Link } from 'react-router-dom';
import Todo from './page/Todo';
import Board from './page/Board';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <ul>
        <Link to="/counter"><li>카운터</li></Link>
        <Link to="/todo"><li>투두리스트</li></Link>
        <Link to="/board"><li>게시판</li></Link>
      </ul>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
