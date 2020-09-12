import {TransformBase} from '..'
import {TransformOptions} from '../../types'
import {DynamoDB} from 'aws-sdk'
import {toDynamoDbKeys, toStringArray} from '../../utils'

export interface DynamoDbStreamEventTransformOptions extends TransformOptions {
    keyAttributes: string;
}

export class DynamoDbStreamEventTransform extends TransformBase<DynamoDbStreamEventTransformOptions> {
    readonly name = 'dynamodb-stream-event';

    readonly description = 'creates a DynamoDb stream event';

    constructor() {
      super()
    }

    setOptions(options: DynamoDbStreamEventTransformOptions) {
      this.options = options
    }

    readonly transform = (data: any, options?: DynamoDbStreamEventTransformOptions) => {
      const NewImage = DynamoDB.Converter.marshall(data)
      const OldImage = DynamoDB.Converter.marshall(data)
      const Keys = toDynamoDbKeys(toStringArray(options!.keyAttributes), data)
      return {
        Records: [
          {
            eventID: '1',
            eventName: 'INSERT',
            eventVersion: '1.0',
            eventSource: 'aws:dynamodb',
            awsRegion: 'us-east-1',
            dynamodb: {
              Keys,
              NewImage,
              SequenceNumber: '111',
              SizeBytes: 26,
              StreamViewType: 'NEW_AND_OLD_IMAGES',
            },
            eventSourceARN: 'stream-ARN',
          },
          {
            eventID: '2',
            eventName: 'MODIFY',
            eventVersion: '1.0',
            eventSource: 'aws:dynamodb',
            awsRegion: 'us-east-1',
            dynamodb: {
              Keys,
              NewImage,
              OldImage,
              SequenceNumber: '222',
              SizeBytes: 59,
              StreamViewType: 'NEW_AND_OLD_IMAGES',
            },
            eventSourceARN: 'stream-ARN',
          },
          {
            eventID: '3',
            eventName: 'REMOVE',
            eventVersion: '1.0',
            eventSource: 'aws:dynamodb',
            awsRegion: 'us-east-1',
            dynamodb: {
              Keys,
              OldImage,
              SequenceNumber: '333',
              SizeBytes: 38,
              StreamViewType: 'NEW_AND_OLD_IMAGES',
            },
            eventSourceARN: 'stream-ARN',
          },
        ],
      }
    }
}

