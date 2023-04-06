import React from 'react';
import Counter from './page/Counter';
import { Routes, Route, Navigate } from 'react-router-dom';
import Todo from './page/Todo';
import styled, { createGlobalStyle } from 'styled-components';
import Chart from './page/Chart';
import SideBar from './component/navigation/SideBar';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    margin: 0
  }
`;
const Main = styled.div`
  display: flex;
`
function App() {
  return (
    <div>
      <GlobalStyle />
      <Main>

      <SideBar />
      <Routes>
        <Route path="/" element={<Navigate to="/todo" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
      </Main>
    </div>
  );
}

export default App;
