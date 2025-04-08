import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

const Button = ({ onClick }: { onClick: () => void }) => <button onClick={onClick}>Click me</button>

describe('Button', () => {
  it('renders and reacts to click', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button onClick={handleClick} />)

    const btn = screen.getByText('Click me')
    await user.click(btn)

    expect(handleClick).toHaveBeenCalled()
  })
})
