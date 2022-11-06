import { FC } from 'react'
import { javascript } from '@codemirror/lang-javascript'
import { StreamLanguage } from '@codemirror/language'
import { yaml } from '@codemirror/legacy-modes/mode/yaml'
import ReactCodeMirror from '@uiw/react-codemirror'

interface Props {
  label: string
  value: string
  language: 'JS' | 'YAML'
  handleChange: (value: string) => void
}

const getExtension = {
  JS: javascript({ jsx: true, typescript: true }),
  YAML: StreamLanguage.define(yaml)
}

const CodeBlock: FC<Props> = ({ label, value, language, handleChange }) => {
  return (
    <div className="p-2 rounded-sm">
      <div className="text-md mb-2 text-center">{label}</div>
      <ReactCodeMirror
        className="text-sm border rounded-md overflow-hidden w-full"
        value={value}
        onChange={handleChange}
        height="30vh"
        extensions={[getExtension[language]]}
      />
    </div>
  )
}

export default CodeBlock
