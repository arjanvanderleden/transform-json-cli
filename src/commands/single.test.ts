import {test} from '@oclif/test'
import {MockDataReader} from '../test/mock-reader'
import {MockTransform} from '../test/mock-transform'
import {MockWriter} from '../test/mock-writer'
import {Transformator} from '../transformator/transformator'
import {TransformRepository} from '../transforms/transform-repository'

describe('command single', () => {
  const data = {
    attribute: 'attribute',
  }

  const options = {
    count: 3,
  }

  const reader = new MockDataReader(data, options)
  const writer = new MockWriter()
  const mockTransform = new MockTransform()
  const transforms = [mockTransform]

  describe('an existing transform', () => {
    test
    .stub(Transformator, 'create', () => new Transformator({reader, writer, transforms}))
    .stub(TransformRepository, 'get', () => mockTransform)
    .command(['single', 'mock-transform', '-i ./does-not-exists.json'])
    .it('transforms for an existing transform', () => {
      expect(writer.data).toStrictEqual({
        attribute: 3,
        oldAttribute: 'attribute',
      })
      expect(writer.transform).toBe('mock-transform')
    })
  })

  describe('a not existing transform', () => {
    test
    .stub(Transformator, 'create', () => new Transformator({reader, writer, transforms}))
    .command(['single', 'command-does-not-exist', '-i ./does-not-exists.json'])
    .catch(error => {
      expect(error.message.indexOf('No such')).toBeGreaterThan(-1)
    })
    .it('will throw')
  })
})
