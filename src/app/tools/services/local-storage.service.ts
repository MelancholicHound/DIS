import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private deviceManager = 'device';

  constructor() { }

  getValue(): any {
    return localStorage.getItem(this.deviceManager);
  }

  setValue(value: any): void {
    localStorage.setItem(this.deviceManager, value);
  }

  valueChanges(): Observable<any> {
    return fromEvent<StorageEvent>(window, 'storage')
    .pipe(
      map(event => event.newValue),
      startWith(this.getValue())
    );
  }

  removeValue() {
    localStorage.removeItem(this.deviceManager);
  }
}
