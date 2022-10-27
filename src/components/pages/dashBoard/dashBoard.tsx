import React, { Fragment, ReactElement, ReactNode } from 'react';
import useDashBoard from '../../../hooks/use-dashboard/useDashBoard';
import Card from '../../atoms/card/card';

function DashBoard(): ReactElement {
  const { BikeData, error } = useDashBoard();

  const renderBikeList = (): ReactNode => {
    return BikeData.map((bike) => {
      const {
        id,
        title,
        thumb,
        description,
        year,
        date_stolen: StolenDate,
        stolen_location: StolenLoc
      } = bike;
      return (
        <div key={id}>
          <Card
            id={id}
            title={title}
            description={description}
            dateStolen={StolenDate}
            year={year}
            stolenLocation={StolenLoc}
            thumb={thumb}
          />
        </div>
      );
    });
  };

  if (error.length !== 0) {
    return <h1>ERROR COMPONENT</h1>;
  }
  return <Fragment>{renderBikeList()}</Fragment>;
}

export default DashBoard;
