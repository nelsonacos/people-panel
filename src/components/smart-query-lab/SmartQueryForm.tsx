import { ChangeEvent } from 'react'
import { UploadCloud } from 'lucide-react'

interface Props {
  file: File | null
  prompt: string
  isLoading: boolean
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
  onPromptChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onUpload: () => void
}

export function SmartQueryForm({
  file,
  prompt,
  isLoading,
  onFileChange,
  onPromptChange,
  onUpload,
}: Props) {
  return (
    <div className="rounded-2xl p-6 shadow bg-white space-y-6">
      <h2 className="text-xl font-semibold">Upload file</h2>

      <input
        aria-label="upload file"
        type="file"
        accept=".txt,.pdf,.csv"
        onChange={onFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
      />

      <textarea
        rows={4}
        placeholder="Write your prompt..."
        value={prompt}
        onChange={onPromptChange}
        className="w-full p-3 border rounded-md resize-none text-sm"
      />

      <button
        onClick={onUpload}
        disabled={isLoading || !file}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
      >
        <UploadCloud className="w-4 h-4" /> Smart Query
      </button>
    </div>
  )
}
