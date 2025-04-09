import { screen, fireEvent } from '@testing-library/react'
import { renderWithClerk } from '../../../tests'
import { Topbar } from '..'

describe('Topbar', () => {
  test('should toggle sidebar visibility when menu button is clicked', () => {
    const toggleSidebar = vi.fn()
    renderWithClerk(<Topbar toggleSidebar={toggleSidebar} />)

    const menuButton = screen.getByRole('button')
    fireEvent.click(menuButton)

    expect(toggleSidebar).toHaveBeenCalledTimes(1)
  })

  test('should render the title correctly', () => {
    const toggleSidebar = vi.fn()
    renderWithClerk(<Topbar toggleSidebar={toggleSidebar} />)
    expect(screen.getByText(/People Panel/i)).toBeDefined()
  })

  test('should show the menu button on small screens', () => {
    global.innerWidth = 500
    global.dispatchEvent(new Event('resize'))

    const toggleSidebar = vi.fn()
    renderWithClerk(<Topbar toggleSidebar={toggleSidebar} />)
    expect(screen.getByRole('button')).toBeDefined()
  })
})
