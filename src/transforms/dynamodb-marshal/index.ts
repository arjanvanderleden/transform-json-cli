import {TransformBase} from '..'
import {TransformOptions} from '../../types'
import {DynamoDB} from 'aws-sdk'

export interface DynamoDbMarshallOptions extends TransformOptions {
}

export class DynamoDbMarshallTransform extends TransformBase<DynamoDbMarshallOptions> {
    readonly name = 'dynamodb-marshall';

    readonly description = 'creates a DynamoDb stream event';

    readonly transform = (data: any, _options?: DynamoDbMarshallOptions) => {
      return DynamoDB.Converter.marshall(data)
    }
}

