export interface TransformOptions {

}

export type TransformFunction<TOptions> = (data: any, options?: TOptions) => any;
