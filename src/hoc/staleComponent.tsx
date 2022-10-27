import React, { ReactElement } from 'react';
import { loadingStyle } from '../styles/staleComponent.css';

export interface StaleComponentProp {
  name: string;
}
function StaleComponent({ name }: StaleComponentProp): ReactElement {
  return <div className={loadingStyle}>{name}....</div>;
}

export default StaleComponent;
