import { UserService } from './../usuarios/services/user.service';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class InterceptoresService implements HttpInterceptor {

  headers = new HttpHeaders({
    // Ejemplo: añadir o modificar cosas en la cabecera
    //'Content-Type' : 'application/json',
    //token: this.user.token
  });

  constructor(private user: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('Pasando por el interceptor');

    const reqClone = req.clone({
      headers: this.headers
    });

    return next.handle( reqClone )
    .pipe(
       map( resp => {
         console.log('Haciendo algo con la respuesta');
         return resp;
       }),
       catchError( error => {
        console.log('Haciendo algo con los errores');
        return throwError('Error');
       })
    );

  }
 }