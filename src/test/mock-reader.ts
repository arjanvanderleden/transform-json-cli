import {Reader} from '../transformator/reader'

export class MockDataReader implements Reader {
  constructor(private data: any, private options: any) {}

  async read() {
    const {data, options} = this
    return {data, options}
  }
}
