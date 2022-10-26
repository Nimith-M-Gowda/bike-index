import React, { ReactElement } from 'react';

interface CardProps {
  id: string;
  title: string;
  description?: string;
  dateStolen?: Number;
  year?: Number;
  stolenLocation?: string;
  thumb?: string;
}
function Card({
  id,
  title,
  description,
  dateStolen,
  year,
  stolenLocation,
  thumb
}: CardProps): ReactElement {
  return <div></div>;
}

export default Card;
