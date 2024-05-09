import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private deviceManager = 'device';

  private batchManager = 'batch';

  constructor() { }

  getDevValue(): any {
    return localStorage.getItem(this.deviceManager);
  }

  setDevValue(value: any): void {
    this.removeDevValue();
    localStorage.setItem(this.deviceManager, value);
  }

  valueDevChanges(): Observable<any> {
    return fromEvent<StorageEvent>(window, 'storage')
    .pipe(
      map(event => event.newValue),
      startWith(this.getDevValue())
    );
  }

  removeDevValue() {
    localStorage.removeItem(this.deviceManager);
  }

  setBatchId(value: any): void {
    this.deleteBatchId();
    localStorage.setItem(this.batchManager, value);
  }

  getBatchId(): any {
    return localStorage.getItem(this.batchManager);
  }

  deleteBatchId() {
    localStorage.removeItem(this.batchManager);
  }
 }
