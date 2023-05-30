import { render, screen } from '@testing-library/react'
import Home from '../index'

describe('Home', () => {
  it('renders a greeting', () => {
    render(<Home />)
    const greeting = screen.getByText(/hello, world!/i)
    expect(greeting).toBeInTheDocument()
  })
})
