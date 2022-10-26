import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoard from '../pages/dashBoard/dashBoard';

function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}></Route>
    </Routes>
  );
}

export default Router;
