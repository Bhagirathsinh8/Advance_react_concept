import { render, screen } from '@testing-library/react'
import App from './App'
import { describe, expect, it } from 'vitest'

describe('App Component', () => {
  it('renders heading', () => {
    render(<App />)
    expect(screen.getByText('Welcome to Jest Testing!')).toBeInTheDocument()
  })
})
