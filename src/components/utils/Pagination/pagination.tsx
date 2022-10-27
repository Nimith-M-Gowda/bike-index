import React, { ReactElement } from 'react';
import Button from '../../atoms/button/button';
import { buttonPositionStyle } from './pagination.css';

export interface PaginationProps {
  totalItems: number;
  itemPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

function Pagination({
  totalItems,
  itemPerPage,
  setCurrentPage,
  currentPage
}: PaginationProps): ReactElement<PaginationProps> {
  const Pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    Pages.push(i);
  }

  const onClickHandler = (eachPage: number): void => {
    setCurrentPage(eachPage);
  };
  return (
    <div className={buttonPositionStyle}>
      {Pages.map((eachPage, index) => {
        return (
          <Button
            isActive={eachPage === currentPage}
            key={index}
            onclick={() => onClickHandler(eachPage)}
            content={eachPage}
          />
        );
      })}
    </div>
  );
}

export default Pagination;
