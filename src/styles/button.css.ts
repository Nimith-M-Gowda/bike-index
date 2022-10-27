import { style } from '@vanilla-extract/css';

export const buttonContainerStyles = style({
  margin: '0 10px',
  padding: '20px',
  width: '20px',
  height: '20px',
  border: '3px solid red'
});

export const activeButtonContainerStyles = style({
  margin: '0 10px',
  padding: '20px',
  width: '20px',
  height: '20px',
  border: '3px solid red',
  background: 'red'
});
