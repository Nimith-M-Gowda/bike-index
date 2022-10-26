import React, { Fragment, ReactElement } from 'react';
import {
  containerStyles,
  detailsContainer,
  imageContainer,
  imageStyle
} from '../../../styles/card.css';
import { CardProps } from './cardProps';

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
          <li>Stolen-Date : {id}</li>
          <h2 className="titleStyles">{title}</h2>
          <p className="descriptionStyles">{description ?? 'no description'}</p>
          <> Stolen-Date : {year ?? 'N / A'}</>
          <> Year-Recorded : {dateStolen ?? 'N / A'}</>
          <> Location : {stolenLocation ?? 'N / A'}</>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
