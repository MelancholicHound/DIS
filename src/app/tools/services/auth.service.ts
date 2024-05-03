import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, ObservableNotification, throwError } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';

import { Batch } from '../models/Batch';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://192.168.3.201:8080/api/v1/dis';

  httpOptions: { headers : HttpHeaders } = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
  }

  private sampleData: Batch[] = [
    { id : 1 , batchId : '2024-001' , supplier : 'Vera Equinox' , dateTested : '2024-01-01' , dateDelivered : '2024-01-01', validUntil : '2024-01-01' },
    { id : 2 , batchId : '2024-002' , supplier : 'Denielle B' , dateTested : '01/01/2024' , dateDelivered : '01/01/2024' , validUntil : '2024-01-01' },
    { id : 3 , batchId : '2024-003' , supplier : 'Francis B' , dateTested : '01/01/2024' , dateDelivered : '01/01/2024' , validUntil : '2024-01-01' }
  ];

  private temp: Batch[] = [];

  constructor(private errorHandler : ErrorHandlerService) { }

  getSampleData(): Batch[] {
    return this.sampleData;
  }

  postTempBatch(batch: Batch){
    this.temp.push(batch);
  }

  getTempBatch() {
    return this.temp;
  }
}
