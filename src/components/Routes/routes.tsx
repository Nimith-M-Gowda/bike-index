import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Card from '../atoms/card/card';
import DashBoard from '../pages/dashBoard/dashBoard';

function Router(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}></Route>
      {/* <Route
        path="/"
        element={
          <Card
            id={'1'}
            title={'title'}
            description={'description'}
            dateStolen={67}
            year={90}
            stolenLocation={'StolenLoc'}
            thumb={'thumb.jpg'}
          /> */}
      {/* }> */}
      {/* </Route> */}
    </Routes>
  );
}

export default Router;
