import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default Router;
