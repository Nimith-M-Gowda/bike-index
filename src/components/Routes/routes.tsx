import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Card from '../atoms/card/card';
import DashBoard from '../pages/dashBoard/dashBoard';

function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}></Route>
    </Routes>
  );
}

export default Router;
