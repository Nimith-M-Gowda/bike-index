import React, { Fragment, ReactElement } from 'react';
import { ContainerStyle } from '../styles/Layout.css';

function Layout(): ReactElement {
  return (
    <Fragment>
      <div className={ContainerStyle}></div>
    </Fragment>
  );
}

export default Layout;
