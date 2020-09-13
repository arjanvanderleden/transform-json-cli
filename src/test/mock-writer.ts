import {Writer} from '../transformator/writer'
import {Lookup} from '../types/lookup'

export class MockWriter implements Writer {
  readonly data: Lookup<any> = {};

  transform?: string;

  async write(data: any, transform: string): Promise<void> {
    this.data[transform] = data
    this.transform = transform
  }
}
