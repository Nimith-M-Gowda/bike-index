import React, { Fragment, ReactElement, ReactNode, useState } from 'react';
import useDashBoard from '../../../hooks/use-dashboard/useDashBoard';
import Card from '../../atoms/card/card';
import Pagination from '../../utils/Pagination/pagination';

function DashBoard(): ReactElement {
  const { BikeData, error } = useDashBoard();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perEachPage] = useState<number>(10);

  const lastIndex: number = currentPage * perEachPage;
  const firstIndex: number = lastIndex - perEachPage;
  const currentPageItems = BikeData.slice(firstIndex, lastIndex);
  const renderBikeList = (): ReactNode => {
    return currentPageItems.map((bike) => {
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
  return (
    <Fragment>
      <h1>
        TOTAL RESULTS :<span>{BikeData.length}</span>
      </h1>
      {renderBikeList()}
      <Pagination
        totalItems={BikeData.length}
        itemPerPage={perEachPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Fragment>
  );
}

export default DashBoard;
