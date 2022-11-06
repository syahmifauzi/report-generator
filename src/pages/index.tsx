import Head from 'next/head'

import { useAppContext } from '@/contexts/AppContext'
import CodeBlock from '@/components/CodeBlock'

const HomePage = () => {
  const { template, data, output, dispatch } = useAppContext()

  const handleChange = (
    type: 'template' | 'data' | 'output',
    payload: string
  ) => {
    if (dispatch) {
      dispatch({ type, payload })
      dispatch({ type: 'output' })
    }
  }

  return (
    <div className="p-4 max-w-5xl mx-auto prose prose-slate">
      <Head>
        <title>Report Generator</title>
      </Head>
      <h1 className="text-3xl font-medium text-center">Report Generator</h1>
      <CodeBlock
        label="Template (Handlebars)"
        value={template}
        language="JS"
        handleChange={(payload) => handleChange('template', payload)}
      />
      <CodeBlock
        label="Data (YAML)"
        value={data}
        language="YAML"
        handleChange={(payload) => handleChange('data', payload)}
      />
      <CodeBlock
        label="Output"
        value={output}
        language="JS"
        handleChange={(payload) => handleChange('output', payload)}
      />
    </div>
  )
}

export default HomePage
