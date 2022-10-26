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
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  width: '50%'
});
export const imageStyle = style({
  height: '70%',
  width: '70%',
  padding: '20px'
});
export const headerStyle = style({
  fontWeight: 'bold'
});
