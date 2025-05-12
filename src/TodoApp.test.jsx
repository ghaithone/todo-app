/* eslint-env vitest */
/* global describe, it, expect */
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

  it('should mark a task as completed when clicked', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'Read a book' } });
    fireEvent.click(addButton);

    const task = screen.getByText('Read a book');
    fireEvent.click(task);

    // Expect the completed task to have a line-through style
    expect(task).toHaveClass('line-through');
  });
}); 