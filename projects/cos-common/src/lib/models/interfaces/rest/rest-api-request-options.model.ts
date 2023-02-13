import { HttpHeaders, HttpParams } from '@angular/common/http';

import { uniRequestObserveType } from '../../types/request-observe.type';
import { uniResponseType } from '../../types/response.type';

export interface UniRestApiRequestOptions {
  headers: HttpHeaders;
  observe: uniRequestObserveType;
  params: HttpParams | Record<string, string | string[] | number | number[] | boolean>;
  body: any;
  reportProgress: boolean;
  responseType: uniResponseType;
  withCredentials: boolean;
}
