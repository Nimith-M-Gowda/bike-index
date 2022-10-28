import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DashBoard from '../components/pages/dashBoards/dashBoard';

test('renders total item in UI', async () => {
  render(<DashBoard />);
  const inputBox = screen.getByTestId('inputButton');
  userEvent.click(inputBox);
  userEvent.type(inputBox, '2004');

  const submitButton = screen.getByTestId('submitButton');
  userEvent.click(submitButton);

  setTimeout(() => {}, 2022);
  const cardtest = screen.getAllByTestId('cardtest');
  expect(cardtest.length).toEqual(6);
});
