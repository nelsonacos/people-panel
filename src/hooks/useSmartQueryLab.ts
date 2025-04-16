import { useState } from 'react'

export type LogEntry = {
  fileName: string
  action: 'Upload and Summary' | string
  timestamp: string
  responsePreview: string
}

export function useSmartQueryLab() {
  const [file, setFile] = useState<File | null>(null)
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [logs, setLogs] = useState<LogEntry[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
    }
  }

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  const handleUpload = () => {
    if (!file) return
    setIsLoading(true)

    const formData = new FormData()
    formData.append('file', file)
    formData.append('prompt', prompt)

    // Simulación de respuesta
    setTimeout(() => {
      const mockResponse = `File Summary "${file.name}":\n\nThis is a simulated summary of the file with the prompt: "${prompt}".`
      setResponse(mockResponse)
      setIsLoading(false)
      setLogs(prev => [
        {
          fileName: file.name,
          action: 'Upload and Summary',
          timestamp: new Date().toISOString(),
          responsePreview: mockResponse.slice(0, 50) + '...',
        },
        ...prev,
      ])
    }, 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([response], { type: 'text/plain' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'resultado_IA.txt'
    link.click()
  }

  return {
    file,
    prompt,
    isLoading,
    response,
    logs,
    handleFileChange,
    handlePromptChange,
    handleUpload,
    handleDownload,
  }
}
