import { render, screen } from '@testing-library/react'
import TestTodoList from './TestTodoList'
import { describe, expect, test } from 'vitest'

describe('TestTodoList', () => {
  test('shows message when no todos', () => {
    render(<TestTodoList todos={[]} />)

    expect(screen.getByText(/no items in the list/i)).toBeInTheDocument()
  })

  test('renders todos with edit and delete buttons', () => {
    const todos = ['Learn React', 'Learn Jest']
    render(<TestTodoList todos={todos} />)

    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Learn Jest')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /edit learn react/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /edit learn jest/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /delete learn react/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /delete learn jest/i }),
    ).toBeInTheDocument()
  })
})
