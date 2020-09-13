import {TransformBase} from '../transforms'
interface MockTransformoptiions {
    count: number;
}
export class MockTransform extends TransformBase<MockTransformoptiions> {
    readonly name: string = 'mock-transform';

    readonly description: string = 'transforms data';

    readonly transform = (data: any, options?: MockTransformoptiions) => {
      return {
        attribute: options?.count,
        oldAttribute: data.attribute,
      }
    }
}
