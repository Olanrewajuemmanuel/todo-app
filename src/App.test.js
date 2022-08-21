import { render, screen } from '@testing-library/react';
import App from './App';
import SearchComponent from './todoComponents/SearchComponent';

// Functional Tests
test('renders Todo input bar', () => {
  render(<SearchComponent updateTodoItems={{}} tourStatus={[]} />);
  const todoInput = screen.getByPlaceholderText(/Meeting with Dr. Dre/i)
  expect(todoInput).toBeInTheDocument();
});

// test('')

