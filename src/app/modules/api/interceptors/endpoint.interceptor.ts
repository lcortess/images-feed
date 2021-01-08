import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class EndpointInterceptor implements HttpInterceptor {

  constructor() {}

  /**
   * Adds the API endpoint to the request URL
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const forwardSlash = request.url.charAt(0) === '/' ? '' : '/';
    const requestClone: object = {
      url: `${environment.api.endpoint}${forwardSlash}${request.url}`
    };
    const requestWithUrl = request.clone(requestClone);

    return next.handle(requestWithUrl);
  }
}
