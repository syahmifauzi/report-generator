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
    <div className="px-2 py-4 max-w-5xl mx-auto prose prose-sm">
      <Head>
        <title>Easy Report</title>
      </Head>
      <h1 className="text-2xl sm:text-3xl font-medium text-center mb-2 sm:mb-4 dark:text-white">
        Easy Report
      </h1>
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
