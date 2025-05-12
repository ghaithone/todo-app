import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import TodoApp from './TodoApp';

describe('TodoApp', () => {
  it('should add a new task to the list', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'Buy milk' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Buy milk')).toBeInTheDocument();
  });
}); 