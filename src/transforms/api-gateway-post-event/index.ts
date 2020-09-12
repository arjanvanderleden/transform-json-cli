import {APIGatewayProxyEvent, APIGatewayEventDefaultAuthorizerContext, APIGatewayEventRequestContextWithAuthorizer} from 'aws-lambda'
import {TransformBase} from '..'
import {TransformOptions} from '../../types'
import {toPathParameters} from '../../utils'

export interface ApiGatewayPostEventTransformOptions extends TransformOptions {
    pathParameters?: string;
    queryStringParameters?: string;
    stageVariables?: string;
    path?: string;
}

export class ApiGatewayPostEventTransform extends TransformBase<ApiGatewayPostEventTransformOptions> {
    readonly name = 'apigateway-post-event';

    readonly description = 'creates an ApiGateway POST event';

    constructor() {
      super()
    }

    setOptions(options: ApiGatewayPostEventTransformOptions) {
      this.options = options
    }

    readonly transform = (data: any, options?: ApiGatewayPostEventTransformOptions) => {
      const pathParameters = toPathParameters(options?.pathParameters)
      const queryStringParameters = toPathParameters(options?.queryStringParameters)
      const stageVariables = toPathParameters(options?.stageVariables)
      const path: string = options!.path ?? '/test/path'
      const body = JSON.stringify(data)
      const requestContext: APIGatewayEventRequestContextWithAuthorizer<APIGatewayEventDefaultAuthorizerContext> = {
        path: '/dev/',
        accountId: '125002137610',
        resourceId: 'qdolsr1yhk',
        stage: 'dev',
        requestId: '0f2431a2-6d2f-11e7-b799-5152aa497861',
        identity: {
          cognitoIdentityPoolId: null,
          accountId: null,
          cognitoIdentityId: null,
          caller: null,
          apiKey: '',
          sourceIp: '50.129.117.14',
          accessKey: null,
          cognitoAuthenticationType: null,
          cognitoAuthenticationProvider: null,
          userArn: null,
          userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
          user: null,
        },
      } as any
      const headers = {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate, lzma, sdch, br',
        'Accept-Language': 'en-US,en;q=0.8',
        'CloudFront-Forwarded-Proto': 'https',
        'CloudFront-Is-Desktop-Viewer': 'true',
        'CloudFront-Is-Mobile-Viewer': 'false',
        'CloudFront-Is-SmartTV-Viewer': 'false',
        'CloudFront-Is-Tablet-Viewer': 'false',
        'CloudFront-Viewer-Country': 'US',
        Host: 'wt6mne2s9k.execute-api.us-west-2.amazonaws.com',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36 OPR/39.0.2256.48',
        Via: '1.1 fb7cca60f0ecd82ce07790c9c5eef16c.cloudfront.net (CloudFront)',
        'X-Amz-Cf-Id': 'nBsWBOrSHMgnaROZJK1wGCZ9PcRcSpq_oSXZNQwQ10OTZL4cimZo3g==',
        'X-Forwarded-For': '192.168.100.1, 192.168.1.1',
        'X-Forwarded-Port': '443',
        'X-Forwarded-Proto': 'https',
      }

      return {

        path,
        headers,
        multiValueHeaders: {},
        multiValueQueryStringParameters: {},
        pathParameters,
        requestContext,
        resourcePath: '/{proxy+}',
        apiId: 'wt6mne2s9k',
        resource: '/{proxy+}',
        httpMethod: 'POST',
        queryStringParameters,
        stageVariables,
        body,
        isBase64Encoded: false,

      } as APIGatewayProxyEvent
    }
}

