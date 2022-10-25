import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';

function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
}

export default Router;