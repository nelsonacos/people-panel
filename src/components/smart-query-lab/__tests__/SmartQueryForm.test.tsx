import { render, screen, fireEvent } from '@testing-library/react'
import { SmartQueryForm } from '../SmartQueryForm'
import userEvent from '@testing-library/user-event'

describe('SmartQueryForm', () => {
  const defaultProps = {
    file: null,
    prompt: '',
    isLoading: false,
    onFileChange: vi.fn(),
    onPromptChange: vi.fn(),
    onUpload: vi.fn(),
  }

  test('renders all form elements correctly', () => {
    render(<SmartQueryForm {...defaultProps} />)

    expect(screen.getByText(/Upload file/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Write your prompt/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Smart Query/i })).toBeInTheDocument()
  })

  test('calls onFileChange when a file is selected', async () => {
    render(<SmartQueryForm {...defaultProps} />)

    const fileInput = screen.getByLabelText(/upload file/i)
    const file = new File(['dummy content'], 'example.txt', { type: 'text/plain' })
    await userEvent.upload(fileInput, file)
    expect(defaultProps.onFileChange).toHaveBeenCalled()
  })

  test('calls onPromptChange when typing in textarea', () => {
    render(<SmartQueryForm {...defaultProps} />)

    const textarea = screen.getByPlaceholderText(/Write your prompt/i)
    fireEvent.change(textarea, { target: { value: 'New prompt' } })
    expect(defaultProps.onPromptChange).toHaveBeenCalled()
  })

  test('calls onUpload when Smart Query button is clicked', () => {
    render(<SmartQueryForm {...defaultProps} file={new File([], 'file.txt')} />)

    const button = screen.getByRole('button', { name: /Smart Query/i })
    fireEvent.click(button)
    expect(defaultProps.onUpload).toHaveBeenCalled()
  })

  test('disables button when loading or no file selected', () => {
    const { rerender } = render(<SmartQueryForm {...defaultProps} isLoading={true} file={null} />)

    const button = screen.getByRole('button', { name: /Smart Query/i })
    expect(button).toBeDisabled()

    rerender(<SmartQueryForm {...defaultProps} isLoading={false} file={null} />)
    expect(button).toBeDisabled()

    rerender(<SmartQueryForm {...defaultProps} isLoading={true} file={new File([], 'file.txt')} />)
    expect(button).toBeDisabled()
  })
})
