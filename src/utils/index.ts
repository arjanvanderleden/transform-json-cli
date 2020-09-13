import {Lookup} from '../types'

const isNotAnEmptyString = (s: string) => s.trim().length > 0
const toTrimmed = (s: string) => s.trim()

export const toStringArray = (src: string) => src === undefined ?
  [] :
  src
  .split(',')
  .map(toTrimmed)
  .filter(isNotAnEmptyString)

export const toDynamoDbKeys = (attributeList: string[], data: any) => {
  const result = attributeList
  .reduce((keys: any, attribute: string) => {
    switch (typeof data[attribute]) {
    case 'string':
      keys[attribute] = {S: data[attribute]}
      break
    case 'number':
      keys[attribute] = {N: data[attribute]}
      break
    default: keys[attribute] = {B: data[attribute]}
    }
    return keys
  }, {})
  return result
}

export const toPathParameters = (src?: string) => {
  return src === undefined ?
    {} :
    src
    .split(';')
    .map(toTrimmed)
    .filter(isNotAnEmptyString)
    .reduce((params: Lookup<string>, param: string) => {
      const [paramName, paramValue] = param.split('=')
      if (paramName === undefined || paramValue === undefined) {
        throw new Error(`Expected a pathParam value pair in the form <key>=<value>, but got ${param}`)
      }
      return params
    }, {})
}
