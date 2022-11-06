import Handlebars from 'handlebars'
import yaml from 'js-yaml'

export const compile = (template: string, data: string): string => {
  try {
    const theData = yaml.load(data)
    const theTemplate = Handlebars.compile(template, { noEscape: true })
    return theTemplate(theData)
  } catch (_) {
    return ''
  }
}

// Utilities
Handlebars.registerHelper('inc', (val, _) => parseInt(val) + 1)
