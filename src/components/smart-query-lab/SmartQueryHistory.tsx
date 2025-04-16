interface Log {
  fileName: string
  action: string
  timestamp: string
  responsePreview: string
}

interface Props {
  logs: Log[]
}

export function SmartQueryHistory({ logs }: Props) {
  return (
    <section className="rounded-2xl p-6 shadow bg-white">
      <h3 className="text-md font-semibold mb-4">Activity history</h3>

      {logs.length === 0 ? (
        <p className="text-sm text-muted-foreground">There are no records yet.</p>
      ) : (
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">File</th>
              <th className="px-4 py-2 text-left">Action</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Summary</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{log.fileName}</td>
                <td className="px-4 py-2">{log.action}</td>
                <td className="px-4 py-2">{new Date(log.timestamp).toLocaleString()}</td>
                <td className="px-4 py-2">{log.responsePreview}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}
