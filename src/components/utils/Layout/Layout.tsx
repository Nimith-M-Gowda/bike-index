import React, { ReactElement } from 'react';
import { layoutStyles } from '../../../styles/layout.css';
import { layoutPropType } from './layout.types';

function Layout({ children }: layoutPropType): ReactElement {
  return <div className={layoutStyles}> {children}</div>;
}

export default Layout;
