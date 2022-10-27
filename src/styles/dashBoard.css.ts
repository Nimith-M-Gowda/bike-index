import { style } from '@vanilla-extract/css';
export const formContainer = style({
  width: '100%',
  height: '20vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const submitButtonStyle = style({
  width: '80px',
  height: '30px',
  padding: '10px',
  cursor: 'pointer'
});
