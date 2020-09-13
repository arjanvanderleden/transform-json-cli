import {MockDataReader} from '../test/mock-reader'
import {MockTransform} from '../test/mock-transform'
import {MockWriter} from '../test/mock-writer'
import {Transformator} from './transformator'

describe('transformator', () => {
  const data = {
    attribute: 'attribute',
  }

  const options = {
    count: 3,
  }

  it('should transform a transform with data', async done => {
    const reader = new MockDataReader(data, options)
    const writer = new MockWriter()
    const transforms = [new MockTransform()]

    const transformator = Transformator.create({reader, writer, transforms})

    await transformator.transform()

    expect(writer.data).toStrictEqual({
      attribute: 3,
      oldAttribute: 'attribute',
    })
    expect(writer.transform).toBe('mock-transform')
    done()
  })
})
