import React, { ReactElement } from 'react';
import { activeButtonContainerStyles, buttonContainerStyles } from '../../../styles/button.css';
import { ButtonTypes } from './buttonTypes';

function Button({ key, onclick, content, isActive }: ButtonTypes): ReactElement {
  return (
    <button
      className={!isActive ? buttonContainerStyles : activeButtonContainerStyles}
      key={key}
      onClick={() => onclick()}>
      {content}
    </button>
  );
}

export default Button;
