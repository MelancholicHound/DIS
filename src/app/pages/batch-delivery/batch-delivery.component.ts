import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Batch {
  id : number;
  batchId : string;
  supplier : string;
  dateTested : string;
  dateDelivered : string;
  validUntil : string;
}

const SampleData: Batch[] = [
  { id : 1 , batchId : '2024-001' , supplier : 'Vera Equinox' , dateTested : '2024-01-01' , dateDelivered : '2024-01-01', validUntil : '2024-01-01' },
  { id : 2 , batchId : '2024-002' , supplier : 'Denielle B' , dateTested : '01/01/2024' , dateDelivered : '01/01/2024' , validUntil : '2024-01-01' },
  { id : 3 , batchId : '2024-003' , supplier : 'Francis B' , dateTested : '01/01/2024' , dateDelivered : '01/01/2024' , validUntil : '2024-01-01' },
];

@Component({
  selector: 'app-batch-delivery',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './batch-delivery.component.html',
  styleUrl: './batch-delivery.component.css'
})

export class BatchDeliveryComponent {
  displayedColumns: string [] = [ 'batchId' , 'supplier' , 'dateDelivered' , 'validUntil'];
  dataSource = [...SampleData];
}
