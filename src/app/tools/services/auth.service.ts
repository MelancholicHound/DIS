import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, ObservableNotification, throwError } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://192.168.3.201:8082/api/v1/dis';

  httpOptions: { headers : HttpHeaders } = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
  }

  constructor(private http : HttpClient,
              private errorHandler : ErrorHandlerService,
              private router : Router) { }

  getBatches(): Observable<any> {
    return this.http.get<any>(`${this.url}/batches`)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<any>('batches'))
    );
  }
}
