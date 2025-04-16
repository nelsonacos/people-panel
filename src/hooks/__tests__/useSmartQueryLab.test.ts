import { ChangeEvent } from 'react'
import { act, renderHook } from '@testing-library/react'
import { useSmartQueryLab } from '../useSmartQueryLab'

describe('useSmartQueryLab', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => useSmartQueryLab())

    expect(result.current.file).toBe(null)
    expect(result.current.prompt).toBe('')
    expect(result.current.isLoading).toBe(false)
    expect(result.current.response).toBe('')
    expect(result.current.logs).toEqual([])
  })

  test('should handle file change', () => {
    const { result } = renderHook(() => useSmartQueryLab())
    const file = new File(['hello'], 'hello.txt', { type: 'text/plain' })

    const event = {
      target: {
        files: [file],
      },
    } as unknown as ChangeEvent<HTMLInputElement>

    act(() => {
      result.current.handleFileChange(event)
    })

    expect(result.current.file).toEqual(file)
  })

  test('should handle prompt change', () => {
    const { result } = renderHook(() => useSmartQueryLab())

    const event = {
      target: { value: 'Explain this document' },
    } as ChangeEvent<HTMLTextAreaElement>

    act(() => {
      result.current.handlePromptChange(event)
    })

    expect(result.current.prompt).toBe('Explain this document')
  })

  test('should simulate upload and update state accordingly', async () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => useSmartQueryLab())

    const file = new File(['data'], 'report.pdf', { type: 'application/pdf' })

    act(() => {
      result.current.handleFileChange({
        target: { files: [file] },
      } as unknown as ChangeEvent<HTMLInputElement>)
      result.current.handlePromptChange({
        target: { value: 'Summarize this file' },
      } as ChangeEvent<HTMLTextAreaElement>)
    })

    act(() => {
      result.current.handleUpload()
    })

    expect(result.current.isLoading).toBe(true)

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.response).toMatch(/simulated summary/i)
    expect(result.current.logs.length).toBe(1)
    expect(result.current.logs[0].fileName).toBe('report.pdf')

    vi.useRealTimers()
  })
})
