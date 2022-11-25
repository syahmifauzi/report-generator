import Image from 'next/image'
import { FC } from 'react'
import { toast } from 'react-hot-toast'
import { javascript } from '@codemirror/lang-javascript'
import { StreamLanguage } from '@codemirror/language'
import { yaml } from '@codemirror/legacy-modes/mode/yaml'
import { dracula } from '@uiw/codemirror-theme-dracula'
import ReactCodeMirror from '@uiw/react-codemirror'

import Copy from '~/copy.svg'

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
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value)
    toast.success('Successfully copied!', {
      id: 'copy',
      duration: 1500,
      style: { minWidth: '0' }
    })
  }

  return (
    <div className="py-2 text-xs sm:text-sm relative">
      <div className="mb-2 text-center dark:text-white">{label}</div>
      <ReactCodeMirror
        className="border rounded-sm overflow-hidden min-h-[200px] max-h-[30vh]"
        value={value}
        onChange={handleChange}
        theme={dracula}
        extensions={[getExtension[language]]}
      />
      <Image
        src={Copy}
        alt="copy to clipboard"
        onClick={handleCopyToClipboard}
        className="absolute w-6 h-6 cursor-pointer right-3 bottom-1 z-10 bg-white p-0.5 rounded"
      />
    </div>
  )
}

export default CodeBlock
