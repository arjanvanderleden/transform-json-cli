import {Writer} from '../transformator/writer'

export class MockWriter implements Writer {
    data: any;

    transform?: string;

    async write(data: any, transform: string): Promise<void> {
      this.data = data
      this.transform = transform
    }
}
