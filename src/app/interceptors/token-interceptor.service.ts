// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { FonctionLoginService } from '../Auth/Login/service/fonction-login.service';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService implements HttpInterceptor {

//   constructor(private authService : FonctionLoginService) { }

//   intercept(
//     request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
//     const token  = this.authService.getToken;
//     if (token) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
// }

// return next.handle(request).pipe(
//   catchError((err) => {
//     if (err.status === 401) {
//       //this.authService.logout();
//     }
//     const error = err.error.message || err.statusText;
//     return throwError(error);
//   })
// );
//   }

// }