import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import TestForm1 from './TestForm1'
import userEvent from '@testing-library/user-event'

describe('TestForm1 Component', () => {
  let user

  beforeEach(() => {
    user = userEvent.setup({ delay: null })
  })

  it('renders Test Form Component 1 heading', () => {
    render(<TestForm1 />)

    expect(screen.getByText('Test Form Component 1')).toBeInTheDocument()
  })

  it('renders input and submit button', () => {
    render(<TestForm1 />)
    expect(screen.getByPlaceholderText('Enter something')).toBeInTheDocument()
    expect(screen.getByRole('button', { name:  /add item/i })).toBeInTheDocument()
  })

  it('allows user to type in the input field', () => {
    render(<TestForm1 />)
    const inputElement = screen.getByPlaceholderText('Enter something')
    expect(inputElement).toBeInTheDocument()

    fireEvent.change(inputElement, { target: { value: 'Buy Milk' } })

    expect(inputElement.value).toBe('Buy Milk')
  })

  it('allows user to type in the input field using userEvent', async () => {
    render(<TestForm1 />)
    const inputElement = screen.getByPlaceholderText('Enter something')
    expect(inputElement).toBeInTheDocument()

    await userEvent.type(inputElement, 'Buy Milk')
    expect(inputElement.value).toBe('Buy Milk')
  })

  it('Submits the form and clears the input field - FireEvent', () => {
    render(<TestForm1 />)
    const inputElement = screen.getByPlaceholderText('Enter something')
    const submitButton = screen.getByRole('button', { name: /add item/i })

    fireEvent.change(inputElement, { target: { value: 'Buy Bread' } })
    expect(inputElement.value).toBe('Buy Bread')

    fireEvent.click(submitButton)
    expect(inputElement.value).toBe('')
  })

  it('Submits the form and clears the input field - UserEvent', async () => {
    render(<TestForm1 />)
    const inputElement = screen.getByPlaceholderText('Enter something')
    const submitButton = screen.getByRole('button', { name: /add item/i })

    await userEvent.type(inputElement, 'Buy Bread')
    expect(inputElement.value).toBe('Buy Bread')

    await userEvent.click(submitButton)
    expect(inputElement.value).toBe('')
  })

  it('adds todo when icon button is clicked', async () => {
    // const user = userEvent.setup({ delay: null });
    render(<TestForm1 />)

    const input = screen.getByPlaceholderText(/enter something/i)
    const addButton = screen.getByRole('button', { name: /add item/i })

    await user.type(input, 'Learn Jest')
    expect(input).toHaveValue('Learn Jest')

    await user.click(addButton)

    expect(screen.getByText('Learn Jest')).toBeInTheDocument()
    expect(input).toHaveValue('')
  })

  it('delete todo', async () => {
    const user = userEvent.setup()
    render(<TestForm1 />)

    const input = screen.getByPlaceholderText(/enter something/i)
    const addButton = screen.getByRole('button', { name: /add item/i })

    await user.type(input, 'Learn React')
    await user.click(addButton)

    const deleteButton = screen.getByRole('button', {
      name: /delete learn react/i,
    })

    await user.click(deleteButton)

    expect(screen.getByText(/no items in the list/i)).toBeInTheDocument()
  })

  it('edit todo', async () => {
    const user = userEvent.setup({ delay: null })
    render(<TestForm1 />)

    const input = screen.getByPlaceholderText(/enter something/i)
    const addButton = screen.getByRole('button', { name: /add item/i })

    await user.type(input, 'Learn React')
    await user.click(addButton)

    const editButton = screen.getByRole('button', {
      name: /edit learn react/i,
    })

    await user.click(editButton)

    expect(input).toHaveValue('Learn React')

    await user.clear(input)
    await user.type(input, 'Learn Jest')
    await user.click(addButton)

    expect(screen.getByText('Learn Jest')).toBeInTheDocument()
  })

  it('does not add empty todo', async () => {
    render(<TestForm1 />)

    // const input = screen.getByPlaceholderText(/enter something/i);
    const addButton = screen.getByRole('button', { name: /add item/i })
    await user.click(addButton)
    expect(screen.getByText(/no items in the list/i)).toBeInTheDocument()
  })
})
