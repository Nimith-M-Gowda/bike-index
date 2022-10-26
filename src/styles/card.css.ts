import { style } from '@vanilla-extract/css';

export const containerStyles = style({
  width: '100%',
  height: '40vh',
  display: 'flex',
  justifyContent: 'space-between'
});

export const imageContainer = style({
  width: '50%'
});
export const detailsContainer = style({
  background: 'cyan',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  width: '50%'
});
export const imageStyle = style({
  opacity: '0.5',
  background: 'black',
  height: '100%',
  width: '100%'
});
