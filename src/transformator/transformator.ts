import {TransformBase} from '../transforms'
import {Reader} from './reader'
import {Writer} from './writer'

interface ConstructorParams {
  reader: Reader;
  writer: Writer;
  transforms: TransformBase<any>[];
}

export class Transformator {
  static create = (params: ConstructorParams) => new Transformator(params);

  constructor(private params: ConstructorParams) {
  }

  async transform() {
    const {reader, writer, transforms} = this.params

    const toTransformPromise = async (transform: TransformBase<any>) => {
      const {data, options} = await reader.read()
      const result = await transform.transform(data, options)
      await writer.write(result, transform.name)
    }

    const promises = transforms.map(toTransformPromise)
    return Promise.all(promises)
  }
}
