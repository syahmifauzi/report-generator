import Handlebars from 'handlebars'
import yaml, { YAMLException } from 'js-yaml'
import { toast } from 'react-hot-toast'

export const compile = (template: string, data: string): string => {
  try {
    const theData = yaml.load(data)
    const theTemplate = Handlebars.compile(template, { noEscape: true })
    const theOutput = theTemplate(theData)
    toast.dismiss()
    return theOutput
  } catch (e) {
    const toastConfig = {
      id: 'error',
      duration: Infinity
    }
    if (e instanceof YAMLException) {
      toast.error(`Data Error: ${e.message}`, toastConfig)
    } else {
      toast.error(`Template Error: ${e}`, toastConfig)
    }
    return ''
  }
}

// Utilities
Handlebars.registerHelper('inc', (val, _) => parseInt(val) + 1)
