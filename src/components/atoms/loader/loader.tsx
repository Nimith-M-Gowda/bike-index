import React, { ReactElement } from 'react';
import { loadingStyle } from './loader.css';

function loader(): ReactElement {
  return <div className={loadingStyle}>Loading....</div>;
}

export default loader;
