import { Injectable } from '@angular/core';

import { Batch } from '../models/Batch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private sampleData: Batch[] = [
    { id : 1 , batchId : '2024-001' , supplier : 'Vera Equinox' , dateTested : '2024-01-01' , dateDelivered : '2024-01-01', validUntil : '2024-01-01' },
    { id : 2 , batchId : '2024-002' , supplier : 'Denielle B' , dateTested : '01/01/2024' , dateDelivered : '01/01/2024' , validUntil : '2024-01-01' },
    { id : 3 , batchId : '2024-003' , supplier : 'Francis B' , dateTested : '01/01/2024' , dateDelivered : '01/01/2024' , validUntil : '2024-01-01' }
  ];

  constructor() { }

  getSampleData(): Batch[] {
    return this.sampleData;
  }


}
