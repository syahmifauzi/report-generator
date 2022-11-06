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
    <div className="py-2 text-xs sm:text-sm">
      <div className="mb-2 text-center">{label}</div>
      <ReactCodeMirror
        className="border rounded-sm overflow-hidden"
        value={value}
        onChange={handleChange}
        height="30vh"
        extensions={[getExtension[language]]}
      />
    </div>
  )
}

export default CodeBlock
