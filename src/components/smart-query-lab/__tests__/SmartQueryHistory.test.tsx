import { render, screen } from '@testing-library/react'
import { SmartQueryHistory } from '../SmartQueryHistory'

describe('SmartQueryHistory', () => {
  test('shows a message when there are no logs', () => {
    render(<SmartQueryHistory logs={[]} />)

    expect(screen.getByText(/there are no records yet/i)).toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  test('renders a table with log entries', () => {
    const logs = [
      {
        fileName: 'report.pdf',
        action: 'Uploaded',
        timestamp: '2025-04-16T12:00:00Z',
        responsePreview: 'Summary of the uploaded file',
      },
      {
        fileName: 'data.csv',
        action: 'Processed',
        timestamp: '2025-04-15T15:30:00Z',
        responsePreview: 'Extracted insights',
      },
    ]

    render(<SmartQueryHistory logs={logs} />)

    expect(screen.getByRole('columnheader', { name: /file/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /action/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /date/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /summary/i })).toBeInTheDocument()

    expect(screen.getByText('report.pdf')).toBeInTheDocument()
    expect(screen.getByText('Uploaded')).toBeInTheDocument()
    expect(screen.getByText('Summary of the uploaded file')).toBeInTheDocument()

    expect(screen.getByText('data.csv')).toBeInTheDocument()
    expect(screen.getByText('Processed')).toBeInTheDocument()
    expect(screen.getByText('Extracted insights')).toBeInTheDocument()

    expect(screen.getByRole('table')).toBeInTheDocument()
  })
})
