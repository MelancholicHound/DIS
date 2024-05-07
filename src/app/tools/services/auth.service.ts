import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, ObservableNotification, throwError } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';

import { ErrorHandlerService } from './error-handler.service';

import { Supplier } from '../models/Supplier';
import { Batch } from '../models/Batch';

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

  getBatches(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/batches`)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<any[]>('batches'))
    );
  }

  getSupplierDetailsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/suppliers/${id}`)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<any>('suppliers'))
    );
  }

  getAllDivisions(): Observable<any> {
    return this.http.get<any>(`${this.url}/divisions`)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<any>('divisions'))
    );
  }

  getAllSections(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/divisions/${id}/sections`)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<any>(`divisions/${id}/sections`))
    );
  }

  getAllProcessorsValues(): Observable<any> {
    return this.http.get<any>(`${this.url}/part/cpus`)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<any>('part/cpus'))
    );
  }

  getAllRamValues(): Observable<any> {
    return this.http.get<any>(`${this.url}/part/rams`)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<any>('part/rams'))
    );
  }

  getAllStorageValues(): Observable<any> {
    return this.http.get<any>(`${this.url}/part/storage`)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<any>('part/storage'))
    );
  }

  getAllVideoCard(): Observable<any> {
    return this.http.get<any>(`${this.url}/part/video-cards`)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<any>('part/video-cards'))
    );
  }

  postSupplier(supplier: Omit<Supplier, 'id'>): Observable<Supplier> {
    return this.http
    .post<Supplier>(`${this.url}/suppliers`, supplier, this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<Supplier>('suppliers'))
    );
  }

  postBatch(batch: Omit<Batch, 'id'>): Observable<Batch> {
    return this.http
    .post<Batch>(`${this.url}/batches`, batch, this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandler.handleError<Batch>('batches'))
    );
  }
}
