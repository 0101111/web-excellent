import { UniRestApiRequestOptions } from './rest-api-request-options.model';

export interface UniRestApiOptions {
  urlParameters: Record<string, string>;
  request: Partial<UniRestApiRequestOptions>;
}
