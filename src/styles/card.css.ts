import { style } from '@vanilla-extract/css';

export const containerStyles = style({
  width: '100%',
  height: '40vh',
  display: 'flex',
  justifyContent: 'space-between',
  border: '2px solid black'
});

export const imageContainer = style({
  width: '50%'
});
export const detailsContainer = style({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  fontSize: '13px'
});
export const imageStyle = style({
  height: '70%',
  width: '40%',
  padding: '20px',
  paddingLeft: '50px'
});
export const headerStyle = style({
  fontWeight: 'bold'
});
export const descStyle = style({
  fontSize: '15px'
});
