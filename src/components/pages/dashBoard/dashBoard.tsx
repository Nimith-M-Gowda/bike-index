import React, { ReactElement } from 'react';
import useDashBoard from '../../../hooks/use-dashboard/useDashBoard';

function DashBoard(): ReactElement {
  const { BikeData } = useDashBoard();
  console.log('🚀 ~ file: DashBoard.tsx ~ line 6 ~ DashBoard ~ BikeData', BikeData);

  return <div>Hi</div>;
}

export default DashBoard;
