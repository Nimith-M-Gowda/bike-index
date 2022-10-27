import React, { Fragment, ReactElement } from 'react';
import {
  containerStyles,
  detailsContainer,
  headerStyle,
  imageContainer,
  imageStyle
} from '../../../styles/card.css';
import { CardProps } from './cardProps';

/**
 *
 * @param param0 CardProps
 * @returns Card component
 */
function Card({
  id,
  title,
  description,
  dateStolen,
  year,
  stolenLocation,
  thumb,
  onClickCard
}: CardProps): ReactElement {
  return (
    <Fragment>
      <div
        className={containerStyles}
        onClick={() => (onClickCard != null ? onClickCard(id) : console.log(id))}>
        <div className={imageContainer}>
          <img className={imageStyle} src={thumb} alt="bike.jpg" />
        </div>
        <div className={detailsContainer}>
          <li>ID : {id}</li>
          <h2>{title}</h2>
          <p>{description ?? 'no description'}</p>
          <>
            {' '}
            <span className={headerStyle}>Recorded Added Year</span> : {year ?? 'N / A'}
          </>
          <>
            {' '}
            <span className={headerStyle}>Date Stolen</span> : {dateStolen ?? 'N / A'}
          </>
          <>
            <span className={headerStyle}> Location</span> : {stolenLocation ?? 'N / A'}
          </>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
