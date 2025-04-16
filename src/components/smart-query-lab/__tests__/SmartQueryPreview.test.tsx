import { render, screen, fireEvent } from '@testing-library/react'
import { SmartQueryPreview } from '../SmartQueryPreview'

describe('SmartQueryPreview', () => {
  test('renders correctly', () => {
    render(<SmartQueryPreview response="" isLoading={false} onDownload={vi.fn()} />)
    const downloadButton = screen.getByRole('button', { name: /Donwload/i })
    const editbutton = screen.getByRole('button', { name: /Edit/i })
    expect(screen.getByText(/Preview/)).toBeInTheDocument()
    expect(downloadButton).toBeInTheDocument()
    expect(editbutton).toBeInTheDocument()
  })

  test('displays loading message when isLoading is true', () => {
    render(<SmartQueryPreview response="" isLoading={true} onDownload={vi.fn()} />)

    expect(screen.getByText(/Processing file with AI.../)).toBeInTheDocument()
  })

  test('displays the response when available', () => {
    const mockResponse = 'This is the file summary'

    render(<SmartQueryPreview response={mockResponse} isLoading={false} onDownload={vi.fn()} />)

    expect(screen.getByText(mockResponse)).toBeInTheDocument()
  })

  test('calls onDownload when Download button is clicked', () => {
    const mockDownload = vi.fn()

    render(<SmartQueryPreview response="" isLoading={false} onDownload={mockDownload} />)
    const downloadButton = screen.getByRole('button', { name: /Donwload/i })
    fireEvent.click(downloadButton)
    expect(mockDownload).toHaveBeenCalled()
  })

  test('shows alert when Edit button is clicked', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

    render(<SmartQueryPreview response="" isLoading={false} onDownload={vi.fn()} />)
    const editbutton = screen.getByRole('button', { name: /Edit/i })
    fireEvent.click(editbutton)

    expect(alertSpy).toHaveBeenCalledWith('Editing function not implemented.')

    alertSpy.mockRestore()
  })
})
