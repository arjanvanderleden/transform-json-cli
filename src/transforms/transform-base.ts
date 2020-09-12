import {TransformFunction, TransformOptions} from '../types/transform-function'

export abstract class TransformBase<TOptions extends TransformOptions> {

    abstract readonly name: string;
    abstract readonly description: string;
    abstract readonly transform: TransformFunction<TOptions>;

}
