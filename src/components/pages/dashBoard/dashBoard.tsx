import React, { Fragment, ReactElement, ReactNode, useState } from 'react';
import StaleComponent from '../../../hoc/staleComponent';
import useDashBoard from '../../../hooks/use-dashboard/useDashBoard';
import { formContainer, submitButtonStyle } from '../../../styles/dashBoard.css';
import Card from '../../atoms/card/card';
import Pagination from '../../utils/Pagination/pagination';

function DashBoard(): ReactElement {
  const { BikeData, error, isLoading, setSearch } = useDashBoard();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<number>();
  const [perEachPage] = useState<number>(10);

  const lastIndex: number = currentPage * perEachPage;
  const firstIndex: number = lastIndex - perEachPage;
  const currentPageItems = BikeData.slice(firstIndex, lastIndex);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setSearch(searchValue ?? 0);
    // BikeData.filter((e) => e.year === searchValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(parseInt(e.target.value));
  };
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
    return <StaleComponent name={'error'} />;
  }
  return (
    <Fragment>
      <h1>
        total number of bike theft cases :<span>{BikeData.length}</span>
      </h1>
      <form className={formContainer} onSubmit={handleSubmit}>
        <label>
          Year:
          <input type="number" value={searchValue} onChange={(e) => handleChange(e)} />
        </label>
        <button className={submitButtonStyle} type="submit" value="Submit">
          Submit
        </button>
      </form>
      {isLoading && <StaleComponent name={'loading'} />}
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
