import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpResponse<any>>();
  
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const cachedResponse = this.cache.get(req.url);
      
      if (cachedResponse) {
        return of(cachedResponse);
      }

      return next.handle(req).pipe(
        tap((response) => {
          if (response instanceof HttpResponse) {
            this.cache.set(req.url, response);
          }
        })
      )
  }
}
