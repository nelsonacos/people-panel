import { SmartQueryForm } from '../components/smart-query-lab/SmartQueryForm'
import { SmartQueryPreview } from '../components/smart-query-lab/SmartQueryPreview'
import { SmartQueryHistory } from '../components/smart-query-lab/SmartQueryHistory'
import { useSmartQueryLab } from '../hooks'

export function SmartQueryLab() {
  const {
    file,
    prompt,
    isLoading,
    response,
    logs,
    handleFileChange,
    handlePromptChange,
    handleUpload,
    handleDownload,
  } = useSmartQueryLab()

  return (
    <main className="flex-1 p-6 space-y-6">
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <SmartQueryPreview response={response} isLoading={isLoading} onDownload={handleDownload} />

        <SmartQueryForm
          file={file}
          prompt={prompt}
          isLoading={isLoading}
          onFileChange={handleFileChange}
          onPromptChange={handlePromptChange}
          onUpload={handleUpload}
        />
      </section>

      <SmartQueryHistory logs={logs} />
    </main>
  )
}

export default SmartQueryLab
