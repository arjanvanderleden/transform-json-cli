import {TransformFunction, TransformOptions} from '../types/transform-function'

export abstract class TransformBase<TOptions extends TransformOptions> {
    protected options: TOptions = {} as TOptions;

    abstract readonly name: string;

    abstract readonly description: string;

    abstract readonly transform: TransformFunction<TOptions>;

    abstract setOptions(options: TOptions): void;
}
