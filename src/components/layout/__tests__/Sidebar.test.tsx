import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar, navItems } from '../'
import { Link } from 'wouter'

describe('Sidebar Component', () => {
  test('renders Sidebar when open is true', () => {
    render(<Sidebar open={true} onClose={vi.fn()} />)
    expect(screen.getByRole('navigation')).toBeDefined()
  })

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = vi.fn()
    render(<Sidebar open={true} onClose={onCloseMock} />)

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  test('renders nav items correctly', () => {
    render(<Sidebar open={true} onClose={vi.fn()} />)

    navItems.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeDefined()
    })
  })

  test('Link components are rendered with correct label', () => {
    render(<Sidebar open={true} onClose={vi.fn()} />)

    navItems.forEach(({ label }) => {
      const link = screen.getByRole('link', { name: label })
      expect(link).toBeInTheDocument()
    })
  })

  test('preload function is called on mouse enter of a link', () => {
    const preloadMock = vi.fn()

    const mockNavItems = [
      {
        icon: () => null,
        label: 'Dashboard',
        href: '/dashboard',
        preload: preloadMock,
      },
    ]

    render(
      <nav>
        {mockNavItems.map(({ label, href, preload }) => (
          <Link key={label} href={href} onMouseEnter={preload} className="link">
            {label}
          </Link>
        ))}
      </nav>
    )

    const link = screen.getByText('Dashboard')
    fireEvent.mouseEnter(link)

    expect(preloadMock).toHaveBeenCalled()
  })

  test('sidebar has the correct transform class when open is true', () => {
    render(<Sidebar open={true} onClose={vi.fn()} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('translate-x-0')
  })

  test('sidebar has the correct transform class when open is false', () => {
    render(<Sidebar open={false} onClose={vi.fn()} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('-translate-x-full')
  })

  test('sidebar has a role of "navigation"', () => {
    render(<Sidebar open={true} onClose={vi.fn()} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeDefined()
  })
})
