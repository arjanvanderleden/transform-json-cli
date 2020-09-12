import { DynamoDbStreamEventTransform, S3NotificationEventTransform, TransformBase } from '.'
import { Lookup } from '../types'

export class TransformRepository {
  private static transforms: Lookup<TransformBase<any>> = {};

  static add(transform: TransformBase<any>) {
    this.transforms[transform.name] = transform
  }

  static listTransformers() {
    const toListItem = (key: string) => {
      const transform = this.transforms[key]
      return ({ name: transform.name, description: transform.description })
    }
    return Object.keys(this.transforms).map(toListItem)
  }

  static loadTransforms() {
    this.add(new S3NotificationEventTransform())
    this.add(new DynamoDbStreamEventTransform())
  }

  static get(key: string) {
    if (this.transforms[key] === undefined) {
      throw new Error(`No such transform ${key}`)
    }
    return this.transforms[key]
  }

  static getAll() {
    const toTransform = (key: string) => this.transforms[key];
    return Object.keys(this.transforms).map(toTransform);
  }
}



