import { Download, FileEdit } from 'lucide-react'

interface Props {
  response: string
  isLoading: boolean
  onDownload: () => void
}

export function SmartQueryPreview({ response, isLoading, onDownload }: Props) {
  return (
    <div className="rounded-2xl p-6 shadow bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="flex gap-4">
          <button
            onClick={onDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            <Download className="w-4 h-4" /> Donwload
          </button>
          <button
            onClick={() => alert('Editing function not implemented.')}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
          >
            <FileEdit className="w-4 h-4" /> Edit
          </button>
        </div>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Processing file with AI...</p>
      ) : response ? (
        <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-lg text-sm text-gray-700">
          {response}
        </pre>
      ) : (
        <p className="text-muted-foreground">There is no file to preview.</p>
      )}
    </div>
  )
}
